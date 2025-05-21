import { CrossPlotProps } from "./types";
import { Group } from "@visx/group";
import { Line } from '@visx/shape';


const CrossPlot = ({ crossProps, left, median, firstQuartile, thirdQuartile, outliers, yScale, medianWidth, label, tooltipData, handleMouseMove }: CrossPlotProps) => {

    return (
        <Group left={left}>
            {/* Vertical line from min to max */}
            <Line
                from={{ x: 0, y: yScale(thirdQuartile) }}
                to={{ x: 0, y: yScale(firstQuartile) }}
                stroke={crossProps?.maxColor ?? "#000000"}
                strokeWidth={crossProps?.stroke ?? 1}
            />
            {/* Horizontal line at median */}
            <Line
                from={{ x: -medianWidth / 2, y: yScale(median) }}
                to={{ x: medianWidth / 2, y: yScale(median) }}
                stroke={crossProps?.medianColor ?? "#000000"}
                strokeWidth={crossProps?.stroke ?? 1}
            />
            {/* Outliers */}
            {outliers.map((outlier, index) => {
                const pointTooltip = {
                    outlier: true,
                    label: label,
                    value: outlier.toFixed(2),
                };

                const isHighlighted =
                    tooltipData &&
                    tooltipData.label === pointTooltip.label &&
                    tooltipData.value === pointTooltip.value

                return (
                    <circle
                        key={index}
                        cx={0}
                        cy={yScale(outlier)}
                        r={crossProps?.outlierRadius ?? 4}
                        stroke={crossProps?.outlierColor ?? "#000000"}
                        strokeWidth={(crossProps?.stroke ?? 1) + (isHighlighted ? 1 : 0)}
                        fill={crossProps?.outlierColor ?? "#000000"}
                        pointerEvents="all"
                        onMouseMove={(e) => handleMouseMove(e, pointTooltip)}
                    />
                )
            })}
        </Group>
    );
};

export default CrossPlot;
