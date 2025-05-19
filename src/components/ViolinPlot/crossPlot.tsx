import { CrossPlotProps } from "./types";
import { Group } from "@visx/group";
import { Line } from '@visx/shape';


const CrossPlot = ({ crossProps, left, median, firstQuartile, thirdQuartile, outliers, yScale, medianWidth, }: CrossPlotProps) => {

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
            {outliers.map((outlier, index) => (
                <circle
                    key={index}
                    cx={0}
                    cy={yScale(outlier)}
                    r={crossProps?.outlierRadius ?? 4}
                    stroke={crossProps?.outlierColor ?? "#000000"}
                    fill={crossProps?.outlierColor ?? "#000000"}
                    pointerEvents="all"
                />
            ))}
        </Group>
    );
};

export default CrossPlot;
