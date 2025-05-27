import * as d3 from "d3";
import React, { useCallback, useMemo } from "react";
import CrossPlot from "./crossPlot";
import { calculateBoxStats, scottRule, silvermanRule, kernelDensityEstimator, gaussian, seededRandom } from "./helpers";
import { SingleViolinProps, TooltipData } from "./types";
import { ViolinPlot as VisxViolinPlot } from "@visx/stats";
import ViolinTooltip from "./violinTooltip";
import { Portal, useTooltip } from "@visx/tooltip";

const SingleViolin = <T,>({ distribution, distIndex, violinProps, crossProps, xScale, yScale, offset, xDomain, disableCrossPlot, disableViolinPlot, onViolinClicked }: SingleViolinProps<T>) => {

    const {
        tooltipData,
        tooltipLeft,
        tooltipTop,
        tooltipOpen,
        showTooltip,
        hideTooltip,
    } = useTooltip<TooltipData>();

    //get all the stats for the box plot
    const { min, max, firstQuartile, thirdQuartile, median, outliers } = calculateBoxStats(distribution.data, crossProps?.outliers ?? "all");

    const data = useMemo(() => {
        const yTicks = d3.range(min, max, 0.1);

        //bandwidth / binwidth for smoothing, based on user input
        const bandwidth = typeof violinProps?.bandwidth === "number"
            ? violinProps.bandwidth
            : typeof violinProps?.bandwidth === "function"
                ? violinProps.bandwidth(distribution.data)
                : violinProps?.bandwidth === "scott"
                    ? scottRule(distribution.data)
                    : silvermanRule(distribution.data);

        const kde = kernelDensityEstimator(gaussian(bandwidth), yTicks);

        const densityData = kde(distribution.data)

        return [...densityData].sort((a, b) => a.value - b.value)
    }, [distribution.data, max, min, violinProps])

    const violinWidth = xScale.bandwidth();
    const boxWidth = violinWidth * .25;

    const violinTooltip = useMemo(() => ({
        label: distribution.label,
        sampleSize: distribution.data.length,
        median: median.toFixed(2),
        firstQuartile: firstQuartile.toFixed(2),
        thirdQuartile: thirdQuartile.toFixed(2)
    }), [distribution.label, distribution.data.length, median, firstQuartile, thirdQuartile]);

    const handleMouseMove = useCallback((event: React.MouseEvent<SVGPathElement>, data: TooltipData) => {
        showTooltip({
            tooltipData: data,
            tooltipLeft: event.pageX,
            tooltipTop: event.pageY,
        });
    }, [showTooltip]);

    const handleClick = () => {
        if (!onViolinClicked || !tooltipData) return;

        if (tooltipData) {
            onViolinClicked(distribution);
        }
    };

    const pointsNoOutliers: number[] = distribution.data.filter(d => !outliers.includes(d))

    return (
        <React.Fragment key={distribution.label ?? `group-${distIndex}`}>
            {
                //display plots if enough data provided
                <g
                    key={distribution.label ?? `group-${distIndex}`}
                    onMouseLeave={hideTooltip}
                >
                    {distribution.data.length >= (violinProps?.pointDisplayThreshold ?? 3) && !disableViolinPlot &&
                        <VisxViolinPlot
                            data={data}
                            stroke={distribution.color ?? "black"}
                            strokeWidth={
                                tooltipData === violinTooltip
                                    ? (violinProps?.stroke ?? 1) + 1
                                    : violinProps?.stroke ?? 1
                            }
                            left={(xScale(xDomain[distIndex]) ?? 0) + offset}
                            width={violinWidth}
                            valueScale={yScale}
                            fill={distribution.color ?? "none"}
                            fillOpacity={0.3}
                            pointerEvents="all"
                            onMouseMove={(e) => handleMouseMove(e, violinTooltip)}
                            onClick={handleClick}
                        />
                    }
                    {distribution.data.length >= (violinProps?.pointDisplayThreshold ?? 3) && !disableCrossPlot &&
                        <CrossPlot
                            crossProps={crossProps}
                            left={(xScale(xDomain[distIndex]) ?? 0) + offset + violinWidth / 2}
                            median={median}
                            firstQuartile={firstQuartile}
                            thirdQuartile={thirdQuartile}
                            outliers={outliers}
                            yScale={yScale}
                            medianWidth={boxWidth}
                            label={distribution.label ?? ""}
                            tooltipData={tooltipData ?? {}}
                            handleMouseMove={handleMouseMove}
                        />
                    }
                    {/* show all poionts for each distribution */}
                    {distribution.data.length >= (violinProps?.pointDisplayThreshold ?? 3) && violinProps?.showAllPoints &&
                        pointsNoOutliers.map((point: number, index: number) => {

                            const baseX = (xScale(xDomain[distIndex]) ?? 0) + offset + violinWidth / 2;

                            const jitterAmount = violinProps?.jitter ?? 0;
                            const seed = `${distribution.label}-${point}-${index}`;
                            const jitterX = jitterAmount > 0
                                ? (seededRandom(seed) - 0.5) * 2 * jitterAmount
                                : 0;

                            const cx = baseX + jitterX;
                            const cy = yScale(point);
                            const radius = violinProps?.pointRadius ?? 2;

                            const pointTooltip = {
                                label: distribution.label,
                                value: point.toFixed(2),
                            };

                            const isHighlighted =
                                tooltipData &&
                                tooltipData.label === pointTooltip.label &&
                                tooltipData.value === pointTooltip.value

                            return (
                                <path
                                    key={`${distribution.label ?? distIndex}-point-${index}`}
                                    d={`M ${cx},${cy} m -${radius},0 a ${radius},${radius} 0 1,0 ${2 * radius},0 a ${radius},${radius} 0 1,0 -${2 * radius},0`}
                                    stroke={distribution.color ?? "black"}
                                    strokeWidth={(violinProps?.stroke ?? 1) + (isHighlighted ? 1 : 0)}
                                    fill={distribution.color ?? "black"}
                                    pointerEvents="all"
                                    onMouseMove={(e) => handleMouseMove(e, pointTooltip)}
                                />
                            );
                        })
                    }
                    {/* display points if data points are less than threshold (3) */}
                    {distribution.data.length < (violinProps?.pointDisplayThreshold ?? 3) &&
                        distribution.data.map((point: number, index: number) => {
                            const cx = (xScale(xDomain[distIndex]) ?? 0) + offset + violinWidth / 2;
                            const cy = yScale(point);
                            const radius = violinProps?.pointRadius ?? 4;
                            const pointTooltip = {
                                label: distribution.label,
                                value: point.toFixed(2),
                            };

                            const isHighlighted =
                                tooltipData &&
                                tooltipData.label === pointTooltip.label &&
                                tooltipData.value === pointTooltip.value

                            return (
                                <circle
                                    key={index}
                                    cx={cx}
                                    cy={cy}
                                    r={radius}
                                    stroke={distribution.color ?? "black"}
                                    strokeWidth={(violinProps?.stroke ?? 1) + (isHighlighted ? 1 : 0)}
                                    fill={distribution.color ?? "none"}
                                    fillOpacity={0.3}
                                    pointerEvents="all"
                                    onMouseMove={(e) => handleMouseMove(e, pointTooltip)}
                                />
                            );
                        })}

                </g>
            }
            {tooltipOpen && tooltipData && (
                <Portal>
                    <ViolinTooltip
                        left={tooltipLeft ?? 0}
                        top={tooltipTop ?? 0}
                        data={tooltipData}
                        open={tooltipOpen}
                        key={`${tooltipLeft}-${tooltipTop}`}
                    />
                </Portal>
            )}
        </React.Fragment>
    )
}

export default SingleViolin;