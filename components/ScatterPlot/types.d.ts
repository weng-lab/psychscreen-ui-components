import { MutableRefObject } from '../../../node_modules/react';
import { ScaleLinear } from '@visx/vendor/d3-scale';
import { ProvidedZoom } from '@visx/zoom/lib/types';
export type Point<T> = {
    x: number;
    y: number;
    shape?: "circle" | "triangle";
    r?: number;
    color: string;
    opacity?: number;
    metaData?: T;
};
export type MiniMapProps = {
    defaultOpen?: boolean;
    position?: {
        right: number;
        bottom: number;
    };
    ref?: MutableRefObject<HTMLDivElement | null>;
};
export type ChartProps<T> = {
    width: number;
    height: number;
    pointData: Point<T>[];
    loading: boolean;
    selectable?: boolean;
    disableZoom?: boolean;
    disableTooltip?: boolean;
    controlsPosition?: "left" | "bottom" | "right";
    onSelectionChange?: (selectedPoints: Point<T>[]) => void;
    onPointClicked?: (point: Point<T>) => void;
    groupPointsAnchor?: keyof Point<T> | keyof T;
    tooltipBody?: (point: Point<T>) => JSX.Element;
    miniMap?: MiniMapProps;
    leftAxisLable: string;
    bottomAxisLabel: string;
};
export type Line = {
    x: number;
    y: number;
}[];
export type Lines = Line[];
export type MapProps<T> = {
    miniMap: MiniMapProps;
    width: number;
    height: number;
    pointData: Point<T>[];
    xScale: ScaleLinear<number, number, never>;
    yScale: ScaleLinear<number, number, never>;
    zoom: ZoomType;
};
export type TooltipProps<T> = {
    tooltipBody?: (point: Point<T>) => JSX.Element;
    tooltipData: Point<T>;
};
export type ControlButtonsProps = {
    selectable: boolean;
    resetable: boolean;
    handleSelectionModeChange: (mode: "select" | "pan") => void;
    selectMode: "select" | "pan";
    zoomIn: () => void;
    zoomOut: () => void;
    zoomReset: () => void;
    position?: "left" | "bottom" | "right";
};
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
export type ZoomType = ProvidedZoom<React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>> & ZoomState;
export {};
