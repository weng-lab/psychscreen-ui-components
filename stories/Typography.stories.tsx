import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';

import { Typography, TypographyProps, PSYCHSCREEN_DEFAULT_THEME } from '../src';
import "../src/App.css";

const meta: Meta = {
  title: 'Typography',
  component: Typography,
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

const Template: Story<TypographyProps> = args => (
  <ThemeProvider theme={PSYCHSCREEN_DEFAULT_THEME}>
    <h3 style={{ fontFamily: "Gilroy" }}>
      Typography for <strong>{args.type}</strong> elements
    </h3>
    <hr />
    <Typography size="small" {...args}>
      <strong>small: </strong>A quick brown fox jumps over the lazy dog.
    </Typography>
    { args.type !== 'headline' ? (
      <Typography size="medium" {...args}>
        <strong>medium: </strong>A quick brown fox jumps over the lazy dog.
      </Typography>
    ) : null}
    <Typography size="large" {...args}>
      <strong>large: </strong>A quick brown fox jumps over the lazy dog.
    </Typography>
  </ThemeProvider>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Body = Template.bind({});
export const Title = Template.bind({});
export const Display = Template.bind({});
export const Headline = Template.bind({});

Body.args = { type: 'body' };
Headline.args = { type: 'headline' };
Display.args = { type: 'display' };
Title.args = { type: 'title' };
