import { Datum, Violin, ViolinBoxPlotProps } from "./types";
import { useParentSize } from '@visx/responsive';
import { Group } from "@visx/group";
import { ViolinPlot, BoxPlot } from "@visx/stats";
import { scaleBand, scaleLinear } from "@visx/scale";

const calculateBoxStats = (data: Datum[]) => {
    const values: number[] = [];
    data.forEach(d => {
        for (let i = 0; i < d.count; i++) {
            values.push(d.value);
        }
    });

    values.sort((a, b) => a - b);

    const median = (arr: number[]) => {
        const mid = Math.floor(arr.length / 2);
        return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
    };

    const getQuartiles = (arr: number[]) => {
        const mid = Math.floor(arr.length / 2);
        const lower = arr.slice(0, mid);
        const upper = arr.slice(arr.length % 2 === 0 ? mid : mid + 1);
        return {
            firstQuartile: median(lower),
            thirdQuartile: median(upper),
        };
    };

    // Calculate quartiles
    const { firstQuartile, thirdQuartile } = getQuartiles(values);
    const med = median(values);

    // Calculate the IQR and whiskers
    const iqr = thirdQuartile - firstQuartile;
    const lowerWhisker = firstQuartile - 1.5 * iqr;
    const upperWhisker = thirdQuartile + 1.5 * iqr;

    // Calculate outliers (values outside of the whiskers)
    const outliers = values.filter(val => val < lowerWhisker || val > upperWhisker);

    // Min and max excluding outliers
    const filteredValues = values.filter(val => val >= lowerWhisker && val <= upperWhisker);
    const min = filteredValues[0];
    const max = filteredValues[filteredValues.length - 1];

    return { min, max, firstQuartile, thirdQuartile, median: med, outliers };
};

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

    const violinWidth = xScale.bandwidth();
    const boxWidth = violinWidth * .25;

    return (
        <div style={{ position: "relative", width: "100%", height: "100%" }} ref={parentRef}>
            <svg width={parentWidth} height={parentHeight}>
                <Group top={40}>
                    {props.violins.map((v: Violin<T>, i) => {
                        //get all the stats for the box plot
                        const { min, max, firstQuartile, thirdQuartile, median, outliers } = calculateBoxStats(v.data);

                        //filter out the outliers so they are not included in the violin plot
                        const filteredData = v.data.filter(d => d.value >= min && d.value <= max);
                        return (
                            <g key={i}>
                                <ViolinPlot
                                    data={[...filteredData].sort((a, b) => a.value - b.value)}
                                    stroke="black"
                                    left={xScale(xDomain[i]) ?? 0}
                                    width={violinWidth}
                                    valueScale={yScale}
                                    fill={v.color ?? "none"}
                                />
                                <BoxPlot
                                    min={min}
                                    max={max}
                                    left={(xScale(xDomain[i]) ?? 0) + (violinWidth - boxWidth) / 2}
                                    firstQuartile={firstQuartile}
                                    thirdQuartile={thirdQuartile}
                                    median={median}
                                    boxWidth={boxWidth}
                                    fill="#000000"
                                    fillOpacity={0.3}
                                    stroke="#000000"
                                    strokeWidth={2}
                                    valueScale={yScale}
                                    outliers={outliers}
                                />
                            </g>
                        )
                    })}
                </Group>
            </svg>
        </div>
    );
}

export default ViolinBoxPlot