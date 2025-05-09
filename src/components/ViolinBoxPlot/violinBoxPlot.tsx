import { TooltipData, Distribution, ViolinBoxPlotProps } from "./types";
import { useParentSize } from '@visx/responsive';
import { Group } from "@visx/group";
import { ViolinPlot, BoxPlot } from "@visx/stats";
import { scaleBand, scaleLinear } from "@visx/scale";
import { Tooltip } from "@visx/tooltip";
import { AxisLeft, AxisBottom } from '@visx/axis';
import { useCallback, useRef, useState } from "react";
import { Text } from '@visx/text';
import { calculateBoxStats, getTextHeight } from "./helpers";

const ViolinBoxPlot = <T extends object>(
    props: ViolinBoxPlotProps<T>
) => {
    const { parentRef, width: parentWidth, height: parentHeight } = useParentSize();

    const [tooltipData, setTooltipData] = useState<TooltipData | null | T>()
    const [tooltipOpen, setTooltipOpen] = useState<boolean>(false)

    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    //ref for listening to mouse movements
    const svgRef = useRef<SVGSVGElement>(null);

    //Array of labels
    const xDomain = props.distributions.map((x, i) => x.label ?? `Group ${i + 1}`);
    
    const offset = 40;
    const labelOrientation = props.labelOrientation ?? "horizontal"
    const fontSize = 15;

    //If the label orientation is anything but horizontal, find the max height of the elements, otherwise set to fontsize
    const maxLabelHeight = labelOrientation === "horizontal" ? fontSize : Math.max(
        ...xDomain.map(label => getTextHeight(label, fontSize, "Arial"))
    ) / (labelOrientation !== "vertical" ? 1.5 : 1);

    const handleMouseMove = useCallback((event: React.MouseEvent<SVGSVGElement>) => {
        if (!svgRef.current) return;

        const bounds = svgRef.current.getBoundingClientRect();

        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;

        setMouseX(x);
        setMouseY(y);
    }, []);

    const showTooltip = (data: TooltipData | T) => {
        setTooltipData(data);
        setTooltipOpen(true);
    };

    const hideTooltip = () => {
        setTooltipOpen(false);
        setTooltipData(null)
    };

    // bounds
    const xMax = parentWidth;
    const yMax = parentHeight - maxLabelHeight - 2 * offset;

    //all values from data spread out based on count
    const allValues: number[] = props.distributions.flatMap(x =>
        x.data.flatMap(d => Array(d.count).fill(d.value))
    );

    const minYValue = Math.min(...allValues);
    const maxYValue = Math.max(...allValues);

    // scales
    const xScale = scaleBand<string>({
        range: [0, xMax],
        round: true,
        domain: xDomain,
        padding: 0.4,
    });

    const yScale = scaleLinear<number>({
        range: [yMax, 0],
        round: true,
        //make the bottom most tick 7% of the domain less so that there is room between the lowest plot and the bottom axis
        domain: [minYValue - (.07 * (maxYValue - minYValue)), maxYValue],
    });

    const axisLeftLabel = (
        <Text
            textAnchor="middle"
            verticalAnchor="end"
            angle={-90}
            fontSize={fontSize}
            y={yMax / 2}
            x={0}
        >
            {props.leftAxisLabel}
        </Text>
    );

    const violinWidth = xScale.bandwidth();
    const boxWidth = violinWidth * .25;

    return (
        <div style={{ position: "relative", width: "100%", height: "100%" }} ref={parentRef}>
            <div style={{ position: "absolute", visibility: "hidden", width: 0, height: 0, overflow: "hidden" }} />
            <svg width={parentWidth} height={parentHeight} onMouseMove={handleMouseMove} ref={svgRef}>
                <Group top={offset} left={offset}>
                    <AxisLeft
                        left={offset}
                        scale={yScale}
                        stroke="black"
                        tickStroke="black"
                        tickLabelProps={() => ({
                            fill: 'black',
                            fontSize: fontSize,
                            textAnchor: 'end',
                            dy: '0.33em',
                        })}
                    />
                    {axisLeftLabel}
                    <AxisBottom
                        left={offset}
                        top={yMax}
                        scale={xScale}
                        stroke="black"
                        tickStroke="black"
                        tickLabelProps={() => ({
                            fill: 'black',
                            fontSize: fontSize,
                            textAnchor: labelOrientation === "vertical" || labelOrientation === "leftDiagonal" ? "end" : labelOrientation === "rightDiagonal" ? "start" : "middle",
                        })}
                        tickComponent={({ x, y, formattedValue, ...tickProps }) => {
                            if (labelOrientation !== "horizontal") {
                                return (
                                    <text
                                        {...tickProps}
                                        x={x}
                                        y={y}
                                        transform={
                                            labelOrientation === "vertical" ? `rotate(-90, ${x}, ${y})` :
                                            labelOrientation === "leftDiagonal" ? `rotate(-45, ${x}, ${y})` :
                                            `rotate(45, ${x}, ${y})`
                                        }
                                        textAnchor={labelOrientation === "vertical" || labelOrientation === "leftDiagonal" ? "end" : labelOrientation === "rightDiagonal" ? "start" : "middle"}
                                    >
                                        {formattedValue}
                                    </text>
                                );
                            }
                            return (
                                <text {...tickProps} x={x} y={y} textAnchor="middle">
                                    {formattedValue}
                                </text>
                            );
                        }}
                    />
                    {props.distributions.map((x: Distribution<T>, i) => {
                        //get all the stats for the box plot
                        const { min, max, firstQuartile, thirdQuartile, median, outliers } = calculateBoxStats(x.data, props.outliers ?? false, props.showAllPoints ? x.otherData : []);

                        //filter out the outliers so they are not included in the violin plot
                        const filteredData = x.data.filter(d => d.value >= min && d.value <= max);
                        return (
                            <g key={i}>
                                {!props.disableViolinPlot &&
                                    <ViolinPlot
                                        data={[...filteredData].sort((a, b) => a.value - b.value)}
                                        stroke="black"
                                        strokeWidth={props.violinProps?.stroke ?? 1}
                                        left={(xScale(xDomain[i]) ?? 0) + offset}
                                        width={violinWidth}
                                        valueScale={yScale}
                                        fill={x.color ?? "none"}
                                    />
                                }
                                {!props.disableBoxPlot &&
                                    <BoxPlot
                                        min={min}
                                        max={max}
                                        left={(xScale(xDomain[i]) ?? 0) + (violinWidth - boxWidth) / 2 + offset}
                                        firstQuartile={firstQuartile}
                                        thirdQuartile={thirdQuartile}
                                        median={median}
                                        boxWidth={boxWidth}
                                        fill={props.boxProps?.color ?? "#000000"}
                                        fillOpacity={0.3}
                                        stroke={props.boxProps?.color ?? "#000000"}
                                        strokeWidth={props.boxProps?.stroke ?? 3}
                                        valueScale={yScale}
                                        outliers={props.showAllPoints ? x.otherData : props.outliers ? outliers : []}
                                        minProps={{
                                            stroke: props.boxProps?.minColor ?? props.boxProps?.color ?? "#000000",
                                            onMouseOver: () => {
                                                showTooltip({ label: x.label, min: min.toFixed(2) })
                                            },
                                            onMouseLeave: () => {
                                                hideTooltip();
                                            },
                                        }}
                                        maxProps={{
                                            stroke: props.boxProps?.maxColor ?? props.boxProps?.color ?? "#000000",
                                            onMouseOver: () => {
                                                showTooltip({ label: x.label, max: max.toFixed(2) })
                                            },
                                            onMouseLeave: () => {
                                                hideTooltip();
                                            },
                                        }}
                                        boxProps={{
                                            onMouseOver: () => {
                                                showTooltip({
                                                    label: x.label,
                                                    min: min.toFixed(2),
                                                    max: max.toFixed(2),
                                                    median: median.toFixed(2),
                                                    firstQuartile: firstQuartile.toFixed(2),
                                                    thirdQuartile: thirdQuartile.toFixed(2)
                                                })
                                            },
                                            onMouseLeave: () => {
                                                hideTooltip();
                                            },
                                        }}
                                        medianProps={{
                                            stroke: props.boxProps?.medianColor ?? props.boxProps?.color ?? "#000000",
                                            onMouseOver: () => {
                                                showTooltip({ label: x.label, median: median.toFixed(2) })
                                            },
                                            onMouseLeave: () => {
                                                hideTooltip();
                                            },
                                        }}
                                        outlierProps={{
                                            fill: props.boxProps?.outlierColor ?? "#000000",
                                            onMouseOver: (event) => {
                                                const target = event.target as SVGElement;
                                                const index = Array.from(target.parentNode?.children || []).indexOf(target);
                                                const outlierValue = outliers[index];
                                                showTooltip({ label: x.label, value: outlierValue.toFixed(2) });
                                            },
                                            onMouseLeave: () => {
                                                hideTooltip();
                                            },
                                        }}
                                    />
                                }
                            </g>
                        )
                    })}
                </Group>
            </svg>
            {tooltipOpen && tooltipData && (
                <Tooltip left={(mouseX + 10)} top={(mouseY)}>
                    {tooltipData && Object.entries(tooltipData).map(([key, value]) => (
                        <div key={key}>
                            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}: </strong>
                            {typeof value === 'string'
                                ? (value.length > 45
                                    ? `${value.replace(/_/g, " ").slice(0, 45)}...`
                                    : value.replace(/_/g, " "))
                                : String(value)}
                        </div>
                    ))}
                </Tooltip>
            )}
        </div>
    );
}

export default ViolinBoxPlot