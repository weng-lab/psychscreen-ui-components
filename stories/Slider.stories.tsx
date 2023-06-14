import React from 'react';
import { Meta, Story } from '@storybook/react';
import { RangeSlider, SliderProps } from '../src';
import "../src/App.css";
import { MenuItem } from '@mui/material';
import Typography from '@mui/material/Typography';

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
export const WidthTest = Template.bind({});

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

WidthTest.args = {
  title:'Width Test',
  width: '100%',
  defaultStart: 1.64,
  defaultEnd: 10,
  min: -10,
  max: 10,
  minDistance: 1,
  step: 0.01
};

export const onSliderChange = () => {
  const [ value0, setValue0 ] = React.useState<number>(0);
  const [ value1, setValue1 ] = React.useState<number>(0);
  return (
  <>
    <RangeSlider
      title="Let's extract the value"
      width={250}
      min={0}
      max={10}
      defaultStart={3}
      defaultEnd={7}
      minDistance={1}
      step={0.5}
      onChange={(value) => {
        setValue0(value[0])
        setValue1(value[1])
      }}
    />
    <Typography>
      Value 0 = {value0}
    </Typography>
    <Typography>
      Value 1 = {value1}
    </Typography>
  </>
  );
}