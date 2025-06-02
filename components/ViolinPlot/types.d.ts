import { ScaleBand, ScaleLinear } from 'd3';
type Outliers = "all" | "top" | "bottom" | "none";
export type Datum = {
    value: number;
    count: number;
}[];
export type ViolinPoint<T> = {
    value: number;
    color?: string;
    radius?: number;
    opacity?: number;
    metaData?: T;
};
export type Distribution<T> = {
    data: ViolinPoint<T>[];
    label?: string;
    violinColor?: string;
    opacity?: number;
};
export type ViolinProps = {
    bandwidth?: number | "scott" | "silverman" | ((data: number[]) => number);
    stroke?: number;
    pointDisplayThreshold?: number;
    showAllPoints?: boolean;
    jitter?: number;
};
export type CrossProps = {
    color?: string;
    stroke?: number;
    outliers?: Outliers;
    medianColor?: string;
    medianWidth?: number;
};
export type ViolinPlotProps<T> = {
    distributions: Distribution<T>[];
    loading: boolean;
    axisLabel?: string;
    disableCrossPlot?: boolean;
    disableViolinPlot?: boolean;
    crossProps?: CrossProps;
    violinProps?: ViolinProps;
    horizontal?: boolean;
    labelOrientation?: "horizontal" | "vertical" | "leftDiagonal" | "rightDiagonal";
    onViolinClicked?: (distribution: Distribution<T>) => void;
    onPointClicked?: (point: ViolinPoint<T>) => void;
    pointTooltipBody?: (point: ViolinPoint<T>) => JSX.Element;
};
export interface CrossPlotProps<T> {
    crossProps?: CrossProps;
    left: number;
    top: number;
    median: number;
    firstQuartile: number;
    thirdQuartile: number;
    valueScale: (value: number) => number;
    medianWidth: number;
    tooltipData: TooltipData<T>;
    handleMouseMove: (event: React.MouseEvent<SVGPathElement>, data: TooltipData<T>) => void;
    handleCrossClick: () => void;
    disableViolinPlot: boolean;
    tooltip: TooltipData<T>;
    horizontal: boolean;
}
export interface TooltipData<T> {
    point?: ViolinPoint<T>;
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
export interface TooltipProps<T> {
    left: number;
    top: number;
    data: TooltipData<T>;
    open: boolean;
    pointTooltipBody?: (point: ViolinPoint<T>) => JSX.Element;
}
export interface SingleViolinProps<T> {
    distribution: Distribution<T>;
    distIndex: number;
    violinProps: ViolinProps | undefined;
    crossProps: CrossProps | undefined;
    valueScale: ScaleLinear<number, number, never>;
    labelScale: ScaleBand<string>;
    offset: number;
    labels: string[];
    disableViolinPlot: boolean;
    disableCrossPlot: boolean;
    horizontal: boolean;
    pointTooltipBody?: (point: ViolinPoint<T>) => JSX.Element;
    onViolinClicked?: (distribution: Distribution<T>) => void | undefined;
    onPointClicked?: (point: ViolinPoint<T>) => void | undefined;
}
export {};
