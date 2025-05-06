import { Datum, TooltipData, Violin, ViolinBoxPlotProps } from "./types";
import { useParentSize } from '@visx/responsive';
import { Group } from "@visx/group";
import { ViolinPlot, BoxPlot } from "@visx/stats";
import { scaleBand, scaleLinear } from "@visx/scale";
import { Tooltip } from "@visx/tooltip";
import { AxisLeft, AxisBottom } from '@visx/axis';
import { useCallback, useRef, useState } from "react";

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
    console.log(props.violins)
    const { parentRef, width: parentWidth, height: parentHeight } = useParentSize();

    const [tooltipData, setTooltipData] = useState<TooltipData | null | T>()
    const [tooltipOpen, setTooltipOpen] = useState<boolean>(false)

    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    const svgRef = useRef<SVGSVGElement>(null);
    const offset = 40;

    const handleMouseMove = useCallback((event: React.MouseEvent<SVGSVGElement>) => {
        if (!svgRef.current) return;
        
        const bounds = svgRef.current.getBoundingClientRect();
    
        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;
    
        setMouseX(x);
        setMouseY(y);
    }, []);

    const showTooltip = (data: TooltipData | T) => {
        setTooltipData(data);
        setTooltipOpen(true);
    };    

    const hideTooltip = () => {
        setTooltipOpen(false);
        setTooltipData(null)
    };    

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
            <svg width={parentWidth} height={parentHeight} onMouseMove={handleMouseMove} ref={svgRef}>
                <AxisLeft
                    left={offset}
                    top={offset}
                    scale={yScale}
                    stroke="black"
                    tickStroke="black"
                    tickLabelProps={() => ({
                        fill: 'black',
                        fontSize: 14,
                        textAnchor: 'end',
                        dy: '0.33em',
                    })}
                />
                <AxisBottom
                    left={offset}
                    top={yMax + offset}
                    scale={xScale}
                    stroke="black"
                    tickStroke="black"
                    tickLabelProps={() => ({
                        fill: 'black',
                        fontSize: 14,
                        textAnchor: 'middle',
                    })}
                />
                <Group top={offset} left={offset}>
                    {props.violins.map((v: Violin<T>, i) => {
                        //get all the stats for the box plot
                        const { min, max, firstQuartile, thirdQuartile, median, outliers } = calculateBoxStats(v.data);

                        //filter out the outliers so they are not included in the violin plot
                        const filteredData = v.data.filter(d => d.value >= min && d.value <= max);
                        return (
                            <g key={i}>
                                <ViolinPlot
                                    data={[...v.data].sort((a, b) => a.value - b.value)}
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
                                    fill={props.boxPlotColor ?? "#000000"}
                                    fillOpacity={0.3}
                                    stroke={props.boxPlotColor ?? "#000000"}
                                    strokeWidth={2}
                                    valueScale={yScale}
                                    outliers={outliers}
                                    minProps={{
                                        onMouseOver: () => {
                                            showTooltip({label: v.label, min: min})
                                        },
                                        onMouseLeave: () => {
                                            hideTooltip();
                                        },
                                    }}
                                    maxProps={{
                                        onMouseOver: () => {
                                            showTooltip({label: v.label, max: max})
                                        },
                                        onMouseLeave: () => {
                                            hideTooltip();
                                        },
                                    }}
                                    boxProps={{
                                        onMouseOver: () => {
                                            showTooltip({
                                                label: v.label, 
                                                min: min,
                                                max: max,
                                                median: median,
                                                firstQuartile: firstQuartile,
                                                thirdQuartile: thirdQuartile
                                            })
                                        },
                                        onMouseLeave: () => {
                                            hideTooltip();
                                        },
                                    }}
                                    medianProps={{
                                        onMouseOver: () => {
                                            showTooltip({label: v.label, median: median})
                                        },
                                        onMouseLeave: () => {
                                            hideTooltip();
                                        },
                                    }}
                                    outlierProps={{
                                        onMouseOver: () => {
                                            showTooltip({label: v.label, value: outliers[0]})
                                        },
                                        onMouseLeave: () => {
                                            hideTooltip();
                                        },
                                    }}
                                />
                            </g>
                        )
                    })}
                </Group>
            </svg>
            {tooltipOpen && tooltipData && (
                <Tooltip left={(mouseX + 10)} top={(mouseY)}>
                    {tooltipData && Object.entries(tooltipData).map(([key, value]) => (
                        <div key={key}>
                            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}: </strong>
                            {typeof value === 'string'
                                ? (value.length > 45
                                    ? `${value.replace(/_/g, " ").slice(0, 45)}...`
                                    : value.replace(/_/g, " "))
                                : String(value)}
                        </div>
                    ))}
                </Tooltip>
            )}
        </div>
    );
}

export default ViolinBoxPlot