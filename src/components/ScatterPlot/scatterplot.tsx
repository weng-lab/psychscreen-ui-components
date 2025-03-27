import React, { useCallback, useMemo, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Zoom as VisxZoom } from '@visx/zoom'
import { ZoomProps } from '@visx/zoom/lib/Zoom'
import { ChartProps, Line, Lines, Point, ZoomType } from './types';
import { Tooltip as VisxTooltip, Portal } from '@visx/tooltip';
import { TooltipProps } from '@visx/tooltip/lib/tooltips/Tooltip';
import { Group } from '@visx/group';
import { scaleLinear } from '@visx/scale';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { LinePath } from '@visx/shape';
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
import { HandlerArgs } from '@visx/drag/lib/useDrag';
import { useParentSize } from '@visx/responsive';

const initialTransformMatrix = {
    scaleX: 1,
    scaleY: 1,
    translateX: 0,
    translateY: 0,
    skewX: 0,
    skewY: 0,
}

const ScatterPlot = <T extends object, S extends boolean | undefined = undefined, Z extends boolean | undefined = undefined>(
    props: ChartProps<T, S, Z>
) => {
    /**
 * Hacky workaround for complex type compatability issues. Hopefully this will fix itself when ugrading to React 19 - Jonathan 12/11/24
 * @todo remove this when possible
 */
    const Zoom = VisxZoom as unknown as React.FC<ZoomProps<React.ReactElement>>;
    const VisTooltip = VisxTooltip as unknown as React.FC<TooltipProps>;

    const initialState: {
        minimap: { open: boolean };
        controls: { selectionType: "pan" | "select" | "none" }
    } = {
        minimap: {
            open: props.initialState?.minimap?.open ?? false,
        },
        controls: {
            selectionType: props.initialState?.controls?.selectionType ? props.initialState?.controls?.selectionType : props.selectable ? "select" : "pan",
        }
    }

    const { parentRef, width: parentWidth, height: parentHeight } = useParentSize();
    const size = Math.min(parentHeight, parentWidth)
    const [tooltipData, setTooltipData] = React.useState<Point<T> | null>(null);
    const [tooltipOpen, setTooltipOpen] = React.useState(false);
    const [lines, setLines] = useState<Lines>([]);
    const [selectMode, setSelectMode] = useState<"select" | "pan" | "none">(initialState.controls.selectionType);
    const [showMiniMap, setShowMiniMap] = useState<boolean>(initialState.minimap.open);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const selectable = props.selectable ? props.selectable : false;
    const margin = { top: 20, right: 20, bottom: 70, left: 70 };
    const boundedWidth = Math.min(size * 0.9, size * 0.9) - margin.left;
    const boundedHeight = boundedWidth;
    const hoveredPoint = tooltipData ? props.pointData.find(point => point.x === tooltipData.x && point.y === tooltipData.y) : null;
    const [previousDisplayedPoints, setPreviousDisplayedPoints] = useState<Point<T>[]>([])

    const handleSelectionModeChange = (mode: "select" | "pan" | "none") => {
        setSelectMode(mode);
    };

    const toggleMiniMap = () => {
        setShowMiniMap(!showMiniMap);
    };

    const groupedPoints: Point<T>[] = useMemo(() => {
        const anchor = props.groupPointsAnchor
        if (anchor && hoveredPoint) {
            return props.pointData.filter((point) => {
                if (anchor in point) {
                    // If the anchor is a key of Point<T>, compare directly
                    return point[anchor as keyof Point<T>] === hoveredPoint[anchor as keyof Point<T>];
                } else if (point.metaData && hoveredPoint.metaData) {
                    // If the anchor is a key of T (metaData), compare inside metaData
                    return point.metaData[anchor as keyof T] === hoveredPoint.metaData[anchor as keyof T];
                }
                return false;
            });
        } else if (hoveredPoint) {
            return ([hoveredPoint]);
        } else {
            return ([])
        }
    }, [hoveredPoint, props.groupPointsAnchor, props.pointData])

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
        (currDrag: HandlerArgs) => {
            if (selectMode === "select" && currDrag?.x !== undefined && currDrag?.y !== undefined) {
                // add the new line with the starting point
                const adjustedX = (currDrag.x - margin.left);
                const adjustedY = (currDrag.y - margin.top);
                setLines((currLines) => [...currLines, [{ x: adjustedX, y: adjustedY }]]);
            }
        },
        [selectMode, margin.left, margin.top],
    );

    const onDragMove = useCallback(
        (currDrag: HandlerArgs) => {
            if (selectMode === "select" && currDrag?.x !== undefined && currDrag?.y !== undefined) {
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
        (zoom: ZoomType) => {
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
        (event: React.MouseEvent<SVGElement>, zoom: ZoomType) => {
            if (isDragging || zoom.isDragging) {
                setTooltipOpen(false);
                setTooltipData(null);
                return;
            }

            setMouseX(event.pageX);
            setMouseY(event.pageY);

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
        }, [isDragging, props.pointData, margin.left, margin.top, xScale, yScale]
    );


    const handleMouseLeave = useCallback(() => {
        setTooltipOpen(false);
        setTooltipData(null);
    }, []);

    const handleClick = () => {
        if (!props.onPointClicked || !hoveredPoint) return;

        if (hoveredPoint) {
            props.onPointClicked(hoveredPoint);
        }
    };

    const drawPoints = useCallback((xScaleTransformed: ScaleLinear<number, number, never>, yScaleTransformed: ScaleLinear<number, number, never>, canvas: HTMLCanvasElement) => {
        if (canvas) {
            const context = canvas.getContext('2d');

            if (context) {
                context.setTransform(2, 0, 0, 2, 0, 0);

                // Clear the canvas before rendering
                context.clearRect(0, 0, boundedWidth, boundedHeight);

                const hoveredPoints = new Set(groupedPoints.map(gp => `${gp.x},${gp.y}`));

                const nonHoveredPoints = props.pointData.filter(
                    (point) => !hoveredPoints.has(`${point.x},${point.y}`)
                );
                const hoveredOnlyPoints = props.pointData.filter(
                    (point) => hoveredPoints.has(`${point.x},${point.y}`)
                );

                const displayedPoints: Point<T>[] = [];

                const drawPoint = (point: Point<T>, isHovered: boolean) => {

                    const transformedX = xScaleTransformed(point.x);
                    const transformedY = yScaleTransformed(point.y);

                    const isPointWithinBounds =
                        xScaleTransformed(point.x) >= 0 &&
                        xScaleTransformed(point.x) <= boundedWidth &&
                        yScaleTransformed(point.y) >= 0 &&
                        yScaleTransformed(point.y) <= boundedHeight;

                    const size = (point.r || 3) + (isHovered ? 2 : 0);

                    if (isPointWithinBounds) {
                        displayedPoints.push(point);

                        context.beginPath();

                        if (point.shape === "circle") {
                            context.arc(transformedX, transformedY, size, 0, Math.PI * 2);
                        } else if (point.shape === "triangle") {
                            context.moveTo(transformedX, transformedY - size);
                            context.lineTo(transformedX - size, transformedY + size);
                            context.lineTo(transformedX + size, transformedY + size);
                            context.closePath();
                        }

                        context.fillStyle = point.color;
                        context.globalAlpha = point.opacity !== undefined ? point.opacity : 1;
                        context.fill();

                        if (isHovered) {
                            context.lineWidth = 1;
                            context.strokeStyle = "black";
                            context.stroke();
                        }
                    }

                };

                // First draw all non-hovered points then render hovered points on top
                nonHoveredPoints.forEach((point) => drawPoint(point, false));
                hoveredOnlyPoints.forEach((point) => drawPoint(point, true));

                const haveDisplayedPointsChanged = (prevPoints: Point<T>[], newPoints: Point<T>[]): boolean => {
                    if (prevPoints.length !== newPoints.length) return true;
                    return !prevPoints.every((point, index) => {
                        const newPoint = newPoints[index];
                        return (
                            point.x === newPoint.x &&
                            point.y === newPoint.y &&
                            point.r === newPoint.r &&
                            point.shape === newPoint.shape &&
                            point.color === newPoint.color &&
                            point.opacity === newPoint.opacity
                        );
                    });
                };

                if (haveDisplayedPointsChanged(previousDisplayedPoints, displayedPoints)) {
                    if (props.onDisplayedPointsChange) {
                        props.onDisplayedPointsChange(displayedPoints);
                    }
                    setPreviousDisplayedPoints(displayedPoints); // Update the reference to the current set
                }

            }
        }
    }, [boundedWidth, boundedHeight, groupedPoints, props, previousDisplayedPoints])

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
            {props.leftAxisLabel}
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
        <div ref={parentRef} style={{width: "100%", height: "100%", position: "relative"}}>
            <Zoom width={boundedWidth} height={boundedHeight} scaleXMin={1 / 2} scaleXMax={10} scaleYMin={1 / 2} scaleYMax={10} initialTransformMatrix={initialTransformMatrix}>
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

                    return (
                        <>
                            {!props.disableZoom && (
                                <Stack
                                    direction="column"
                                    sx={{
                                        position: 'absolute',
                                        left: props.controlsPosition === "left" ? 10 : props.controlsPosition === "bottom" ? "50%" : null,
                                        right: props.controlsPosition === "right" ? 10 : null,
                                        top: props.controlsPosition === "bottom" ? null : '50%',
                                        bottom: props.controlsPosition === "bottom" ? 10 : null,
                                        transform: props.controlsPosition === "bottom" ? 'translateX(-50%)' : 'translateY(-50%)',
                                        zIndex: 10
                                    }}
                                >
                                    <ControlButtons
                                        selectable={selectable}
                                        resetable={zoom.transformMatrix !== zoom.initialTransformMatrix}
                                        handleSelectionModeChange={handleSelectionModeChange}
                                        selectMode={selectMode}
                                        zoomIn={handleZoomIn}
                                        zoomOut={handleZoomOut}
                                        zoomReset={handleZoomReset}
                                        position={props.controlsPosition}
                                        highlight={props.controlsHighlight}
                                    />
                                </Stack>
                            )}
                            {/* Zoomable Group for Points */}
                            <Stack justifyContent="center" alignItems="center" direction="row" sx={{ position: "relative", }}>
                                <Box sx={{ width: size, height: size }} >
                                    <div style={{ position: 'relative' }}>
                                        <canvas
                                            ref={(canvas) => {
                                                if (canvas) {
                                                    drawPoints(xScaleTransformed, yScaleTransformed, canvas);
                                                }
                                            }}
                                            width={boundedWidth * 2 }
                                            height={boundedHeight * 2}
                                            style={{
                                                userSelect: 'none',
                                                position: "absolute",
                                                top: margin.top,
                                                left: margin.left,
                                                width: boundedWidth,
                                                height: boundedHeight,
                                                backgroundColor: "transparent"
                                            }}
                                        />
                                        <svg
                                            width={size}
                                            height={size}
                                            style={{
                                                position: "absolute",
                                                userSelect: 'none'
                                            }}
                                            onMouseMove={(e) => handleMouseMove(e, zoom)} onMouseLeave={handleMouseLeave}
                                        >
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

                                                {/* Interactable surface */}
                                                <rect
                                                    fill="transparent"
                                                    width={boundedWidth}
                                                    height={boundedHeight}
                                                    style={{
                                                        cursor: props.disableZoom
                                                            ? props.selectable
                                                                ? isDragging ? 'none' : 'crosshair'
                                                                : isDragging ? 'none' : 'default'
                                                            : hoveredPoint
                                                            ? 'default'
                                                            : selectMode === 'select'
                                                            ? isDragging ? 'none' : 'crosshair'
                                                            : zoom.isDragging
                                                            ? 'grabbing'
                                                            : 'grab',
                                                    }}
                                                    onMouseDown={selectMode === "none" ? undefined : selectMode === "select" ? dragStart : props.disableZoom ? undefined : zoom.dragStart}
                                                    onMouseUp={selectMode === "none" ? undefined : selectMode === "select" ? (event) => {
                                                        dragEnd(event);
                                                        onDragEnd(zoom);
                                                    } : props.disableZoom ? undefined : zoom.dragEnd}
                                                    onMouseMove={selectMode === "none" ? undefined : selectMode === "select" ? (isDragging ? dragMove : undefined) : props.disableZoom ? undefined : zoom.dragMove}
                                                    onMouseLeave={selectMode === "none" ? undefined : selectMode === "select" ? (event) => {
                                                        dragEnd(event);
                                                        onDragEnd(zoom);
                                                    } : props.disableZoom ? undefined : zoom.dragEnd}
                                                    onTouchStart={selectMode === "none" ? undefined : selectMode === "select" ? dragStart : props.disableZoom ? undefined : zoom.dragStart}
                                                    onTouchEnd={selectMode === "none" ? undefined : selectMode === "select" ? (event) => {
                                                        dragEnd(event);
                                                        onDragEnd(zoom);
                                                    } : props.disableZoom ? undefined : zoom.dragEnd}
                                                    onTouchMove={selectMode === "none" ? undefined : selectMode === "select" ? (isDragging ? dragMove : undefined) : props.disableZoom ? undefined : zoom.dragMove}
                                                    onWheel={(event) => {
                                                        if (!props.disableZoom) {
                                                            const point = localPoint(event) || { x: 0, y: 0 };
                                                            const zoomDirection = event.deltaY < 0 ? 1.1 : 0.9;
                                                            zoom.scale({ scaleX: zoomDirection, scaleY: zoomDirection, point });
                                                        }
                                                    }}
                                                    onClick={handleClick}
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
                                props.miniMap && !props.disableZoom && (
                                    <Tooltip title="Toggle Minimap">
                                        <IconButton sx={{ position: 'absolute', right: 10, bottom: 10, zIndex: 10, width: 'auto', height: 'auto', color: showMiniMap ? props.controlsHighlight ? props.controlsHighlight : "primary.main" : "default" }} size="small" onClick={toggleMiniMap}>
                                            <HighlightAlt />
                                        </IconButton>
                                    </Tooltip>
                                )
                            }
                            {
                                showMiniMap && props.miniMap && !props.disableZoom && (
                                    <MiniMap
                                        miniMap={props.miniMap}
                                        width={size}
                                        height={size}
                                        pointData={props.pointData}
                                        xScale={xScale}
                                        yScale={yScale}
                                        zoom={zoom}
                                    />
                                )
                            }

                            {/* tooltip */}
                            {
                                !props.disableTooltip && tooltipOpen && tooltipData && isHoveredPointWithinBounds && (
                                    <Portal>
                                        <VisTooltip left={(mouseX + 10)} top={(mouseY)}>
                                            <ScatterTooltip
                                                tooltipBody={props.tooltipBody}
                                                tooltipData={tooltipData}
                                            />
                                        </VisTooltip>
                                    </Portal>
                                )
                            }
                        </>
                    )
                }}
            </Zoom >
        </div>
    );
}

export default ScatterPlot;