import { CrossPlotProps } from "./types";
import { Group } from "@visx/group";
import { Line } from '@visx/shape';


const CrossPlot = <T,>({ crossProps, left, median, firstQuartile, thirdQuartile, outliers, yScale, medianWidth, label, tooltipData, handleMouseMove, handlePointClick, handleCrossClick, violinColor, disableViolinPlot, tooltip }: CrossPlotProps<T>) => {

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
            {/* Outliers */}
            {outliers.map((outlier, index) => {
                const pointTooltip = {
                    outlier: true,
                    label: label,
                    value: outlier.value.toFixed(2),
                };

                const isHighlighted =
                    tooltipData &&
                    tooltipData.label === pointTooltip.label &&
                    tooltipData.value === pointTooltip.value

                return (
                    <circle
                        key={index}
                        cx={0}
                        cy={yScale(outlier.value)}
                        r={outlier.radius ?? 4}
                        stroke={outlier.color ?? violinColor ?? "#000000"}
                        strokeWidth={(crossProps?.stroke ?? 1) + (isHighlighted ? 1 : 0)}
                        fill={outlier.color ?? violinColor ?? "#000000"}
                        opacity={outlier.opacity ?? 1}
                        pointerEvents="all"
                        onMouseMove={(e) => handleMouseMove(e, pointTooltip)}
                        onClick={() => handlePointClick(outlier)}
                    />
                )
            })}
        </Group>
    );
};

export default CrossPlot;
