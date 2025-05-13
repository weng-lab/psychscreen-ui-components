export type Datum = {
    value: number;
    count: number
}[]

export type Distribution<T> = {
    data: number[];
    label: string;
    color?: string;
    metaData?: T;
}

export type ViolinProps = {
    stroke?: number;
}

export type BoxProps = {
    color?: string;
    stroke?: number;
    outlierColor?: string;
    medianColor?: string;
    minColor?: string;
    maxColor?: string;
}

export type ViolinBoxPlotProps<T> = {
    distributions: Distribution<T>[];
    loading: boolean;
    leftAxisLabel?: string;
    disableBoxPlot?: boolean;
    disableViolinPlot?: boolean;
    boxProps?: BoxProps;
    violinProps?: ViolinProps;
    outliers?: boolean;
    showAllPoints?: boolean;
    labelOrientation?: "horizontal" | "vertical" | "leftDiagonal" | "rightDiagonal"
}

export interface TooltipData {
    label?: string;
    min?: string;
    median?: string;
    max?: string;
    firstQuartile?: string;
    thirdQuartile?: string;
    outlier?: string;
  }