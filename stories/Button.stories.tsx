import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../src'; 
import "../src/App.css";

const meta: Meta = {
  title: 'Button',
  component: Button,
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

const Template: Story<ButtonProps> = args => (
  <div style={{ backgroundColor: args.btheme === "dark" ? "#1f1f1f" : "#ffffff", padding: "30px" }}>
    <Button bvariant="filled" {...args}>I'm Enabled.</Button>&nbsp;
    <Button bvariant="filled" disabled {...args}>I'm Disabled.</Button>
  </div>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Light = Template.bind({});
export const Dark = Template.bind({});

Light.args = { btheme: 'light', bvariant: "outlined" };
Dark.args = { btheme: 'dark', bvariant: "outlined" };
