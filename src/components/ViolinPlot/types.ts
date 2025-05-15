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
}

export type CrossProps = {
    color?: string;
    stroke?: number;
    outlierColor?: string;
    medianColor?: string;
    minColor?: string;
    maxColor?: string;
}

export type ViolinPlotProps<T> = {
    distributions: Distribution<T>[];
    loading: boolean;
    leftAxisLabel?: string;
    disableBoxPlot?: boolean;
    disableViolinPlot?: boolean;
    boxProps?: CrossProps;
    violinProps?: ViolinProps;
    outliers?: boolean;
    showAllPoints?: boolean;
    labelOrientation?: "horizontal" | "vertical" | "leftDiagonal" | "rightDiagonal"
}

export interface CrossPlotProps {
    crossProps?: CrossProps;
    left: number;
    median: number;
    firstQuartile: number;
    thirdQuartile: number;
    outliers: number[];
    yScale: (value: number) => number;
    showTooltip: (data: Record<string, string | number>) => void;
    hideTooltip: () => void;
    medianWidth: number;
    label: string;
}


export interface TooltipData {
    label?: string;
    min?: string;
    median?: string;
    max?: string;
    firstQuartile?: string;
    thirdQuartile?: string;
    outlier?: string;
    sampleSize?: number;
}

export interface TooltipProps {
    mouseX: number;
    mouseY: number;
    data: TooltipData;
    open: boolean;
}