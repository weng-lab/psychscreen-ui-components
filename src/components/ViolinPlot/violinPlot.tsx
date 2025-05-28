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

    //Array of labels fo xDomain
    const labels = useMemo(() => {
        return props.distributions.map((x, i) => x.label ?? `Group ${i + 1}`);
    }, [props.distributions]);

    const labelOrientation = props.labelOrientation ?? "horizontal"
    const fontSize = 15;

    //If the label orientation is anything but horizontal, find the max height of the elements, otherwise set to fontsize
    const maxLabelHeight = props.horizontal ? ((labelOrientation === "vertical" ? fontSize : Math.max(
        ...labels.map(label => getTextHeight(label, fontSize, "Arial"))
    ) / (labelOrientation !== "horizontal" ? 1.5 : 1))) :
        (labelOrientation === "horizontal" ? fontSize : Math.max(
            ...labels.map(label => getTextHeight(label, fontSize, "Arial"))
        ) / (labelOrientation !== "vertical" ? 1.5 : 1));

    const baseOffset = 40;
    const offset = props.horizontal ? labelOrientation !== "vertical" ? maxLabelHeight / 1.75 : maxLabelHeight : baseOffset;

    // bounds
    const vertXMax = parentWidth - 2 * offset;
    const vertYMax = parentHeight - maxLabelHeight - 2 * offset;
    const horizonXMax = parentWidth - 2.5 * offset;
    const horizonYMax = parentHeight - 130;

    //all values from data spread out based on count
    const allValues: number[] = props.distributions.flatMap(x =>
        x.data.flatMap(d => d.value)
    );

    const minYValue = Math.min(...allValues);
    const maxYValue = Math.max(...allValues);

    // scales
    const vertXScale = useMemo(() => {
        return scaleBand<string>({
            range: [0, vertXMax],
            round: true,
            domain: labels,
            padding: 0.4,
        });
    }, [vertXMax, labels]);

    const vertYScale = useMemo(() => {
        return scaleLinear<number>({
            range: [vertYMax, 0],
            round: true,
            // Make the bottom most tick 7% of the domain less so that there is room between the lowest plot and the bottom axis
            domain: [minYValue - 0.07 * (maxYValue - minYValue), maxYValue],
        });
    }, [vertYMax, minYValue, maxYValue]);

    const horizonXScale = useMemo(() => {
        return scaleLinear<number>({
            range: [0, horizonXMax],
            round: true,
            // Make the bottom most tick 7% of the domain less so that there is room between the lowest plot and the bottom axis
            domain: [minYValue - 0.07 * (maxYValue - minYValue), maxYValue],
        });
    }, [horizonXMax, minYValue, maxYValue]);

    const horizonYScale = useMemo(() => {
        return scaleBand<string>({
            range: [0, horizonYMax],
            round: true,
            domain: labels,
            padding: 0.4,
        });
    }, [horizonYMax, labels]);


    const valueScale = props.horizontal ? horizonXScale : vertYScale;
    const labelScale = props.horizontal ? horizonYScale : vertXScale;

    const axisLabel = props.horizontal ? (
        <Text
            textAnchor="middle"
            verticalAnchor="end"
            fontSize={fontSize}
            y={horizonYMax + baseOffset + 20}
            x={horizonXMax / 2 + offset}
        >
            {props.axisLabel}
        </Text>
    ) : (
        <Text
            textAnchor="middle"
            verticalAnchor="end"
            angle={-90}
            fontSize={fontSize}
            y={vertYMax / 2}
            x={0}
        >
            {props.axisLabel}
        </Text>
    );

    return (
        <div style={{ position: "relative", width: "100%", height: "100%" }} ref={parentRef}>
            <svg width={parentWidth} height={parentHeight}>
                <Group top={baseOffset} left={offset}>
                    {props.horizontal ? (
                        <>
                            <AxisBottom
                                key={"axisLeft"}
                                scale={horizonXScale}
                                top={horizonYMax}
                                left={offset}
                                stroke="black"
                                tickStroke="black"
                                tickLabelProps={() => ({
                                    fill: 'black',
                                    fontSize: fontSize,
                                    textAnchor: 'end',
                                    dy: '0.33em',
                                })}
                            />
                            {axisLabel}
                            <AxisLeft
                                key={"axisBottom"}
                                left={offset}
                                scale={horizonYScale}
                                stroke="black"
                                tickStroke="black"
                                tickValues={labels}
                                tickLabelProps={() => ({
                                    fill: 'black',
                                    fontSize: fontSize,
                                })}
                                tickComponent={({ x, y, formattedValue, ...tickProps }) => {
                                    if (labelOrientation !== "horizontal") {
                                        return (
                                            <text
                                                {...tickProps}
                                                x={x}
                                                y={y}
                                                dx={labelOrientation === "vertical" ? 0 : "-0.25em"}
                                                dy={labelOrientation === "vertical" ? "0.50em" : labelOrientation === "leftDiagonal" ? "-0.25em" : "0.25em"}
                                                transform={
                                                    labelOrientation === "vertical" ? `rotate(90, ${x}, ${y})` :
                                                        labelOrientation === "leftDiagonal" ? `rotate(-45, ${x}, ${y})` :
                                                            `rotate(45, ${x}, ${y})`
                                                }
                                                textAnchor={labelOrientation === "vertical" ? "middle" : "end"}
                                                dominantBaseline="middle"
                                            >
                                                {formattedValue}
                                            </text>
                                        );
                                    }
                                    return (
                                        <text {...tickProps} x={x} y={y} textAnchor="end" dominantBaseline="middle" dx="-0.50em">
                                            {formattedValue}
                                        </text>
                                    );
                                }}
                            />
                        </>
                    ) : (
                        <>
                            <AxisLeft
                                key={"axisLeft"}
                                left={offset}
                                scale={vertYScale}
                                stroke="black"
                                tickStroke="black"
                                tickLabelProps={() => ({
                                    fill: 'black',
                                    fontSize: fontSize,
                                    textAnchor: 'end',
                                    dy: '0.33em',
                                })}
                            />
                            {axisLabel}
                            <AxisBottom
                                key={"axisBottom"}
                                left={offset}
                                top={vertYMax}
                                scale={vertXScale}
                                stroke="black"
                                tickStroke="black"
                                tickValues={labels}
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
                        </>
                    )
                    }

                    {props.distributions.map((x: Distribution<T>, i) => {
                        return (
                            <SingleViolin
                                distribution={x}
                                distIndex={i}
                                violinProps={props.violinProps}
                                crossProps={props.crossProps}
                                valueScale={valueScale}
                                labelScale={labelScale}
                                offset={offset}
                                labels={labels}
                                disableCrossPlot={props.disableCrossPlot ?? false}
                                disableViolinPlot={props.disableViolinPlot ?? false}
                                horizontal={props.horizontal ?? false}
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