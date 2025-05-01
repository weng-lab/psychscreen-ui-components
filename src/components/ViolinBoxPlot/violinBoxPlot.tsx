import { Violin, ViolinBoxPlotProps } from "./types";
import { useParentSize } from '@visx/responsive';
import { Group } from "@visx/group";
import { ViolinPlot, BoxPlot } from "@visx/stats";
import { scaleBand, scaleLinear } from "@visx/scale";

const ViolinBoxPlot = <T extends object>(
    props: ViolinBoxPlotProps<T>
) => {

    const { parentRef, width: parentWidth, height: parentHeight } = useParentSize();

    // bounds
    const xMax = parentWidth;
    const yMax = parentHeight - 120;

    const allValues: number[] = props.violins.flatMap(v =>
        v.data.flatMap(d => Array(d.count).fill(d.value))
    );

    const minYValue = Math.min(...allValues);
    const maxYValue = Math.max(...allValues);

    // scales
    const xDomain = props.violins.map((v, i) => v.label ?? `Group ${i + 1}`);
    const xScale = scaleBand<string>({
        range: [0, xMax],
        round: true,
        domain: xDomain,
        padding: 0.4,
    });

    const yScale = scaleLinear<number>({
        range: [yMax, 0],
        round: true,
        domain: [minYValue, maxYValue],
    });

    const boxWidth = xScale.bandwidth();

    return (
        <div style={{ position: "relative", width: "100%", height: "100%" }} ref={parentRef}>
            <svg width={parentWidth} height={parentHeight}>
                <Group top={40}>
                    {props.violins.map((v: Violin<T>, i) => (
                        <g key={i}>
                            <ViolinPlot
                                data={[...v.data].sort((a, b) => a.value - b.value)}
                                stroke="black"
                                left={xScale(xDomain[i]) ?? 0}
                                width={boxWidth}
                                valueScale={yScale}
                                fill={v.color ?? "none"}
                            />
                        </g>
                    ))}
                </Group>
            </svg>
        </div>
    );
}

export default ViolinBoxPlot