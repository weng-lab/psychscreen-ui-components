import { ScaleLinear } from '@visx/vendor/d3-scale';
import { ProvidedZoom } from '@visx/zoom/lib/types';
/**
    All information given to a point on the plot, including its coordinates(x and y), its radius, color, and opacity, and its metadata information
    which can be any amount of strings used to display in the tooltip
*/
export type Point<T> = {
    /**
     * X and Y coordinates of point on plot (required)
     */
    x: number;
    y: number;
    /**
     * Shape of the point
     * @default
     * "circle"
     *
     */
    shape?: "circle" | "triangle";
    /**
     * Radius of the point
     * @default
     * 3
     * (5 if hovered)
     */
    r?: number;
    /**
     * Fill color of the point
     * @default
     * "black"
     */
    color?: string;
    /**
     * Transparency ofe the point
     * @default
     * 1 (opaque)
     */
    opacity?: number;
    /**
     * Any and all metadata the user wishes to include with the point.
     * this will be used to display the tooltip on the hover of the point
     * @example
     * metaData: {
          name: x.displayname,
          accession: x.experimentAccession
        }
     */
    metaData?: T;
};
/**
    Positioning props given to the minimap in realtion to the container
    @todo
    remove the seperate type since position is now the only
    prop in here
**/
export type MiniMapProps = {
    position?: {
        right: number;
        bottom: number;
    };
};
/**
 * Initial state of the component controling the initial state variables on first load
 */
export type InitialState<S, Z> = {
    minimap?: {
        /**
         * Initial minimap state (open or closed)
         */
        open?: boolean;
    };
    controls?: {
        /**
         * Initial selection type
         * Note: allowed types depends on zoom and selection availibility
         */
        selectionType?: S extends true ? "pan" | "select" : Z extends true ? "select" | "none" : "pan";
    };
};
/**
    Basic chart properties
*/
export type ChartProps<T, S extends boolean | undefined, Z extends boolean | undefined> = {
    /**
     * Array of points being displayed on the plot
     * if empty, nothing will be displayed
     */
    pointData: Point<T>[];
    /**
     * Boolean flag to indicate if any data is still loading,
     * if true, loading state is displayed (Circular Progress)
     */
    loading: boolean;
    /**
     * If true, enables lasso selection of points, controllable with onSelectionChange
     * Shows new select icon in controls section (pencil)
     * @default
     * false
     */
    selectable?: S;
    /**
     * If true, zooming and panning capabilities of the scatterplot
     * Removes zooming control icons (Zoom in, zoom out, reset zoom)
     *
     * Note: if Zoom is disabled and selecting is enabled, No icons will appear,
     * the selection type of the plot will only ever be select
     *
     * @default
     * false
     */
    disableZoom?: Z;
    /**
     * If true, tooltip functionality is disabled.
     * point hovering will not render anything but will still increase the size of the point
     * @default
     * false
     */
    disableTooltip?: boolean;
    /**
     * Determines the placement of any controls that are being shown at the time.
     * Positions are fixed and cannot be moved, they are 10 pixels from the specified side of the container
     * and situated in the center
     *
     * @default
     * "left"
     */
    controlsPosition?: "left" | "bottom" | "right";
    /**
     * Can specify a certain color to display what controls are being selected
     * (Pan/Select and Minimap open/closed)
     *
     * @default
     * primary.main
     */
    controlsHighlight?: string;
    /**
     * Callback function triggered whenever the currently rendered points on the plot change
     * ex. when panning or zooming in
     *
     * @returns
     * Array of points currently rendered on the plot
     * including all of its info and metadata
     */
    onDisplayedPointsChange?: (points: Point<T>[]) => void;
    /**
     * Callback function triggered when a lasso selection is made
     *
     * @returns
     * Array of points inside the lasso
     * Empty array if no points inside lasso
     */
    onSelectionChange?: (selectedPoints: Point<T>[]) => void;
    /**
     * Callback fucntion triggered when a point is clicked
     *
     * @returns
     * Singular point including all info and metadata
     */
    onPointClicked?: (point: Point<T>) => void;
    /**
     * Optional key to specify if you want to group your points.
     * Must be a key of type Point, or an existing key already in meta data
     *
     * If anchor is specified, all grouped points will increase in size on hover of any point in said group
     */
    groupPointsAnchor?: keyof Point<T> | keyof T;
    /**
     * Custom tooltip formatting
     * can give JSX elements
     *
     * @example
     * tooltipBody={(point) => {
            return (
                <Box sx={{ textAlign: "center", p: 1 }}>
                    <DNALogo ppm={formattedPWM} height={100} />
                    {point.metaData?.tooltipValues && (
                    <>
                        <Typography variant="body2">
                        <strong>Accession:</strong>{" "}
                        {point.metaData.tooltipValues.accession}
                        </Typography>
                        <Typography variant="body2">
                        <strong>DBD:</strong>{" "}
                        {point.metaData.tooltipValues.dbd}
                        </Typography>
                        <Typography variant="body2">
                        <strong>Factor:</strong>{" "}
                        {point.metaData.tooltipValues.factor}
                        </Typography>
                    </>
                    )}
                </Box>
            );
        }}
     */
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
