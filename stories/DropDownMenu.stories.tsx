import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { MenuItem  } from '@mui/material';

import { DropDownMenu } from '../src';
import "../src/App.css";

const meta = {
  title: 'DropDownMenu',
  component: DropDownMenu,
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
} satisfies Meta<typeof DropDownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DropDownMenu>
      <MenuItem>Disease/Trait</MenuItem>
      <MenuItem>Gene/b-cCRE</MenuItem>
      <MenuItem>SNP/QTL</MenuItem>
      <MenuItem>Single-Cell</MenuItem>
    </DropDownMenu>
  )
}
