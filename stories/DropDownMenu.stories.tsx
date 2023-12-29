import React from 'react';
import { Meta, Story } from '@storybook/react';
import { MenuItem  } from '@mui/material';

import { DropDownMenu, DropDownMenuProps } from '../src';
import "../src/App.css";

const meta: Meta = {
  title: 'DropDownMenu',
  component: DropDownMenu,
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

const Template: Story<DropDownMenuProps> = args => (
  <DropDownMenu>
    <MenuItem>Disease/Trait</MenuItem>
    <MenuItem>Gene/b-cCRE</MenuItem>
    <MenuItem>SNP/QTL</MenuItem>
    <MenuItem>Single-Cell</MenuItem>
  </DropDownMenu>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
