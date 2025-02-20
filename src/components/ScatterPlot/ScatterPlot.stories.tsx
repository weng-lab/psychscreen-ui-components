import { Meta, StoryObj } from '@storybook/react';
import ScatterPlot from './scatterplot';
import { MiniMapProps } from './types';

const meta = {
    title: 'ScatterPlot',
    component: ScatterPlot,
    tags: ['autodocs'],
    argTypes: {
    },
    parameters: {
        controls: { expanded: true },
    },
} satisfies Meta<typeof ScatterPlot>;

type Point = {
    x: number;
    y: number;
    color: string;
};

export default meta;
type Story = StoryObj<typeof meta>;

// Example data for the scatter plot
const scatterData: Point[] = [
    { x: 1, y: 2, color: 'red' },
    { x: 3, y: 4, color: 'blue' },
    { x: 5, y: 6, color: 'green' },
];

// Mock for the map prop
const miniMap: MiniMapProps = {
    show: true,
    defaultOpen: true,
    position: { right: 50, bottom: 50 }
};

// Default story with scatter data
export const Default: Story = {
    args: {
        width: 400,
        height: 400,
        pointData: scatterData,
        loading: false,
        miniMap: miniMap,
        leftAxisLable: "Y-Axis Label",
        bottomAxisLabel: "X-Axis Label"
    }
};

// Default story with scatter data
export const CustomTooltip: Story = {
    args: {
        width: 400,
        height: 400,
        pointData: scatterData,
        loading: false,
        miniMap: miniMap,
        leftAxisLable: "Y-Axis Label",
        bottomAxisLabel: "X-Axis Label",
        tooltipBody: (point) => (
            <div>
                <strong>Point Details:</strong>
                <p>X: {point.x}</p>
                <p>Y: {point.y}</p>
                <p>Color: {point.color}</p>
            </div>
        ),
    }
};

// Default story with no mini map
export const WithoutMiniMap: Story = {
    args: {
        width: 400,
        height: 400,
        pointData: scatterData,
        loading: false,
        miniMap: { show: false },
        leftAxisLable: "Y-Axis Label",
        bottomAxisLabel: "X-Axis Label"
    }
};
