import { CrossPlotProps } from "./types";
import { Group } from "@visx/group";
import { Line } from '@visx/shape';


const CrossPlot = ({ crossProps, left, median, firstQuartile, thirdQuartile, yScale, medianWidth, tooltipData, handleMouseMove, handleCrossClick, disableViolinPlot, tooltip }: CrossPlotProps) => {

    return (
        <Group left={left}>
            {/* Vertical line from min to max */}
            <Line
                from={{ x: 0, y: yScale(thirdQuartile) }}
                to={{ x: 0, y: yScale(firstQuartile) }}
                stroke={crossProps?.color ?? "#000000"}
                strokeWidth={
                    tooltipData === tooltip && disableViolinPlot
                        ? (crossProps?.stroke ?? 1) + 1
                        : crossProps?.stroke ?? 1
                }
                onMouseMove={disableViolinPlot ? (e) => handleMouseMove(e, tooltip) : undefined}
                onClick={handleCrossClick}
            />
            {/* Horizontal line at median */}
            <Line
                from={{ x: -medianWidth / 2, y: yScale(median) }}
                to={{ x: medianWidth / 2, y: yScale(median) }}
                stroke={crossProps?.medianColor ?? crossProps?.color ?? "#000000"}
                strokeWidth={
                    tooltipData === tooltip && disableViolinPlot
                        ? (crossProps?.stroke ?? 1) + 1
                        : crossProps?.stroke ?? 1
                }
                onMouseMove={disableViolinPlot ? (e) => handleMouseMove(e, tooltip) : undefined}
                onClick={handleCrossClick}
            />
        </Group>
    );
};

export default CrossPlot;
