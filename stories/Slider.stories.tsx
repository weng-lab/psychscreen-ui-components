import React from 'react';
import { Meta, Story } from '@storybook/react';
import { RangeSlider, SliderProps } from '../src';
import "../src/App.css";
import { MenuItem } from '@mui/material';

const meta: Meta<typeof RangeSlider> = {
  title: 'RangeSlider', 
  component: RangeSlider,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<SliderProps> = args => (
    <RangeSlider
    {...args}
    />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  title:'DNase Z-score',
  width: 250,
  defaultStart: 1.64,
  defaultEnd: 10,
  min: -10,
  max: 10,
  minDistance: 1,
  step: 0.01
};
