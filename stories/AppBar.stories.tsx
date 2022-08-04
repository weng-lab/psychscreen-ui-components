import React from 'react';
import { Meta, Story } from '@storybook/react';
import { AppBar, AppBarProps, PSYCHSCREEN_DEFAULT_THEME } from '../src';
import "../src/App.css";
import { ThemeProvider } from '@emotion/react';

const meta: Meta = {
  title: 'AppBar', 
  component: AppBar,
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

const Template: Story<AppBarProps> = args => (
  <ThemeProvider theme={PSYCHSCREEN_DEFAULT_THEME}>
    <AppBar {...args} />
  </ThemeProvider>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
