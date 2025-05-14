import { CrossPlotProps } from "./types";
import { Group } from "@visx/group";
import { Line } from '@visx/shape';


const CrossPlot = ({ crossProps, left, median, firstQuartile, thirdQuartile, outliers, yScale, showTooltip, hideTooltip, medianWidth, label }: CrossPlotProps) => {

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
            {outliers.map((outlier, index) => (
                <circle
                    key={index}
                    cx={0}
                    cy={yScale(outlier)}
                    r={4}
                    fill={crossProps?.outlierColor ?? "#000000"}
                    onMouseOver={() => showTooltip({ label: label, outlier: outlier.toFixed(2) })}
                    onMouseLeave={hideTooltip}
                />
            ))}
        </Group>
    );
};

export default CrossPlot;
