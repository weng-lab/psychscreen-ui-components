import * as d3 from "d3";
import React, { useCallback, useMemo } from "react";
import CrossPlot from "./crossPlot";
import { calculateBoxStats, scottRule, silvermanRule, kernelDensityEstimator, gaussian, seededRandom } from "./helpers";
import { ViolinPoint, SingleViolinProps, TooltipData } from "./types";
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

    const outlierPoints: ViolinPoint<T>[] = distribution.data
        .filter(d => outliers.includes(d.value))
        .map(d => ({
            ...d,
            outlier: true
        }));
    const pointsNoOutliers: ViolinPoint<T>[] = distribution.data.filter(d => !outliers.includes(d.value))

    const violinData = useMemo(() => {
        const step = (max - min) / Math.max(100, data.length);
        const ticks = d3.range(min, max, step);

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

    const violinWidth = Math.min(labelScale.bandwidth(), 50);
    const boxWidth = crossProps?.medianWidth ?? violinWidth * .25;

    const violinTooltip: TooltipData<T> = useMemo(() => ({
        label: distribution.label,
        sampleSize: distribution.data.length,
        median: median.toFixed(2),
        firstQuartile: firstQuartile.toFixed(2),
        thirdQuartile: thirdQuartile.toFixed(2)
    }), [distribution.label, distribution.data.length, median, firstQuartile, thirdQuartile]);

    const handleMouseMove = useCallback((event: React.MouseEvent<SVGPathElement>, data: TooltipData<T>, point?: ViolinPoint<T>) => {
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

    const handlePointClick = (point: ViolinPoint<T>) => {
        if (!onPointClicked || !tooltipData) return;

        if (tooltipData) {
            onPointClicked(point);
        }
    };

    //center of each Violin
    const violinCenter = horizontal ? (labelScale(labels[distIndex]) ?? 0) + violinWidth / 2 : (labelScale(labels[distIndex]) ?? 0) + offset + labelScale.bandwidth() / 2;
    const widthScale = d3.scaleLinear()
        .domain([0, d3.max(violinData, d => Math.abs(d.count)) || 1])
        .range([0, violinWidth / 2]);

    //filter out nan values if any
    const filteredData = violinData.filter(d => d && d.count != null && d.value != null);

    //mirror the data so that both sides are drawn
    let points = [
        ...filteredData.map(d => ({
            x: violinCenter + widthScale(d.count),
            y: valueScale(d.value),
        })),
        ...filteredData.slice().reverse().map(d => ({
            x: violinCenter - widthScale(d.count),
            y: valueScale(d.value),
        }))
    ];

    // close the path at the second point instead of the first since points 0,1 are closer together
    if (points.length > 2) {
        const modifiedPoints = points.slice(1);
        modifiedPoints.push(points[0]);
        modifiedPoints.push(points[1]);
        points = modifiedPoints;
    }

    const violinPath = d3.line<{ x: number; y: number }>()
        .x(d => horizontal ? d.y : d.x)
        .y(d => horizontal ? d.x : d.y)
        .curve(d3.curveBasis)(points) ?? null;

    return (
        <React.Fragment key={distribution.label ?? `group-${distIndex}`}>
            {
                //display plots if enough data provided
                <g
                    key={distribution.label ?? `group-${distIndex}`}
                    onMouseLeave={hideTooltip}
                    transform={horizontal ? `translate(${offset}, 0)` : undefined}
                >
                    {distribution.data.length >= (violinProps?.pointDisplayThreshold ?? 3) && !disableViolinPlot && violinPath && (
                        <>
                            <path
                                d={violinPath}
                                fill={distribution.violinColor ?? 'none'}
                                fillOpacity={distribution.opacity ?? 0.3}
                                stroke={distribution.violinColor ?? 'black'}
                                strokeOpacity={distribution.opacity ?? 1}
                                strokeWidth={
                                    tooltipData === violinTooltip
                                        ? (violinProps?.stroke ?? 1) + 1
                                        : violinProps?.stroke ?? 1
                                }
                                pointerEvents="all"
                                onMouseMove={(e) => handleMouseMove(e, violinTooltip)}
                                onClick={handleViolinClick}
                            />
                        </>
                    )
                    }
                    {distribution.data.length >= (violinProps?.pointDisplayThreshold ?? 3) && !disableCrossPlot &&
                        <CrossPlot
                            crossProps={crossProps}
                            left={horizontal ? 0 : violinCenter}
                            top={horizontal ? violinCenter : 0}
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
                        const vertcy = valueScale(outlier.value);
                        const horizoncx = valueScale(outlier.value)
                        const cx = horizontal ? horizoncx : violinCenter
                        const cy = horizontal ? violinCenter : vertcy

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
                        pointsNoOutliers.map((point: ViolinPoint<T>, index: number) => {

                            const vertcy = valueScale(point.value);
                            const horizoncx = valueScale(point.value)

                            const jitterAmount = violinProps?.jitter ?? 0;
                            const seed = `${distribution.label}-${point}-${index}`;
                            const jitterX = jitterAmount > 0
                                ? (seededRandom(seed) - 0.5) * 2 * jitterAmount
                                : 0;

                            const cx = horizontal ? horizoncx : violinCenter + jitterX;
                            const cy = horizontal ? violinCenter + jitterX : vertcy

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
                        distribution.data.map((point: ViolinPoint<T>, index: number) => {
                            const vertcy = valueScale(point.value);
                            const horizoncx = valueScale(point.value)
                            const cx = horizontal ? horizoncx : violinCenter
                            const cy = horizontal ? violinCenter : vertcy
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