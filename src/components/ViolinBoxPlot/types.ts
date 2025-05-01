export type Datum = {
    value: number;
    count: number
}

export type Violin<T> = {
    data: Datum[];
    label: string;
    width?: number;
    color?: string;
    metaData?: T;
}

export type ViolinBoxPlotProps<T> = {
    violins: Violin<T>[];
    loading: boolean;
    leftAxisLabel?: string;
    boxPlotColor?: string;
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