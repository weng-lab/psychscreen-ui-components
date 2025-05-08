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
    boxPlotStroke?: number;
    violinPlotStroke?: number;
    outlierColor?: string;
    medianColor?: string;
    minColor?: string;
    maxColor?: string;
    disableBoxPlot?: boolean;
    disableViolinPlot?: boolean;
    outliers?: boolean;
    showAllPoints?: boolean;
    labelOrientation?: "horizontal" | "vertical"
}

export interface TooltipData {
    label?: string;
    min?: string;
    median?: string;
    max?: string;
    firstQuartile?: string;
    thirdQuartile?: string;
    value?: string;
  }