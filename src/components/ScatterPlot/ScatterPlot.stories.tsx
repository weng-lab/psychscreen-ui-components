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
    decorators: [
        (Story) => (
          <div style={{ width: 850, height: 500}}>
            <Story />
          </div>
        ),
      ],
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
    position: { right: 50, bottom: 50 }
};

// Default story with scatter data
export const Default: Story = {
    args: {
        pointData: scatterData,
        loading: false,
        miniMap: miniMap,
        leftAxisLabel: "Y-Axis Label",
        bottomAxisLabel: "X-Axis Label",
        disableTooltip: true,
        initialState: {
            minimap: {
                open: true,
            },
            controls: {
                selectionType: "pan"
            }
        }
    },
    render: () => {
        return (
            <ScatterPlot
                pointData={scatterData}
                loading={false}
                leftAxisLabel=""
                bottomAxisLabel=""
                miniMap={miniMap}
                disableTooltip
                initialState={
                    {
                        minimap: {
                            open: true,
                        },
                        controls: {
                            selectionType: "pan"
                        }
                    }
                }
            />

        )
    }
};

// Default story with tooltip
export const CustomTooltip: Story = {
    args: {
        pointData: scatterData,
        loading: false,
        miniMap: miniMap,
        leftAxisLabel: "Y-Axis Label",
        bottomAxisLabel: "X-Axis Label",
        tooltipBody: (point) => (
            <div>
                <strong>Point Details:</strong>
                <p>X: {point.x}</p>
                <p>Y: {point.y}</p>
                <p>Color: {point.color}</p>
            </div>
        ),
        initialState: {
            minimap: {
                open: true,
            },
            controls: {
                selectionType: "pan"
            }
        }
    }
};

// Default story with no mini map
export const WithoutMiniMap: Story = {
    args: {
        pointData: scatterData,
        loading: false,
        leftAxisLabel: "Y-Axis Label",
        bottomAxisLabel: "X-Axis Label",
        disableTooltip: true,
    }
};

// Default story with selectable points
export const SelectablePoints: Story = {
    args: {
        selectable: true,
        onSelectionChange: (selectedPoints) => {
            window.alert(
                `You Seleted Points: ${JSON.stringify(selectedPoints)}`
            );
        },
        pointData: scatterData,
        loading: false,
        miniMap: miniMap,
        leftAxisLabel: "Y-Axis Label",
        bottomAxisLabel: "X-Axis Label",
        disableTooltip: true,
        initialState: {
            minimap: {
                open: true,
            },
            controls: {
                selectionType: "pan"
            }
        }
    }
};

// Default story with clickable points
export const ClickablePoints: Story = {
    args: {
        onPointClicked: (point) => {
            window.alert(
                `You Seleted Point: ${JSON.stringify(point)}`
            );
        },
        pointData: scatterData,
        loading: false,
        miniMap: miniMap,
        leftAxisLabel: "Y-Axis Label",
        bottomAxisLabel: "X-Axis Label",
        disableTooltip: true,
        initialState: {
            minimap: {
                open: true,
            },
            controls: {
                selectionType: "pan"
            }
        }
    }
};

// Default story with grouped points
export const HoverMultiplePoints: Story = {
    args: {
        groupPointsAnchor: "color",
        pointData: moreScatterData,
        loading: false,
        miniMap: miniMap,
        leftAxisLabel: "Y-Axis Label",
        bottomAxisLabel: "X-Axis Label",
        disableTooltip: true,
        initialState: {
            minimap: {
                open: true,
            },
            controls: {
                selectionType: "pan"
            }
        },
    }
};

// Default story with multiple shapes
export const OtherShapes: Story = {
    args: {
        pointData: shapeData,
        loading: false,
        miniMap: miniMap,
        leftAxisLabel: "Y-Axis Label",
        bottomAxisLabel: "X-Axis Label",
        disableTooltip: true,
        initialState: {
            minimap: {
                open: true,
            },
            controls: {
                selectionType: "pan"
            }
        }
    }
};

// Default story with disabled zoom
export const ZoomDisabled: Story = {
    args: {
        pointData: scatterData,
        loading: false,
        miniMap: miniMap,
        leftAxisLabel: "Y-Axis Label",
        bottomAxisLabel: "X-Axis Label",
        disableZoom: true,
        disableTooltip: true,
        initialState: {
            minimap: {
                open: true,
            },
            controls: {
                selectionType: "none"
            }
        }
    },
    render: () => {
        return (
            <ScatterPlot
                pointData={scatterData}
                loading={false}
                leftAxisLabel=""
                bottomAxisLabel=""
                miniMap={miniMap}
                disableTooltip
                disableZoom
                initialState={
                    {
                        minimap: {
                            open: true,
                        },
                        controls: {
                            selectionType: "none"
                        }
                    }
                }
            />

        )
    }
};

// Default story with disabled zoom but selectable
export const ZoomDisabledButSelectable: Story = {
    args: {
        pointData: scatterData,
        loading: false,
        miniMap: miniMap,
        leftAxisLabel: "Y-Axis Label",
        bottomAxisLabel: "X-Axis Label",
        disableZoom: true,
        selectable: true,
        onSelectionChange: (selectedPoints) => {
            window.alert(
                `You Seleted Points: ${JSON.stringify(selectedPoints)}`
            );
        },
        disableTooltip: true,
        initialState: {
            minimap: {
                open: true,
            },
            controls: {
                selectionType: "select"
            }
        }
    }
};

// Controls Positioning
export const ControlsPositioning: Story = {
    args: {
        controlsPosition: "bottom",
        pointData: scatterData,
        loading: false,
        miniMap: miniMap,
        leftAxisLabel: "Y-Axis Label",
        bottomAxisLabel: "X-Axis Label",
        selectable: true,
        onSelectionChange: (selectedPoints) => {
            window.alert(
                `You Seleted Points: ${JSON.stringify(selectedPoints)}`
            );
        },
        disableTooltip: true,
        initialState: {
            minimap: {
                open: true,
            },
            controls: {
                selectionType: "pan"
            }
        }
    }
};

// Controls Highlight
export const ControlsHighlight: Story = {
    args: {
        controlsHighlight: "red",
        pointData: scatterData,
        loading: false,
        miniMap: miniMap,
        leftAxisLabel: "Y-Axis Label",
        bottomAxisLabel: "X-Axis Label",
        selectable: true,
        onSelectionChange: (selectedPoints) => {
            window.alert(
                `You Seleted Points: ${JSON.stringify(selectedPoints)}`
            );
        },
        disableTooltip: true,
        initialState: {
            minimap: {
                open: true,
            },
            controls: {
                selectionType: "pan"
            }
        }
    }
};
