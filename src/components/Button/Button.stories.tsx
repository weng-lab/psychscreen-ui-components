import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../..';
import "../../App.css";

const meta = {
  title: 'Button',
  component: Button,
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: { btheme: 'light', bvariant: 'outlined' },
  render: (args => (
    <div
    style={{
      backgroundColor: args.btheme === 'dark' ? '#1f1f1f' : '#ffffff',
      padding: '30px',
    }}
  >
    <Button {...args}>I'm Enabled.</Button>&nbsp;
    <Button disabled {...args}>
      I'm Disabled.
    </Button>
  </div>
  ))
}

export const Dark: Story = {
  args: { btheme: 'dark', bvariant: 'outlined' },
  render: (args => (
    <div
    style={{
      backgroundColor: args.btheme === 'dark' ? '#1f1f1f' : '#ffffff',
      padding: '30px',
    }}
  >
    <Button {...args}>I'm Enabled.</Button>&nbsp;
    <Button disabled {...args}>
      I'm Disabled.
    </Button>
  </div>
  ))
}
