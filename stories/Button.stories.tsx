import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps, PSYCHSCREEN_DEFAULT_THEME } from '../src';
import "../src/App.css";
import { ThemeProvider } from '@emotion/react';

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
  <ThemeProvider theme={PSYCHSCREEN_DEFAULT_THEME}>
    <Button variant="contained" {...args}>I'm Enabled.</Button>&nbsp;
    <Button variant="contained" disabled {...args}>I'm Disabled.</Button>
  </ThemeProvider>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = { primary: true };
Secondary.args = {};
