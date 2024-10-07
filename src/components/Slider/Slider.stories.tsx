import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { RangeSlider} from '../..';
import "../../App.css";
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';

const meta = {
  title: 'RangeSlider', 
  component: RangeSlider,
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof RangeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story ={
  args: {
    title:'DNase Z-score',
    width: 250,
    defaultStart: 1.64,
    defaultEnd: 10,
    min: -10,
    max: 10,
    minDistance: 1,
    step: 0.01
  }
}

export const WidthTest: Story ={
  args: {
    title:'Width Test',
    width: '100%',
    defaultStart: 1.64,
    defaultEnd: 10,
    min: -10,
    max: 10,
    minDistance: 1,
    step: 0.01
  }
}

export const onSliderChange: Story = {
  args: {
    title: "Let's extract the value",
    width: 250,
    min: 0,
    max: 10,
    defaultStart: 3,
    defaultEnd: 7,
    minDistance: 1,
    step: 0.5,
  },
  render: (args) => {
    const [value0, setValue0] = React.useState<number>(0);
    const [value1, setValue1] = React.useState<number>(0);

    return (
      <>
        <RangeSlider
          {...args}
          onSliderChange={(value) => {
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
    )
  }
}

export const onSliderCommit: Story = {
  args: {
    title: "Let's extract the value",
    width: 250,
    min: 0,
    max: 10,
    defaultStart: 3,
    defaultEnd: 7,
    minDistance: 1,
    step: 0.5,
  },
  render: (args) => {
    const [value0, setValue0] = React.useState<number>(0);
    const [value1, setValue1] = React.useState<number>(0);

    return (
      <>
        <RangeSlider
          {...args}
          onSliderChangeCommitted={(value) => {
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
    )
  }
}

export const managedValue: Story = {
  args: {
    title: "You can reset this value externally",
    width: 250,
    min: -10,
    max: 10,
    minDistance: 1,
    step: 0.5,
  },
  render: (args) => {
    const [ value0, setValue0 ] = React.useState<number>(-10);
    const [ value1, setValue1 ] = React.useState<number>(10);

    return (
      <>
        <RangeSlider
          {...args}
          value={[value0, value1]}
          onSliderChangeCommitted={(value) => {
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
        <Button onClick={() => {setValue0(-10); setValue1(10)}}>Set back to defaults</Button>
      </>
    )
  }
}