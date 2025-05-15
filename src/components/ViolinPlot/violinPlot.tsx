import { TooltipData, Distribution, ViolinPlotProps } from "./types";
import { useParentSize } from '@visx/responsive';
import { Group } from "@visx/group";
import { ViolinPlot as VisxViolinPlot } from "@visx/stats";
import { scaleBand, scaleLinear } from "@visx/scale";
import { AxisLeft, AxisBottom } from '@visx/axis';
import { useCallback, useRef, useState } from "react";
import { Text } from '@visx/text';
import { calculateBoxStats, gaussian, getTextHeight, kernelDensityEstimator, scottRule, silvermanRule } from "./helpers";
import * as d3 from "d3";
import ViolinTooltip from "./violinTooltip";
import CrossPlot from "./crossPlot";

const ViolinPlot = <T extends object>(
    props: ViolinPlotProps<T>
) => {
    console.log("sdjhfg")
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
    const xMax = parentWidth - 2 * offset;
    const yMax = parentHeight - maxLabelHeight - 2 * offset;

    //all values from data spread out based on count
    const allValues: number[] = props.distributions.flatMap(x =>
        x.data.flatMap(d => d)
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
            <svg width={parentWidth - offset} height={parentHeight} onMouseMove={handleMouseMove} ref={svgRef}>
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
                        const { min, max, firstQuartile, thirdQuartile, median, outliers } = calculateBoxStats(x.data);

                        const yTicks = d3.range(min, max, 0.1);

                        //bandwidth / binwidth for smoothing, based on user input
                        const bandwidth = typeof props.violinProps?.bandwidth === "number" 
                        ? props.violinProps?.bandwidth 
                        : props.violinProps?.bandwidth === "scott" 
                        ? scottRule(x.data) 
                        : silvermanRule(x.data);

                        const kde = kernelDensityEstimator(gaussian(bandwidth), yTicks);

                        const densityData = kde(x.data)

                        return (
                            <g key={i}>
                                {!props.disableViolinPlot &&
                                    <VisxViolinPlot
                                        data={[...densityData].sort((a, b) => a.value - b.value)}
                                        stroke="black"
                                        strokeWidth={props.violinProps?.stroke ?? 1}
                                        left={(xScale(xDomain[i]) ?? 0) + offset}
                                        width={violinWidth}
                                        valueScale={yScale}
                                        fill={x.color ?? "none"}
                                    />
                                }
                                {!props.disableBoxPlot &&
                                    <CrossPlot
                                        crossProps={props.boxProps}
                                        left={(xScale(xDomain[i]) ?? 0) + offset + violinWidth / 2}
                                        median={median}
                                        firstQuartile={firstQuartile}
                                        thirdQuartile={thirdQuartile}
                                        outliers={props.outliers ? outliers : []}
                                        yScale={yScale}
                                        showTooltip={showTooltip}
                                        hideTooltip={hideTooltip}
                                        medianWidth={boxWidth}
                                        label={x.label ?? `Group ${i + 1}`}
                                    />
                                }
                            </g>
                        )
                    })}
                </Group>
            </svg>
            {tooltipOpen && tooltipData && (
                <ViolinTooltip mouseX={mouseX} mouseY={mouseY} data={tooltipData} open={tooltipOpen} />
            )}
        </div>
    );
}

export default ViolinPlot