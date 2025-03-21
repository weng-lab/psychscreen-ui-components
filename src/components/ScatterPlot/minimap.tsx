import { MapProps } from "./types";

const MiniMap = <T,>({
    miniMap,
    width,
    height,
    pointData,
    xScale,
    yScale,
    zoom
}: MapProps<T>) => {
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
                width={(width - 100) / 4}
                height={(height - 100) / 4}
                ref={(canvas) => {
                    if (canvas) {
                        const context = canvas.getContext('2d');
                        const scaleFactor = 0.25;
                        const scaledWidth = (width - 100) * scaleFactor;
                        const scaledHeight = (height - 100) * scaleFactor;
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
                                context.fillStyle = point.color;
                                context.fill();
                            });
                        }
                    }
                }}
                style={{ display: 'block' }}
            />

            {/* SVG for rendering the zoom window */}
            <svg
                width={(width - 100) / 4}
                height={(height - 100) / 4}
                style={{ position: 'absolute', top: 0, left: 0 }}
            >
                <g transform={`scale(0.25)`}>
                    <rect
                        width={width - 100}
                        height={height - 100}
                        fill="#0d0f98"
                        fillOpacity={0.2}
                        stroke="#0d0f98"
                        strokeWidth={4}
                        rx={8}
                        transform={zoom.toStringInvert()}
                        //drag functionality for window, must invert zoom and take the scale into account
                        style={{ cursor: zoom.isDragging ? "grabbing" : "grab" }}
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
                        onTouchStart={zoom.dragStart}
                        onTouchEnd={zoom.dragEnd}
                        onTouchMove={(event) => {
                            if (zoom.isDragging && event.touches.length === 1) {
                                const touch = event.touches[0];
                                zoom.setTransformMatrix({
                                    scaleX: zoom.transformMatrix.scaleX,
                                    scaleY: zoom.transformMatrix.scaleY,
                                    translateX: zoom.transformMatrix.translateX - touch.clientX / .25,
                                    translateY: zoom.transformMatrix.translateY - touch.clientY / .25,
                                    skewX: zoom.transformMatrix.skewX,
                                    skewY: zoom.transformMatrix.skewY
                                });
                            }
                        }}
                    />
                </g>
            </svg>
        </div>
    );
};

export default MiniMap;