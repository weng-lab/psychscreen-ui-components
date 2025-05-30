import * as d3 from "d3";
import React, { useCallback, useMemo } from "react";
import CrossPlot from "./crossPlot";
import { calculateBoxStats, scottRule, silvermanRule, kernelDensityEstimator, gaussian, seededRandom } from "./helpers";
import { Point, SingleViolinProps, TooltipData } from "./types";
import { ViolinPlot as VisxViolinPlot } from "@visx/stats";
import ViolinTooltip from "./violinTooltip";
import { Portal, useTooltip } from "@visx/tooltip";

const SingleViolin = <T,>({
    distribution,
    distIndex,
    violinProps,
    crossProps,
    valueScale,
    labelScale,
    offset,
    labels,
    disableCrossPlot,
    disableViolinPlot,
    horizontal,
    pointTooltipBody,
    onViolinClicked,
    onPointClicked
}: SingleViolinProps<T>) => {

    const {
        tooltipData,
        tooltipLeft,
        tooltipTop,
        tooltipOpen,
        showTooltip,
        hideTooltip,
    } = useTooltip<TooltipData<T>>();

    const data = distribution.data.flatMap(d => d.value)

    //get all the stats for the box plot
    const { min, max, firstQuartile, thirdQuartile, median, outliers } = calculateBoxStats(data, crossProps?.outliers ?? "all");

    const outlierPoints: Point<T>[] = distribution.data.filter(d => outliers.includes(d.value))
    const pointsNoOutliers: Point<T>[] = distribution.data.filter(d => !outliers.includes(d.value))

    const violinData = useMemo(() => {
        const ticks = d3.range(min, max, .1);

        //bandwidth / binwidth for smoothing, based on user input
        const bandwidth = typeof violinProps?.bandwidth === "number"
            ? violinProps.bandwidth
            : typeof violinProps?.bandwidth === "function"
                ? violinProps.bandwidth(data)
                : violinProps?.bandwidth === "scott"
                    ? scottRule(data)
                    : silvermanRule(data);

        const kde = kernelDensityEstimator(gaussian(bandwidth), ticks);

        const densityData = kde(data);

        return [...densityData].sort((a, b) => a.value - b.value)
    }, [data, max, min, violinProps])

    const violinWidth = labelScale.bandwidth();
    const boxWidth = crossProps?.medianWidth ?? violinWidth * .25;

    const violinTooltip: TooltipData<T> = useMemo(() => ({
        label: distribution.label,
        sampleSize: distribution.data.length,
        median: median.toFixed(2),
        firstQuartile: firstQuartile.toFixed(2),
        thirdQuartile: thirdQuartile.toFixed(2)
    }), [distribution.label, distribution.data.length, median, firstQuartile, thirdQuartile]);

    const handleMouseMove = useCallback((event: React.MouseEvent<SVGPathElement>, data: TooltipData<T>, point?: Point<T>) => {
        showTooltip({
            tooltipData: point && pointTooltipBody ? { point: point } : data,
            tooltipLeft: event.pageX,
            tooltipTop: event.pageY,
        });
    }, [pointTooltipBody, showTooltip]);

    const handleViolinClick = () => {
        if (!onViolinClicked || !tooltipData) return;

        if (tooltipData) {
            onViolinClicked(distribution);
        }
    };

    const handlePointClick = (point: Point<T>) => {
        if (!onPointClicked || !tooltipData) return;

        if (tooltipData) {
            onPointClicked(point);
        }
    };

    return (
        <React.Fragment key={distribution.label ?? `group-${distIndex}`}>
            {
                //display plots if enough data provided
                <g
                    key={distribution.label ?? `group-${distIndex}`}
                    onMouseLeave={hideTooltip}
                    transform={horizontal ? `translate(${offset}, 0)` : undefined}
                >
                    {distribution.data.length >= (violinProps?.pointDisplayThreshold ?? 3) && !disableViolinPlot &&
                        <VisxViolinPlot
                            data={violinData}
                            stroke={distribution.violinColor ?? "black"}
                            strokeWidth={
                                tooltipData === violinTooltip
                                    ? (violinProps?.stroke ?? 1) + 1
                                    : violinProps?.stroke ?? 1
                            }
                            //when horizontal is true, left prop is ignored hence the conditional translate in the g tag above
                            left={(labelScale(labels[distIndex]) ?? 0) + offset}
                            top={(labelScale(labels[distIndex]) ?? 0)}
                            width={violinWidth}
                            valueScale={valueScale}
                            fill={distribution.violinColor ?? "none"}
                            fillOpacity={distribution.opacity ?? 0.3}
                            strokeOpacity={distribution.opacity ?? 1}
                            pointerEvents="all"
                            onMouseMove={(e) => handleMouseMove(e, violinTooltip)}
                            onClick={handleViolinClick}
                            horizontal={horizontal}
                        />
                    }
                    {distribution.data.length >= (violinProps?.pointDisplayThreshold ?? 3) && !disableCrossPlot &&
                        <CrossPlot
                            crossProps={crossProps}
                            left={horizontal ? 0 : (labelScale(labels[distIndex]) ?? 0) + offset + violinWidth / 2}
                            top={horizontal ? (labelScale(labels[distIndex]) ?? 0) + violinWidth / 2 : 0}
                            median={median}
                            firstQuartile={firstQuartile}
                            thirdQuartile={thirdQuartile}
                            valueScale={valueScale}
                            medianWidth={boxWidth}
                            tooltipData={tooltipData ?? {}}
                            handleMouseMove={handleMouseMove}
                            handleCrossClick={handleViolinClick}
                            disableViolinPlot={disableViolinPlot}
                            tooltip={violinTooltip}
                            horizontal={horizontal}
                        />
                    }
                    {/* Outliers */}
                    {outlierPoints.map((outlier, index) => {
                        const vertcx = (labelScale(labels[distIndex]) ?? 0) + offset + violinWidth / 2;
                        const vertcy = valueScale(outlier.value);
                        const horizoncx = valueScale(outlier.value)
                        const horizoncy = (labelScale(labels[distIndex]) ?? 0) + violinWidth / 2;
                        const cx = horizontal ? horizoncx : vertcx
                        const cy = horizontal ? horizoncy : vertcy

                        const pointTooltip = {
                            outlier: true,
                            label: distribution.label,
                            value: outlier.value.toFixed(2),
                        };

                        const isHighlighted = pointTooltipBody
                            ? tooltipData?.point === outlier :
                            tooltipData?.label === pointTooltip.label &&
                            tooltipData?.value === pointTooltip.value;

                        const radius = outlier.radius ?? 4

                        return (
                            <circle
                                key={index}
                                cx={cx}
                                cy={cy}
                                r={isHighlighted ? radius + 1 : radius}
                                stroke={isHighlighted ? "#000000" : "none"}
                                fill={outlier.color ?? distribution.violinColor ?? "#000000"}
                                opacity={outlier.opacity ?? distribution.opacity ?? 1}
                                pointerEvents="all"
                                onMouseMove={(e) => handleMouseMove(e, pointTooltip, outlier)}
                                onClick={() => handlePointClick(outlier)}
                            />
                        )
                    })}
                    {/* show all poionts for each distribution */}
                    {distribution.data.length >= (violinProps?.pointDisplayThreshold ?? 3) && violinProps?.showAllPoints &&
                        pointsNoOutliers.map((point: Point<T>, index: number) => {

                            const vertcx = (labelScale(labels[distIndex]) ?? 0) + offset + violinWidth / 2;
                            const vertcy = valueScale(point.value);
                            const horizoncx = valueScale(point.value)
                            const horizoncy = (labelScale(labels[distIndex]) ?? 0) + violinWidth / 2;

                            const jitterAmount = violinProps?.jitter ?? 0;
                            const seed = `${distribution.label}-${point}-${index}`;
                            const jitterX = jitterAmount > 0
                                ? (seededRandom(seed) - 0.5) * 2 * jitterAmount
                                : 0;

                            const cx = horizontal ? horizoncx : vertcx + jitterX;
                            const cy = horizontal ? horizoncy + jitterX : vertcy

                            const pointTooltip = {
                                label: distribution.label,
                                value: point.value.toFixed(2),
                            };

                            const isHighlighted = pointTooltipBody
                                ? tooltipData?.point === point :
                                tooltipData?.label === pointTooltip.label &&
                                tooltipData?.value === pointTooltip.value;

                            const r = point.radius ?? 2
                            const radius = isHighlighted ? r + 1 : r;

                            return (
                                <path
                                    key={`${distribution.label ?? distIndex}-point-${index}`}
                                    d={`M ${cx},${cy} m -${radius},0 a ${radius},${radius} 0 1,0 ${2 * radius},0 a ${radius},${radius} 0 1,0 -${2 * radius},0`}
                                    stroke={isHighlighted ? "black" : "none"}
                                    fill={point.color ?? distribution.violinColor ?? "black"}
                                    opacity={point.opacity ?? distribution.opacity ?? 1}
                                    pointerEvents="all"
                                    onMouseMove={(e) => handleMouseMove(e, pointTooltip, point)}
                                    onClick={() => handlePointClick(point)}
                                />
                            );
                        })
                    }
                    {/* display points if data points are less than threshold (3) */}
                    {distribution.data.length < (violinProps?.pointDisplayThreshold ?? 3) &&
                        distribution.data.map((point: Point<T>, index: number) => {
                            const vertcx = (labelScale(labels[distIndex]) ?? 0) + offset + violinWidth / 2;
                            const vertcy = valueScale(point.value);
                            const horizoncx = valueScale(point.value)
                            const horizoncy = (labelScale(labels[distIndex]) ?? 0) + violinWidth / 2;
                            const cx = horizontal ? horizoncx : vertcx
                            const cy = horizontal ? horizoncy : vertcy
                            const radius = point.radius ?? 2;

                            const pointTooltip = {
                                label: distribution.label,
                                value: point.value.toFixed(2),
                            };

                            const isHighlighted = pointTooltipBody
                                ? tooltipData?.point === point :
                                tooltipData?.label === pointTooltip.label &&
                                tooltipData?.value === pointTooltip.value;

                            return (
                                <circle
                                    key={index}
                                    cx={cx}
                                    cy={cy}
                                    r={isHighlighted ? radius + 1 : radius}
                                    stroke={isHighlighted ? "black" : "none"}
                                    fill={point.color ?? distribution.violinColor ?? "black"}
                                    opacity={point.opacity ?? distribution.opacity ?? 1}
                                    pointerEvents="all"
                                    onMouseMove={(e) => handleMouseMove(e, pointTooltip, point)}
                                    onClick={() => handlePointClick(point)}
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
                        pointTooltipBody={pointTooltipBody}
                    />
                </Portal>
            )}
        </React.Fragment>
    )
}

export default SingleViolin;