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
    shape: "circle" | "triangle";
};

export default meta;
type Story = StoryObj<typeof meta>;

// Example data for the scatter plot
const scatterData: Point[] = [
    { x: 1, y: 2, color: 'red', shape: "circle" },
    { x: 3, y: 4, color: 'blue', shape: "circle" },
    { x: 5, y: 6, color: 'green', shape: "circle" },
];

const moreScatterData: Point[] = [
    { x: 1, y: 2, color: 'red', shape: "circle" },
    { x: 3, y: 4, color: 'blue', shape: "circle" },
    { x: 5, y: 6, color: 'green', shape: "circle" },
    { x: 2, y: 2, color: 'red', shape: "circle" },
    { x: 4, y: 4, color: 'blue', shape: "circle" },
    { x: 6, y: 6, color: 'green', shape: "circle" },
];

const shapeData: Point[] = [
    { x: 1, y: 2, color: 'red', shape: "circle" },
    { x: 3, y: 4, color: 'blue', shape: "triangle" },
    { x: 5, y: 6, color: 'green', shape: "circle" },
];

// Mock for the map prop
const miniMap: MiniMapProps = {
    defaultOpen: true,
    position: { right: 50, bottom: 50 }
};

// Default story with scatter data
export const Default: Story = {
    args: {
        width: 500,
        height: 500,
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
        width: 500,
        height: 500,
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
        width: 500,
        height: 500,
        pointData: scatterData,
        loading: false,
        leftAxisLable: "Y-Axis Label",
        bottomAxisLabel: "X-Axis Label"
    }
};

// Default story with selectable points
export const SelectablePoints: Story = {
    args: {
        width: 500,
        height: 500,
        selectable: true,
        onSelectionChange: (selectedPoints) => {
            window.alert(
                `You Seleted Points: ${JSON.stringify(selectedPoints)}`
            );
        },
        pointData: scatterData,
        loading: false,
        miniMap: miniMap,
        leftAxisLable: "Y-Axis Label",
        bottomAxisLabel: "X-Axis Label"
    }
};

// Default story with clickable points
// export const ClickablePoints: Story = {
//     args: {
//         width: 500,
//         height: 500,
//         onPointClicked: (point) => {
//             console.log('Clicked Point:', point);
//         },
//         pointData: scatterData,
//         loading: false,
//         miniMap: miniMap,
//         leftAxisLable: "Y-Axis Label",
//         bottomAxisLabel: "X-Axis Label"
//     }
// };

// Default story with grouped points
export const HoverMultiplePoints: Story = {
    args: {
        width: 500,
        height: 500,
        groupPointsAnchor: "color",
        pointData: moreScatterData,
        loading: false,
        miniMap: miniMap,
        leftAxisLable: "Y-Axis Label",
        bottomAxisLabel: "X-Axis Label"
    }
};

// Default story with multiple shapes
export const OtherShapes: Story = {
    args: {
        width: 500,
        height: 500,
        pointData: shapeData,
        loading: false,
        miniMap: miniMap,
        leftAxisLable: "Y-Axis Label",
        bottomAxisLabel: "X-Axis Label"
    }
};

// Default story with disabled zoom
export const ZoomDisabled: Story = {
    args: {
        width: 500,
        height: 500,
        pointData: scatterData,
        loading: false,
        miniMap: miniMap,
        leftAxisLable: "Y-Axis Label",
        bottomAxisLabel: "X-Axis Label",
        disableZoom: true
    }
};

// Default story with disabled zoom but selectable
export const ZoomDisabledButSelectable: Story = {
    args: {
        width: 500,
        height: 500,
        pointData: scatterData,
        loading: false,
        miniMap: miniMap,
        leftAxisLable: "Y-Axis Label",
        bottomAxisLabel: "X-Axis Label",
        disableZoom: true,
        selectable: true,
        onSelectionChange: (selectedPoints) => {
            window.alert(
                `You Seleted Points: ${JSON.stringify(selectedPoints)}`
            );
        },
    }
};

// Controls Positioning
export const ControlsPositioning: Story = {
    args: {
        controlsPosition: "bottom",
        width: 500,
        height: 500,
        pointData: scatterData,
        loading: false,
        miniMap: miniMap,
        leftAxisLable: "Y-Axis Label",
        bottomAxisLabel: "X-Axis Label",
        selectable: true,
        onSelectionChange: (selectedPoints) => {
            window.alert(
                `You Seleted Points: ${JSON.stringify(selectedPoints)}`
            );
        },
    }
};
