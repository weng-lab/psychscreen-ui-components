import { Distribution, ViolinPlotProps } from "./types";
import { useParentSize } from '@visx/responsive';
import { Group } from "@visx/group";
import { scaleBand, scaleLinear } from "@visx/scale";
import { AxisLeft, AxisBottom } from '@visx/axis';
import { useMemo } from "react";
import { Text } from '@visx/text';
import { getTextHeight } from "./helpers";
import SingleViolin from "./singleViolin";

const ViolinPlot = <T extends object>(
    props: ViolinPlotProps<T>
) => {
    const { parentRef, width: parentWidth, height: parentHeight } = useParentSize();

    //Array of labels
    const xDomain = useMemo(() => {
        return props.distributions.map((x, i) => x.label ?? `Group ${i + 1}`);
    }, [props.distributions]);

    const offset = 40;
    const labelOrientation = props.labelOrientation ?? "horizontal"
    const fontSize = 15;

    //If the label orientation is anything but horizontal, find the max height of the elements, otherwise set to fontsize
    const maxLabelHeight = labelOrientation === "horizontal" ? fontSize : Math.max(
        ...xDomain.map(label => getTextHeight(label, fontSize, "Arial"))
    ) / (labelOrientation !== "vertical" ? 1.5 : 1);

    // bounds
    const xMax = parentWidth - 2 * offset;
    const yMax = parentHeight - maxLabelHeight - 2 * offset;

    //all values from data spread out based on count
    const allValues: number[] = props.distributions.flatMap(x =>
        x.data.flatMap(d => d.value)
    );

    const minYValue = Math.min(...allValues);
    const maxYValue = Math.max(...allValues);

    // scales
    const xScale = useMemo(() => {
        return scaleBand<string>({
            range: [0, xMax],
            round: true,
            domain: xDomain,
            padding: 0.4,
        });
    }, [xMax, xDomain]);

    const yScale = useMemo(() => {
        return scaleLinear<number>({
            range: [yMax, 0],
            round: true,
            // Make the bottom most tick 7% of the domain less so that there is room between the lowest plot and the bottom axis
            domain: [minYValue - 0.07 * (maxYValue - minYValue), maxYValue],
        });
    }, [yMax, minYValue, maxYValue]);

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

    return (
        <div style={{ position: "relative", width: "100%", height: "100%" }} ref={parentRef}>
            <svg width={parentWidth} height={parentHeight}>
                <Group top={offset} left={offset}>
                    <AxisLeft
                        key={"axisLeft"}
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
                        key={"axisBottom"}
                        left={offset}
                        top={yMax}
                        scale={xScale}
                        stroke="black"
                        tickStroke="black"
                        tickValues={xDomain}
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
                        return (
                            <SingleViolin
                                distribution={x}
                                distIndex={i}
                                violinProps={props.violinProps}
                                crossProps={props.crossProps}
                                xScale={xScale}
                                yScale={yScale}
                                offset={offset}
                                xDomain={xDomain}
                                disableCrossPlot={props.disableCrossPlot ?? false}
                                disableViolinPlot={props.disableViolinPlot ?? false}
                                onViolinClicked={props.onViolinClicked}
                                onPointClicked={props.onPointClicked}
                            />
                        )
                    })}
                </Group>
            </svg>
        </div>
    );
}

export default ViolinPlot