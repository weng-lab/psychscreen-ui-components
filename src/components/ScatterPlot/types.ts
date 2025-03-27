import { MutableRefObject } from "react";
import { ScaleLinear } from '@visx/vendor/d3-scale';
import { ProvidedZoom } from "@visx/zoom/lib/types";

/*
    All information given to a point on the plot, including its coordinates(x and y), its radius, color, and opacity, and its metadata information
    which can be any amount of strings used to display in the tooltip
*/
export type Point<T> = {
    x: number;
    y: number;
    shape?: "circle" | "triangle";
    r?: number;
    color: string;
    opacity?: number;
    metaData?: T;
};

/*
    Properties given to the minimap including if its visible or not (shown) and its positioon in relation to its reference (both optional)
    If not position or reference is given, it will default to the bottom right corner of the screen if shown
*/
export type MiniMapProps = {
    position?: { right: number; bottom: number };
    ref?: MutableRefObject<HTMLDivElement | null>;
};

export type InitialState<S, Z> = {
    minimap?: {
        open?: boolean;
    };
    controls?: {
        selectionType?: S extends true ? "pan" | "select" : Z extends true ? "select" | "none" : "pan";
    };
}

/*
    Basic chart properties
*/
export type ChartProps<T, S extends boolean | undefined, Z extends boolean | undefined> = {
    pointData: Point<T>[];
    loading: boolean;
    selectable?: S;
    disableZoom?: Z;
    disableTooltip?: boolean;
    controlsPosition?: "left" | "bottom" | "right";
    controlsHighlight?: string;
    onDisplayedPointsChange?: (points: Point<T>[]) => void
    //returns an array of selected points inside a lasso (optional)
    onSelectionChange?: (selectedPoints: Point<T>[]) => void;
    //returns a point when clicked on (optional)
    onPointClicked?: (point: Point<T>) => void;
    groupPointsAnchor?: keyof Point<T> | keyof T;
    //custom tooltip formating (optional)
    tooltipBody?: (point: Point<T>) => JSX.Element;
    miniMap?: MiniMapProps;
    leftAxisLabel?: string;
    bottomAxisLabel?: string;
    initialState?: InitialState<S, Z>;
};

export type Line = { x: number; y: number }[];
export type Lines = Line[];

export type MapProps<T> = {
    miniMap: MiniMapProps;
    width: number;
    height: number;
    pointData: Point<T>[];
    xScale: ScaleLinear<number, number, never>;
    yScale: ScaleLinear<number, number, never>;
    zoom: ZoomType;
}

export type TooltipProps<T> = {
    tooltipBody?: (point: Point<T>) => JSX.Element;
    tooltipData: Point<T>;
}

export type ControlButtonsProps = {
    selectable: boolean;
    resetable: boolean;
    handleSelectionModeChange: (mode: "select" | "pan" | "none") => void;
    selectMode: "select" | "pan" | "none";
    zoomIn: () => void;
    zoomOut: () => void;
    zoomReset: () => void;
    position?: "left" | "bottom" | "right";
    highlight?: string;
}

interface TransformMatrix {
    scaleX: number;
    scaleY: number;
    translateX: number;
    translateY: number;
    skewX: number;
    skewY: number;
}

type ZoomState = {
    initialTransformMatrix: TransformMatrix;
    transformMatrix: TransformMatrix;
    isDragging: boolean;
};

export type ZoomType = ProvidedZoom<React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>> & ZoomState