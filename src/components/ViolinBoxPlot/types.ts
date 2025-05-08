export type Datum = {
    value: number;
    count: number
}

export type Distribution<T> = {
    data: Datum[];
    otherData: number[];
    label: string;
    width?: number;
    color?: string;
    metaData?: T;
}

export type ViolinBoxPlotProps<T> = {
    distributions: Distribution<T>[];
    loading: boolean;
    leftAxisLabel?: string;
    boxPlotColor?: string;
    disableBoxPlot?: boolean;
    disableViolinPlot?: boolean;
    outliers?: boolean;
    showAllPoints?: boolean;
    labelOrientation?: "horizontal" | "vertical"
}

export interface TooltipData {
    label?: string;
    min?: number;
    median?: number;
    max?: number;
    firstQuartile?: number;
    thirdQuartile?: number;
    value?: number;
  }