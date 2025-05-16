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
}

export type CrossProps = {
    color?: string;
    stroke?: number;
    outlierColor?: string;
    medianColor?: string;
    minColor?: string;
    maxColor?: string;
    outliers?: Outliers;
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
    hovered: string;
    handleHover: (label: string) => void;
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
    value?: string;
}

export interface TooltipProps {
    mouseX: number;
    mouseY: number;
    data: TooltipData;
    open: boolean;
}