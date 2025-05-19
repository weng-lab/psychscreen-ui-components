import * as d3 from "d3";
import React, { useCallback, useMemo } from "react";
import CrossPlot from "./crossPlot";
import { calculateBoxStats, scottRule, silvermanRule, kernelDensityEstimator, gaussian, seededRandom } from "./helpers";
import { SingleViolinProps, TooltipData } from "./types";
import { ViolinPlot as VisxViolinPlot } from "@visx/stats";
import ViolinTooltip from "./violinTooltip";
import { Portal, useTooltip } from "@visx/tooltip";

const SingleViolin = ({ distribution, distIndex, violinProps, crossProps, xScale, yScale, offset, xDomain, disableCrossPlot, disableViolinPlot }: SingleViolinProps) => {

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

    const handleMouseMove = useCallback((event: React.MouseEvent<SVGSVGElement>) => {
        showTooltip({
            tooltipData: { label: "Example", value: "42" },
            tooltipLeft: event.pageX,
            tooltipTop: event.pageY,
        });
    }, [showTooltip]);

    return (
        <React.Fragment key={distribution.label ?? `group-${distIndex}`}>
            {
                //display plots if enough data provided
                <g
                    key={distribution.label ?? `group-${distIndex}`}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={hideTooltip}
                >
                    {distribution.data.length >= (violinProps?.pointDisplayThreshold ?? 3) && !disableViolinPlot &&
                        <VisxViolinPlot
                            data={data}
                            stroke={distribution.color ?? "black"}
                            // strokeWidth={
                            //     xDomain[i] === hovered
                            //         ? (violinProps?.stroke ?? 1) + 1
                            //         : violinProps?.stroke ?? 1
                            // }
                            left={(xScale(xDomain[distIndex]) ?? 0) + offset}
                            width={violinWidth}
                            valueScale={yScale}
                            fill={distribution.color ?? "none"}
                            fillOpacity={0.3}
                            pointerEvents="all"
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
                        />
                    }
                    {distribution.data.length >= (violinProps?.pointDisplayThreshold ?? 3) && violinProps?.showAllPoints &&
                        distribution.data.map((point: number, index: number) => {
                            const baseX = (xScale(xDomain[distIndex]) ?? 0) + offset + violinWidth / 2;
                            
                            const jitterAmount = violinProps?.jitter ?? 0;
                            const seed = `${distribution.label}-${point}-${index}`;
                            const jitterX = jitterAmount > 0
                                ? (seededRandom(seed) - 0.5) * 2 * jitterAmount
                                : 0;

                            const cx = baseX + jitterX;
                            const cy = yScale(point);
                            const radius = violinProps?.pointRadius ?? 4;

                            return (
                                <path
                                    key={`${distribution.label ?? distIndex}-point-${index}`}
                                    d={`M ${cx},${cy} m -${radius},0 a ${radius},${radius} 0 1,0 ${2 * radius},0 a ${radius},${radius} 0 1,0 -${2 * radius},0`}
                                    stroke={distribution.color ?? "black"}
                                    fill={distribution.color ?? "none"}
                                    fillOpacity={0.3}
                                    pointerEvents="all"
                                />
                            );
                        })
                    }
                    {/* display points if data points are less than threshold (3) */}
                    {distribution.data.length < (violinProps?.pointDisplayThreshold ?? 3) &&
                        distribution.data.map((point: number, index: number) => (
                            <circle
                                key={index}
                                cx={(xScale(xDomain[distIndex]) ?? 0) + offset + violinWidth / 2}
                                cy={yScale(point)}
                                r={violinProps?.pointRadius ?? 4}
                                stroke={distribution.color ?? "black"}
                                // strokeWidth={
                                //     xDomain[i] === hovered
                                //         ? (violinProps?.stroke ?? 1) + 1
                                //         : violinProps?.stroke ?? 1
                                // }
                                fill={distribution.color ?? "none"}
                                fillOpacity={0.3}
                                pointerEvents="all"
                            />
                        ))
                    }
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