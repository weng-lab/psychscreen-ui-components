import { Meta, StoryObj } from '@storybook/react';
import ViolinPlot from './violinPlot';

const meta = {
    title: 'ViolinPlot',
    component: ViolinPlot,
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
} satisfies Meta<typeof ViolinPlot>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [5, 4, 4, 3, 2, 1, 1, 1]
const data2 = [7, 2, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 2, 3, 3, 3, 2, 1, 1, 1, 1, 4, 4, 5, 5, 6, 6, 6, 7, 5, 4, 2, 9, 8, 10, 18]
const data3 = [
    11.44, 6.88, 17.83, 4.46, 8.68, 8.95, 8.11, 13.21, 0.56, 18.11,
    15.63, 14.69, 2.53, 14.61, 5.69, 17.72, 18.54, 15.96, 14.77, 12.49,
    13.20, 17.28, 1.59, 15.83, 15.59, 2.08, 5.68, 14.84, 3.47, 18.93,
    12.98, 10.97, 15.81, 12.22, 2.85, 16.55, 5.97, 15.92, 16.36, 5.86,
    10.42, 19.95, 12.81, 7.42, 17.02, 17.77, 7.03, 8.06, 16.68, 16.72,
    16.55, 15.90, 13.78, 2.16, 11.13, 10.40, 2.83, 19.01, 9.25, 4.09,
    2.22, 5.28, 4.05, 1.72, 13.25, 13.52, 19.66, 6.94, 12.70, 11.65,
    11.30, 11.82, 4.06, 12.37, 19.93, 12.85, 14.34, 0.03, 11.00, 18.61,
    11.31, 10.84, 18.05, 12.83, 14.60, 6.44, 18.25, 13.02, 14.31, 15.14,
    3.26, 3.26, 0.77, 12.23, 3.49, 16.00, 12.70, 14.30, 8.82, 15.62
]

const distributions = [
    {
        data: data2,
        label: "Group 1",
        color: "blue"
    },
    {
        data: data3,
        label: "Group 2",
        color: "yellow"
    },
    {
        data: data,
        label: "Group 3",
        color: "orange"
    }
]

// Default story
export const Default: Story = {
    args: {
        distributions: distributions,
        loading: false,
        leftAxisLabel: "Left Axis Label",
        outliers: true
    },
};

// Only box plot
export const BoxPlotOnly: Story = {
    args: {
        distributions: distributions,
        loading: false,
        leftAxisLabel: "Left Axis Label",
        outliers: true,
        disableViolinPlot: true
    }
};

// Only violin plot
export const ViolinPlotOnly: Story = {
    args: {
        distributions: distributions,
        loading: false,
        leftAxisLabel: "Left Axis Label",
        outliers: true,
        disableBoxPlot: true
    }
};

// No outliers
export const NoOutliers: Story = {
    args: {
        distributions: distributions,
        loading: false,
        leftAxisLabel: "Left Axis Label",
    }
};

// Label orientation
export const LabelOrientation: Story = {
    args: {
        distributions: distributions,
        loading: false,
        leftAxisLabel: "Left Axis Label",
        outliers: true,
        labelOrientation: "rightDiagonal"
    },
};

// Coloring
export const Coloring: Story = {
    args: {
        distributions: distributions,
        loading: false,
        leftAxisLabel: "Left Axis Label",
        outliers: true,
        boxProps: {
            medianColor: "red",
            maxColor: "blue",
            minColor: "yellow",
            outlierColor: "purple"
        },
        violinProps: {
            stroke: 3
        }
    },
};