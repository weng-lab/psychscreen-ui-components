import { TooltipData, Distribution, ViolinBoxPlotProps } from "./types";
import { useParentSize } from '@visx/responsive';
import { Group } from "@visx/group";
import { ViolinPlot, BoxPlot } from "@visx/stats";
import { scaleBand, scaleLinear } from "@visx/scale";
import { Tooltip } from "@visx/tooltip";
import { AxisLeft, AxisBottom } from '@visx/axis';
import { useCallback, useRef, useState } from "react";
import { Text } from '@visx/text';
import { calculateBoxStats } from "./helpers";

const ViolinBoxPlot = <T extends object>(
    props: ViolinBoxPlotProps<T>
) => {
    const { parentRef, width: parentWidth, height: parentHeight } = useParentSize();

    const [tooltipData, setTooltipData] = useState<TooltipData | null | T>()
    const [tooltipOpen, setTooltipOpen] = useState<boolean>(false)

    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    const svgRef = useRef<SVGSVGElement>(null);
    const offset = 40;

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
    const yMax = parentHeight - 120;

    const allValues: number[] = props.distributions.flatMap(x =>
        x.data.flatMap(d => Array(d.count).fill(d.value))
    );

    const minYValue = Math.min(...allValues);
    const maxYValue = Math.max(...allValues);

    // scales
    const xDomain = props.distributions.map((x, i) => x.label ?? `Group ${i + 1}`);
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
            fontSize={15}
            y={parentHeight / 2}
            x={0}
        >
            {props.leftAxisLabel}
        </Text>
    );

    const violinWidth = xScale.bandwidth();
    const boxWidth = violinWidth * .25;

    return (
        <div style={{ position: "relative", width: "100%", height: "100%" }} ref={parentRef}>
            <svg width={parentWidth} height={parentHeight} onMouseMove={handleMouseMove} ref={svgRef}>
                <Group top={offset} left={offset}>
                    <AxisLeft
                        left={offset}
                        scale={yScale}
                        stroke="black"
                        tickStroke="black"
                        tickLabelProps={() => ({
                            fill: 'black',
                            fontSize: 15,
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
                            fontSize: 15,
                            textAnchor: props.labelOrientation === "vertical" ? "end" : "middle",
                        })}
                        tickComponent={({ x, y, formattedValue, ...tickProps }) => {
                            if (props.labelOrientation === "vertical") {
                                return (
                                    <text
                                        {...tickProps}
                                        x={x}
                                        y={y}
                                        transform={`rotate(-90, ${x}, ${y})`}
                                        textAnchor="end"
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
                                        fill={props.boxPlotColor ?? "#000000"}
                                        fillOpacity={0.3}
                                        stroke={props.boxPlotColor ?? "#000000"}
                                        strokeWidth={2}
                                        valueScale={yScale}
                                        outliers={props.showAllPoints ? x.otherData : props.outliers ? outliers : []}
                                        minProps={{
                                            onMouseOver: () => {
                                                showTooltip({ label: x.label, min: min })
                                            },
                                            onMouseLeave: () => {
                                                hideTooltip();
                                            },
                                        }}
                                        maxProps={{
                                            onMouseOver: () => {
                                                showTooltip({ label: x.label, max: max })
                                            },
                                            onMouseLeave: () => {
                                                hideTooltip();
                                            },
                                        }}
                                        boxProps={{
                                            onMouseOver: () => {
                                                showTooltip({
                                                    label: x.label,
                                                    min: min,
                                                    max: max,
                                                    median: median,
                                                    firstQuartile: firstQuartile,
                                                    thirdQuartile: thirdQuartile
                                                })
                                            },
                                            onMouseLeave: () => {
                                                hideTooltip();
                                            },
                                        }}
                                        medianProps={{
                                            onMouseOver: () => {
                                                showTooltip({ label: x.label, median: median })
                                            },
                                            onMouseLeave: () => {
                                                hideTooltip();
                                            },
                                        }}
                                        outlierProps={{
                                            onMouseOver: (event) => {
                                                const target = event.target as SVGElement;
                                                const index = Array.from(target.parentNode?.children || []).indexOf(target);
                                                const outlierValue = outliers[index];
                                                showTooltip({ label: x.label, value: outlierValue });
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