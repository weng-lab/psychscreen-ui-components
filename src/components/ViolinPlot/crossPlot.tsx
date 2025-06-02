import { CrossPlotProps } from "./types";
import { Group } from "@visx/group";
import { Line } from '@visx/shape';


const CrossPlot = <T,>({ crossProps, left, top, median, firstQuartile, thirdQuartile, valueScale, medianWidth, tooltipData, handleMouseMove, handleCrossClick, disableViolinPlot, tooltip, horizontal }: CrossPlotProps<T>) => {

    return (
        <Group left={left} top={top}>
            {/* Vertical line from min to max */}
            <Line
                from={{ x: horizontal ? valueScale(thirdQuartile) : 0, y: horizontal ? 0 : valueScale(thirdQuartile) }}
                to={{ x: horizontal ? valueScale(firstQuartile): 0, y: horizontal ? 0: valueScale(firstQuartile) }}
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
                from={{ x: horizontal ? valueScale(median) : -medianWidth / 2, y: horizontal ? -medianWidth / 2 : valueScale(median) }}
                to={{ x: horizontal ? valueScale(median) : medianWidth / 2, y: horizontal ? medianWidth / 2 : valueScale(median) }}
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
