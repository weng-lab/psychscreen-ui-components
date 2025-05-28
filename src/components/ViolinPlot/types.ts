import { ScaleBand, ScaleLinear } from "d3";

type Outliers = "all" | "top" | "bottom" | "none"

export type Datum = {
    value: number;
    count: number
}[]

export type Point<T> = {
    value: number;
    color?: string;
    radius?: number;
    opacity?: number;
    metaData?: T;
}

export type Distribution<T> = {
    data: Point<T>[];
    label?: string;
    violinColor?: string;
    opacity?: number;
}

export type ViolinProps = {
    bandwidth?: number | "scott" | "silverman" | ((data: number[]) => number);
    stroke?: number;
    pointDisplayThreshold?: number;
    showAllPoints?: boolean;
    jitter?: number;
}

export type CrossProps = {
    color?: string;
    stroke?: number;
    outliers?: Outliers;
    medianColor?: string;
}

export type ViolinPlotProps<T> = {
    distributions: Distribution<T>[];
    loading: boolean;
    axisLabel?: string;
    disableCrossPlot?: boolean;
    disableViolinPlot?: boolean;
    crossProps?: CrossProps;
    violinProps?: ViolinProps;
    horizontal?: boolean;
    labelOrientation?: "horizontal" | "vertical" | "leftDiagonal" | "rightDiagonal"
    onViolinClicked?: (distribution: Distribution<T>) => void;
    onPointClicked?: (point: Point<T>) => void;
}

export interface CrossPlotProps {
    crossProps?: CrossProps;
    left: number;
    top: number;
    median: number;
    firstQuartile: number;
    thirdQuartile: number;
    valueScale: (value: number) => number;
    medianWidth: number;
    tooltipData: TooltipData;
    handleMouseMove: (event: React.MouseEvent<SVGPathElement>, data: TooltipData) => void;
    handleCrossClick: () => void;
    disableViolinPlot: boolean;
    tooltip: TooltipData;
    horizontal: boolean;
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
    valueScale: ScaleLinear<number, number, never>;
    labelScale: ScaleBand<string>;
    offset: number;
    labels: string[];
    disableViolinPlot: boolean;
    disableCrossPlot: boolean;
    horizontal: boolean;
    onViolinClicked?: (distribution: Distribution<T>) => void | undefined;
    onPointClicked?: (point: Point<T>) => void | undefined;
}