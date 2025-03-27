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
    position?: {
        right: number;
        bottom: number;
    };
};
export type InitialState<S, Z> = {
    minimap?: {
        open?: boolean;
    };
    controls?: {
        selectionType?: S extends true ? "pan" | "select" : Z extends true ? "select" | "none" : "pan";
    };
};
export type ChartProps<T, S extends boolean | undefined, Z extends boolean | undefined> = {
    pointData: Point<T>[];
    loading: boolean;
    selectable?: S;
    disableZoom?: Z;
    disableTooltip?: boolean;
    controlsPosition?: "left" | "bottom" | "right";
    controlsHighlight?: string;
    onDisplayedPointsChange?: (points: Point<T>[]) => void;
    onSelectionChange?: (selectedPoints: Point<T>[]) => void;
    onPointClicked?: (point: Point<T>) => void;
    groupPointsAnchor?: keyof Point<T> | keyof T;
    tooltipBody?: (point: Point<T>) => JSX.Element;
    miniMap?: MiniMapProps;
    leftAxisLabel?: string;
    bottomAxisLabel?: string;
    initialState?: InitialState<S, Z>;
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
    handleSelectionModeChange: (mode: "select" | "pan" | "none") => void;
    selectMode: "select" | "pan" | "none";
    zoomIn: () => void;
    zoomOut: () => void;
    zoomReset: () => void;
    position?: "left" | "bottom" | "right";
    highlight?: string;
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
