import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Zoom as VisxZoom } from '@visx/zoom'
import { ZoomProps } from '@visx/zoom/lib/Zoom'
import { ChartProps, Line, Lines, Point } from './types';
import { Tooltip as VisxTooltip } from '@visx/tooltip';
import { TooltipProps } from '@visx/tooltip/lib/tooltips/Tooltip';
import { Group } from '@visx/group';
import { scaleLinear } from '@visx/scale';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { Circle, LinePath } from '@visx/shape';
import { localPoint } from '@visx/event';
import { Text } from '@visx/text';
import { useDrag } from '@visx/drag';
import { curveBasis } from '@visx/curve';
import ScatterTooltip from './tooltip';
import ControlButtons from './controls';
import { Box, IconButton, Stack, Tooltip } from '@mui/material';
import { ScaleLinear } from '@visx/vendor/d3-scale';
import { HighlightAlt } from "@mui/icons-material"
import MiniMap from './minimap';

const initialTransformMatrix = {
    scaleX: 1,
    scaleY: 1,
    translateX: 0,
    translateY: 0,
    skewX: 0,
    skewY: 0,
}

const ScatterPlot = <T extends object>(
    props: ChartProps<T>
)=> {
    /**
 * Hacky workaround for complex type compatability issues. Hopefully this will fix itself when ugrading to React 19 - Jonathan 12/11/24
 * @todo remove this when possible
 */
    const Zoom = VisxZoom as unknown as React.FC<ZoomProps<React.ReactElement>>;
    const VisTooltip = VisxTooltip as unknown as React.FC<TooltipProps>;
    const [tooltipData, setTooltipData] = React.useState<Point<T> | null>(null);
    const [tooltipOpen, setTooltipOpen] = React.useState(false);
    const [lines, setLines] = useState<Lines>([]);
    const [selectMode, setSelectMode] = useState<"select" | "pan">(props.selectable ? "select" : "pan")
    const [initialLoad, setInitialLoad] = useState<boolean>(false)
    const [prevPoints, setPrevPoints] = useState<Point<T>[] | null>(null)
    const [showMiniMap, setShowMiniMap] = useState<boolean>(props.miniMap.defaultOpen ? props.miniMap.defaultOpen : false)
    const selectable = props.selectable ? props.selectable : false;
    const margin = { top: 20, right: 20, bottom: 70, left: 70 };
    const boundedWidth = Math.min(props.width * 0.9, props.height * 0.9) - margin.left;
    const boundedHeight = boundedWidth;
    const hoveredPoint = tooltipData ? props.pointData.find(point => point.x === tooltipData.x && point.y === tooltipData.y) : null;
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const handleSelectionModeChange = (mode: "select" | "pan") => {
        setSelectMode(mode);
    };

    const toggleMiniMap = () => {
        setShowMiniMap(!showMiniMap);
    };

    //rescale x and y scales when zooming
    //converts to pixel values before applying transformations
    const rescaleX = (scale: ScaleLinear<number, number, never>, translateX: number, scaleX: number) => {
        const newXDomain = scale
            .range()
            .map((r) =>
                scale.invert(
                    (r - translateX) / scaleX
                )
            );
        return scale.copy().domain(newXDomain);
    };

    const rescaleY = (scale: ScaleLinear<number, number, never>, translateY: number, scaleY: number) => {
        const newXDomain = scale
            .range()
            .map((r) =>
                scale.invert(
                    (r - translateY) / scaleY
                )
            );
        return scale.copy().domain(newXDomain);
    };

    //scales for the x and y axes
    const xScale = useMemo(() => {
        if (!props.pointData || props.pointData.length === 0) return scaleLinear({ domain: [0, 1], range: [0, boundedWidth] });
        return scaleLinear({
            domain: [
                Math.min(...props.pointData.map(d => d.x)) - 1,
                Math.max(...props.pointData.map(d => d.x)) + 1,
            ],
            range: [0, boundedWidth],
            nice: true,
        });
    }, [props.pointData, boundedWidth]);

    const yScale = useMemo(() => {
        if (!props.pointData || props.pointData.length === 0) return scaleLinear({ domain: [0, 1], range: [boundedHeight, 0] });
        return scaleLinear({
            domain: [
                Math.min(...props.pointData.map(d => d.y)) - 1,
                Math.max(...props.pointData.map(d => d.y)) + 1,
            ],
            range: [boundedHeight, 0], // Y-axis is inverted
            nice: true,
        });
    }, [props.pointData, boundedHeight]);

    // Setup dragging for lasso drawing
    const onDragStart = useCallback(
        (currDrag) => {
            if (selectMode === "select") {
                // add the new line with the starting point
                const adjustedX = (currDrag.x - margin.left);
                const adjustedY = (currDrag.y - margin.top);
                setLines((currLines) => [...currLines, [{ x: adjustedX, y: adjustedY }]]);
            }
        },
        [selectMode, margin.left, margin.top],
    );

    const onDragMove = useCallback(
        (currDrag) => {
            if (selectMode === "select") {
                // add the new point to the current line
                const adjustedX = (currDrag.x - margin.left);
                const adjustedY = (currDrag.y - margin.top);
                setLines((currLines) => {
                    const nextLines = [...currLines];
                    const newPoint = { x: adjustedX + currDrag.dx, y: adjustedY + currDrag.dy };
                    const lastIndex = nextLines.length - 1;
                    nextLines[lastIndex] = [...(nextLines[lastIndex] || []), newPoint];
                    return nextLines;
                });
            }
        },
        [selectMode, margin.left, margin.top],
    );

    //find all points within the drawn lasso for selection purposes
    const isPointInLasso = (point: { x: number; y: number }, lasso: Line): boolean => {
        let inside = false;
        //itterate through lasso, j starting at last point (closing the polygon) and taking the value of the previous point on subsequent calls
        for (let i = 0, j = lasso.length - 1; i < lasso.length; j = i++) {
            const xi = lasso[i].x, yi = lasso[i].y; //current vertex
            const xj = lasso[j].x, yj = lasso[j].y; //previous vertex

            //ray tracing using imaginary horizontal ray coming from the point extending to the right
            const intersect = ((yi > point.y) !== (yj > point.y)) && //does the ray intersect the line segment from the current to the previous vertex?
                (point.x < (xj - xi) * (point.y - yi) / (yj - yi) + xi); //is the point to the left of the segment?
            if (intersect) inside = !inside; //toggles everytime the ray intersects the lasso, if twice it will go back to false since it crossed the lasso twice
            //if the ray crosses the lasso an even amount of times -> outside, odd -> inside
        }
        return inside;
    };

    const onDragEnd = useCallback(
        (zoom) => {
            if (selectMode === "select") {
                if (lines.length === 0) return;

                const lasso = lines[lines.length - 1];
                const xScaleTransformed = rescaleX(xScale, zoom.transformMatrix.translateX, zoom.transformMatrix.scaleX);
                const yScaleTransformed = rescaleY(yScale, zoom.transformMatrix.translateY, zoom.transformMatrix.scaleY);

                const pointsInsideLasso = props.pointData.filter((point) => {
                    const scaledPoint = {
                        x: xScaleTransformed(point.x),
                        y: yScaleTransformed(point.y),
                    };
                    return isPointInLasso(scaledPoint, lasso);
                });

                if (props.onSelectionChange) {
                    props.onSelectionChange(pointsInsideLasso);
                }
                setLines([]);
            } else {
                setLines([]);
            }
        },
        [selectMode, lines, xScale, yScale, props]
    );

    //visx draggable variables (canot declare before functions)
    const {
        x = 0,
        y = 0,
        dx,
        dy,
        isDragging,
        dragStart,
        dragEnd,
        dragMove,
    } = useDrag({
        onDragStart,
        onDragMove,
        resetOnStart: true,
    });

    //find the closest point to cursor within threshold to show the tooltip
    const handleMouseMove = useCallback(
        (event: React.MouseEvent<SVGElement>, zoom) => {
            if (isDragging || zoom.isDragging) {
                setTooltipOpen(false);
                setTooltipData(null);
                return;
            }

            const point = localPoint(event.currentTarget, event);
            if (!point) return;
            const adjustedX = point.x - margin.left;
            const adjustedY = point.y - margin.top;

            //rescale the x and y coordinates with the current zoom state
            const xScaleTransformed = rescaleX(xScale, zoom.transformMatrix.translateX, zoom.transformMatrix.scaleX);
            const yScaleTransformed = rescaleY(yScale, zoom.transformMatrix.translateY, zoom.transformMatrix.scaleY);

            const threshhold = 5;

            //find the exact point being hovered over within the threshhold
            const hoveredPoint = props.pointData.find((curr) => {
                const transformedX = xScaleTransformed(curr.x);
                const transformedY = yScaleTransformed(curr.y);
                return (
                    Math.abs(adjustedX - transformedX) < threshhold &&
                    Math.abs(adjustedY - transformedY) < threshhold
                );
            });

            if (hoveredPoint) {
                setTooltipData(hoveredPoint);
                setTooltipOpen(true);
            } else {
                setTooltipData(null);
                setTooltipOpen(false);
            }
        }, [isDragging, margin.left, margin.top, xScale, yScale, props.pointData]
    );


    const handleMouseLeave = useCallback(() => {
        setTooltipOpen(false);
        setTooltipData(null);
    }, []);

    const drawPoints = useCallback((xScaleTransformed: ScaleLinear<number, number, never>, yScaleTransformed: ScaleLinear<number, number, never>) => {
        const canvas = canvasRef.current;
        if (canvas && initialLoad) {
            console.log("Drawing Points")

            const context = canvas.getContext('2d');

            if (context) {
                context.setTransform(2, 0, 0, 2, 0, 0);

                // Clear the canvas before rendering
                context.clearRect(0, 0, props.width, props.height);
                // Render points on the canvas
                props.pointData.forEach(point => {
                    const isHovered = hoveredPoint && hoveredPoint.x === point.x && hoveredPoint.y === point.y;
                    const transformedX = xScaleTransformed(point.x);
                    const transformedY = yScaleTransformed(point.y);;
                    const isPointWithinBounds =
                        xScaleTransformed(point.x) >= 0 &&
                        xScaleTransformed(point.x) <= boundedWidth &&
                        yScaleTransformed(point.y) >= 0 &&
                        yScaleTransformed(point.y) <= boundedHeight;

                    if (isPointWithinBounds && !isHovered) {
                        context.beginPath();
                        context.arc(transformedX, transformedY, point.r || 3, 0, Math.PI * 2);
                        context.fillStyle = point.color;
                        context.globalAlpha = (point.opacity !== undefined ? point.opacity : 1);
                        context.fill();
                    }
                });
            }
        }
    }, [initialLoad, props.width, props.height, props.pointData, hoveredPoint, boundedWidth, boundedHeight])

    // feels hacky, but this checks the canvas since we have to wait for the canvas to be 
    // initialized, and we have to check if there was a page change so we can reset initialLoad
    // TODO come up with a better solution
    useEffect(() => {
        const canvas = canvasRef.current;
        if (prevPoints !== props.pointData) {
            //check to see if there was a page change by comparing the point data
            setInitialLoad(false)
        }
        //check to see if the canvas has been initialized and if the initial points have been loaded already
        if (canvas && !initialLoad) {
            setInitialLoad(true)
            setPrevPoints(props.pointData)
        }

    }, [initialLoad, props.pointData, prevPoints]);

    //Axis styling
    const axisLeftLabel = (
        <Text
            textAnchor="middle"
            verticalAnchor="end"
            angle={-90}
            fontSize={15}
            y={boundedHeight / 2}
            x={0}
            dx={-50} //adjust to move outside of chart area
        >
            {props.leftAxisLable}
        </Text>
    );

    const axisBottomLabel = (
        <Text
            textAnchor="middle"
            verticalAnchor="start"
            fontSize={15}
            y={boundedHeight}
            x={boundedWidth / 2}
            dy={50}
        >
            {props.bottomAxisLabel}
        </Text>
    );

    if (props.loading || !props.pointData) {
        return <CircularProgress />;
    }

    return (
        <>
            <Zoom width={props.width} height={props.height} scaleXMin={1 / 2} scaleXMax={10} scaleYMin={1 / 2} scaleYMax={10} initialTransformMatrix={initialTransformMatrix}>
                {(zoom) => {
                    // rescale as we zoom and pan
                    const xScaleTransformed = rescaleX(xScale, zoom.transformMatrix.translateX, zoom.transformMatrix.scaleX);
                    const yScaleTransformed = rescaleY(yScale, zoom.transformMatrix.translateY, zoom.transformMatrix.scaleY);
                    const isHoveredPointWithinBounds = hoveredPoint &&
                        xScaleTransformed(hoveredPoint.x) >= 0 &&
                        xScaleTransformed(hoveredPoint.x) <= boundedWidth &&
                        yScaleTransformed(hoveredPoint.y) >= 0 &&
                        yScaleTransformed(hoveredPoint.y) <= boundedHeight;

                    const handleZoomIn = () => {
                        zoom.scale({ scaleX: 1.2, scaleY: 1.2 });
                    }

                    const handleZoomOut = () => {
                        zoom.scale({ scaleX: 0.8, scaleY: 0.8 });
                    }

                    const handleZoomReset = () => {
                        zoom.reset();
                    }

                    drawPoints(xScaleTransformed, yScaleTransformed)
                    
                    return (
                        <>
                            <Stack direction="column" sx={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}>
                                <ControlButtons
                                    selectable={selectable}
                                    handleSelectionModeChange={handleSelectionModeChange}
                                    selectMode={selectMode}
                                    zoomIn={handleZoomIn}
                                    zoomOut={handleZoomOut}
                                    zoomReset={handleZoomReset}
                                />
                            </Stack>
                            {/* Zoomable Group for Points */}
                            <Stack justifyContent="center" alignItems="center" direction="row" sx={{ position: "relative", }}>
                                <Box sx={{ width: props.width, height: props.height }} >
                                    <div style={{ position: 'relative' }}>
                                        <canvas
                                            ref={canvasRef}
                                            width={props.width * 2}
                                            height={props.height * 2}
                                            style={{
                                                cursor: selectMode === "select" ? (isDragging ? 'none' : 'default') : (zoom.isDragging ? 'grabbing' : 'grab'),
                                                userSelect: 'none',
                                                position: "absolute",
                                                top: margin.top,
                                                left: margin.left,
                                                width: props.width,
                                                height: props.height,
                                                backgroundColor: "transparent"
                                            }}
                                        />
                                        <svg width={props.width} height={props.height} style={{ position: "absolute", cursor: selectMode === "select" ? (isDragging ? 'none' : 'default') : (zoom.isDragging ? 'grabbing' : 'grab'), userSelect: 'none' }} onMouseMove={(e) => handleMouseMove(e, zoom)} onMouseLeave={handleMouseLeave} >
                                            <Group top={margin.top} left={margin.left}>
                                                {selectMode === "select" && (
                                                    <>
                                                        {/* Render lasso */}
                                                        {lines.map((line, i) => (
                                                            <LinePath
                                                                key={`line-${i}`}
                                                                fill="transparent"
                                                                stroke="black"
                                                                strokeWidth={3}
                                                                data={line}
                                                                curve={curveBasis}
                                                                x={(d) => d.x}
                                                                y={(d) => d.y}
                                                            />
                                                        ))}

                                                        {isDragging && (
                                                            <g>
                                                                {/* Crosshair styling */}
                                                                <line
                                                                    x1={x - margin.left + dx - 6}
                                                                    y1={y - margin.top + dy}
                                                                    x2={x - margin.left + dx + 6}
                                                                    y2={y - margin.top + dy}
                                                                    stroke="black"
                                                                    strokeWidth={1}
                                                                />
                                                                <line
                                                                    x1={x - margin.left + dx}
                                                                    y1={y - margin.top + dy - 6}
                                                                    x2={x - margin.left + dx}
                                                                    y2={y - margin.top + dy + 6}
                                                                    stroke="black"
                                                                    strokeWidth={1}
                                                                />
                                                                <circle cx={x - margin.left} cy={y - margin.top} r={4} fill="transparent" stroke="black" pointerEvents="none" />
                                                            </g>
                                                        )}
                                                    </>
                                                )}

                                                {/* Render hovered point last to bring it to foreground */}
                                                {isHoveredPointWithinBounds && hoveredPoint && (
                                                    <Circle
                                                        cx={xScaleTransformed(hoveredPoint.x)}
                                                        cy={yScaleTransformed(hoveredPoint.y)}
                                                        r={hoveredPoint.r ? hoveredPoint.r + 2 : 5}
                                                        fill={hoveredPoint.color}
                                                        stroke="black"
                                                        strokeWidth={1}
                                                        opacity={1}
                                                        onClick={() => props.onPointClicked && props.onPointClicked(hoveredPoint)}
                                                    />
                                                )}

                                                {/* Interactable surface */}
                                                <rect
                                                    fill="transparent"
                                                    width={props.width}
                                                    height={props.height}
                                                    onMouseDown={selectMode === "select" ? dragStart : zoom.dragStart}
                                                    onMouseUp={selectMode === "select" ? (event) => {
                                                        dragEnd(event);
                                                        onDragEnd(zoom);
                                                    } : zoom.dragEnd}
                                                    onMouseMove={selectMode === "select" ? (isDragging ? dragMove : undefined) : zoom.dragMove}
                                                    onTouchStart={selectMode === "select" ? dragStart : zoom.dragStart}
                                                    onTouchEnd={selectMode === "select" ? (event) => {
                                                        dragEnd(event);
                                                        onDragEnd(zoom);
                                                    } : zoom.dragEnd}
                                                    onTouchMove={selectMode === "select" ? (isDragging ? dragMove : undefined) : zoom.dragMove}
                                                    onWheel={(event) => {
                                                        const point = localPoint(event) || { x: 0, y: 0 };
                                                        const zoomDirection = event.deltaY < 0 ? 1.1 : 0.9;
                                                        zoom.scale({ scaleX: zoomDirection, scaleY: zoomDirection, point });
                                                    }}
                                                />
                                            </Group>

                                            {/* Static Axes Group */}
                                            <Group top={margin.top} left={margin.left}>
                                                <AxisLeft
                                                    numTicks={4}
                                                    scale={yScaleTransformed}
                                                    tickLabelProps={() => ({
                                                        fill: '#1c1917',
                                                        fontSize: 10,
                                                        textAnchor: 'end',
                                                        verticalAnchor: 'middle',
                                                        x: -10,
                                                    })}
                                                />
                                                <AxisBottom
                                                    numTicks={4}
                                                    top={boundedHeight}
                                                    scale={xScaleTransformed}
                                                    tickLabelProps={() => ({
                                                        fill: '#1c1917',
                                                        fontSize: 11,
                                                        textAnchor: 'middle',
                                                    })}
                                                />
                                                {axisLeftLabel}
                                                {axisBottomLabel}
                                            </Group>
                                        </svg >
                                    </div>
                                </Box>
                            </Stack>
                            {
                                props.miniMap.show && (
                                    <Tooltip title="Toggle Minimap">
                                        <IconButton sx={{ position: 'absolute', right: 10, bottom: 10, zIndex: 10, width: 'auto', height: 'auto', color: showMiniMap ? "primary.main" : "default" }} size="small" onClick={toggleMiniMap}>
                                            <HighlightAlt />
                                        </IconButton>
                                    </Tooltip>
                                )
                            }
                            {
                                showMiniMap && props.miniMap.show && (
                                    <MiniMap
                                        miniMap={props.miniMap}
                                        width={props.width}
                                        height={props.height}
                                        pointData={props.pointData}
                                        xScale={xScale}
                                        yScale={yScale}
                                        zoom={zoom}
                                    />
                                )
                            }

                            {/* tooltip */}
                            {
                                tooltipOpen && tooltipData && isHoveredPointWithinBounds && (
                                    <VisTooltip left={xScaleTransformed(tooltipData.x) + 200} top={yScaleTransformed(tooltipData.y)}>
                                        <ScatterTooltip
                                            tooltipBody={props.tooltipBody}
                                            tooltipData={tooltipData}
                                        />
                                    </VisTooltip>
                                )
                            }
                        </>
                    )
                }}
            </Zoom >
        </>
    );
}

export default ScatterPlot;