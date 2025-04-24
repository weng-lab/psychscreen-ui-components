import { useEffect, useRef, useState } from "react";
import { MapProps } from "./types";

const MiniMap = <T,>({
    miniMap,
    size,
    pointData,
    xScale,
    yScale,
    zoom
}: MapProps<T>) => {
    //keep track of touch points for moving the minimap window
    const [lastTouch, setLastTouch] = useState<{ x: number; y: number } | null>(null);
    const windowRef = useRef<SVGRectElement>(null);
    const boundedSize = size > 100 ? size : 100

    //prevent scrolling when dragging the window
    useEffect(() => {
        const ref = windowRef.current;
        if (!ref) return;

        const handleTouchMove = (e: TouchEvent) => {
            e.preventDefault();
        };

        ref.addEventListener("touchmove", handleTouchMove, { passive: false });

        return () => {
            ref.removeEventListener("touchmove", handleTouchMove);
        };
    }, []);

    return (
        <div
            style={{
                position: 'absolute',
                bottom: miniMap.position ? miniMap.position.bottom : 10,
                right: miniMap.position ? miniMap.position.right : 10,
            }}
        >
            {/* Canvas for rendering points on minimap */}
            <canvas
                width={(boundedSize - 100) / 4}
                height={(boundedSize - 100) / 4}
                ref={(canvas) => {
                    if (canvas) {
                        const context = canvas.getContext('2d');
                        const scaleFactor = 0.25;
                        const scaledWidth = (boundedSize - 100) * scaleFactor;
                        const scaledHeight = (boundedSize - 100) * scaleFactor;
                        if (context) {
                            // Clear canvas
                            context.clearRect(0, 0, canvas.width, canvas.height);

                            // Draw background and outline
                            context.fillStyle = 'white';
                            context.fillRect(0, 0, scaledWidth, scaledHeight);
                            context.strokeStyle = 'grey';
                            context.lineWidth = 4;
                            context.strokeRect(0, 0, scaledWidth, scaledHeight);

                            // Draw points
                            pointData.forEach(point => {
                                const transformedX = xScale(point.x) * scaleFactor;
                                const transformedY = yScale(point.y) * scaleFactor;
                                context.beginPath();
                                context.arc(transformedX, transformedY, 3 * scaleFactor, 0, Math.PI * 2);
                                context.fillStyle = point.color ? point.color : "black";
                                context.fill();
                            });
                        }
                    }
                }}
                style={{ display: 'block' }}
            />

            {/* SVG for rendering the zoom window */}
            <svg
                width={(boundedSize - 100) / 4}
                height={(boundedSize - 100) / 4}
                style={{ position: 'absolute', top: 0, left: 0 }}
            >
                <g transform={`scale(0.25)`}>
                    <rect
                        ref={windowRef}
                        width={boundedSize - 100}
                        height={boundedSize - 100}
                        fill="#0d0f98"
                        fillOpacity={0.2}
                        stroke="#0d0f98"
                        strokeWidth={4}
                        rx={8}
                        transform={zoom.toStringInvert()}
                        //drag functionality for window, must invert zoom and take the scale into account
                        style={{
                            cursor: zoom.isDragging ? "grabbing" : "grab",
                            touchAction: "none"
                        }}
                        onMouseDown={zoom.dragStart}
                        onMouseUp={zoom.dragEnd}
                        onMouseMove={(event) => {
                            if (zoom.isDragging) {
                                zoom.setTransformMatrix({
                                    scaleX: zoom.transformMatrix.scaleX,
                                    scaleY: zoom.transformMatrix.scaleY,
                                    translateX: zoom.transformMatrix.translateX - event.movementX / .25,
                                    translateY: zoom.transformMatrix.translateY - event.movementY / .25,
                                    skewX: zoom.transformMatrix.skewX,
                                    skewY: zoom.transformMatrix.skewY
                                });
                            }
                        }}
                        onMouseLeave={zoom.dragEnd}
                        onTouchStart={(event) => {
                            zoom.dragStart(event);
                            const touch = event.touches[0];
                            setLastTouch({ x: touch.clientX, y: touch.clientY });
                        }}
                        onTouchEnd={() => {
                            zoom.dragEnd();
                            setLastTouch(null);
                        }}
                        onTouchMove={(event) => {
                            if (zoom.isDragging && event.touches.length === 1 && lastTouch) {
                                const touch = event.touches[0];
                                const deltaX = touch.clientX - lastTouch.x;
                                const deltaY = touch.clientY - lastTouch.y;

                                zoom.setTransformMatrix({
                                    scaleX: zoom.transformMatrix.scaleX,
                                    scaleY: zoom.transformMatrix.scaleY,
                                    translateX: zoom.transformMatrix.translateX - deltaX / 0.25,
                                    translateY: zoom.transformMatrix.translateY - deltaY / 0.25,
                                    skewX: zoom.transformMatrix.skewX,
                                    skewY: zoom.transformMatrix.skewY
                                });
                                setLastTouch({ x: touch.clientX, y: touch.clientY }); // update for next move
                            }
                        }}
                    />
                </g>
            </svg>
        </div>
    );
};

export default MiniMap;