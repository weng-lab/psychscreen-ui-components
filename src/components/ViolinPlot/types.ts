import { ScaleBand, ScaleLinear } from "d3";

type Outliers = "all" | "top" | "bottom" | "none"

export type Datum = {
    value: number;
    count: number
}[]

export type Distribution<T> = {
    data: number[];
    label?: string;
    color?: string;
    metaData?: T;
}

export type ViolinProps = {
    bandwidth?: number | "scott" | "silverman" | ((data: number[]) => number);
    stroke?: number;
    pointRadius?: number;
    pointDisplayThreshold?: number;
    showAllPoints?: boolean;
    jitter?: number;
}

export type CrossProps = {
    color?: string;
    stroke?: number;
    outliers?: Outliers;
    outlierColor?: string;
    medianColor?: string;
    minColor?: string;
    maxColor?: string;
    outlierRadius?: number;
}

export type ViolinPlotProps<T> = {
    distributions: Distribution<T>[];
    loading: boolean;
    leftAxisLabel?: string;
    disableCrossPlot?: boolean;
    disableViolinPlot?: boolean;
    crossProps?: CrossProps;
    violinProps?: ViolinProps;
    labelOrientation?: "horizontal" | "vertical" | "leftDiagonal" | "rightDiagonal"
    onViolinClicked?: (distribution: Distribution<T>) => void;
}

export interface CrossPlotProps {
    crossProps?: CrossProps;
    left: number;
    median: number;
    firstQuartile: number;
    thirdQuartile: number;
    outliers: number[];
    yScale: (value: number) => number;
    medianWidth: number;
    label: string;
    tooltipData: TooltipData;
    handleMouseMove: (event: React.MouseEvent<SVGPathElement>, data: TooltipData) => void;
}


export interface TooltipData {
    label?: string;
    min?: string;
    median?: string;
    max?: string;
    firstQuartile?: string;
    thirdQuartile?: string;
    outlier?: boolean;
    sampleSize?: number;
    value?: string;
}

export interface TooltipProps {
    left: number;
    top: number;
    data: TooltipData;
    open: boolean;
}

export interface SingleViolinProps<T> {
    distribution: Distribution<T>;
    distIndex: number;
    violinProps: ViolinProps | undefined;
    crossProps: CrossProps | undefined;
    xScale: ScaleBand<string>;
    yScale: ScaleLinear<number, number, never>;
    offset: number;
    xDomain: string[];
    disableViolinPlot: boolean;
    disableCrossPlot: boolean;
    onViolinClicked?: (distribution: Distribution<T>) => void | undefined;
}