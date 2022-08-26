import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Select, SelectProps } from '../src';
import "../src/App.css";
import { MenuItem } from '@mui/material';

const meta: Meta = {
  title: 'Select', 
  component: Select,
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

const Template: Story<SelectProps> = args => (
    <Select variant="standard" defaultValue="disease/trait" {...args}>
      <MenuItem value="disease/trait">Disease/Trait</MenuItem>
      <MenuItem value="gene/bcre">Gene/bCRE</MenuItem>
      <MenuItem value="snp/qtl">SNP/QTL</MenuItem>
      <MenuItem value="single-cell">Single Cell</MenuItem>
    </Select>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
