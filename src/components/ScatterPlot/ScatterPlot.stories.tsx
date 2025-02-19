import ScatterPlot  from './scatterplot';
import { Point, MiniMapProps } from './types';

// Example data for the scatter plot
const scatterData: Point<T>[] = [
    { x: 10, y: 20, color: 'red' },
    { x: 30, y: 40, color: 'blue' },
    { x: 50, y: 60, color: 'green' },
];

// Mock for the map prop
const miniMap: MiniMapProps = {
    show: true,
    position: { right: 10, bottom: 10 }
};

export default {
    title: 'Components/Chart',
    component: ScatterPlot,
};

// Default story with scatter data
export const Default = () => (
    <ScatterPlot
        width={400}
        height={400}
        pointData={scatterData}
        loading={false}
        miniMap={miniMap}
        leftAxisLable="UMAP-2"
        bottomAxisLabel="UMAP-1"
    />
);

// Loading state story
export const LoadingState = () => (
    <ScatterPlot
        width={400}
        height={400}
        pointData={scatterData}
        loading={true}
        miniMap={miniMap}
        leftAxisLable="UMAP-2"
        bottomAxisLabel="UMAP-1"
    />
);

// Story with a custom tooltipBody
export const CustomTooltip = () => (
    <ScatterPlot
        width={400}
        height={400}
        pointData={scatterData}
        loading={false}
        miniMap={miniMap}
        leftAxisLable="UMAP-2"
        bottomAxisLabel="UMAP-1"
        tooltipBody={(point) => (
            <div>
                <strong>Point Details:</strong>
                <p>X: {point.x}</p>
                <p>Y: {point.y}</p>
                <p>Color: {point.color}</p>
            </div>
        )}
    />
);

// Story with no mini map
export const WithoutMiniMap = () => (
    <ScatterPlot
        width={400}
        height={400}
        pointData={scatterData}
        loading={false}
        miniMap={{ show: false }}
        leftAxisLable="UMAP-2"
        bottomAxisLabel="UMAP-1"
    />
);
