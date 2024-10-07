import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';

import { Typography, PSYCHSCREEN_DEFAULT_THEME } from '../..';
import "../../App.css";
import { TypographyType } from './Typography';

const Template = ({ type }: {type: TypographyType}) => (
  <ThemeProvider theme={PSYCHSCREEN_DEFAULT_THEME}>
    <h3 style={{ fontFamily: "Roboto" }}>
      Typography for <strong>{type}</strong> elements:
    </h3>
    <hr />
    <Typography size="small" type={type}>
      <strong>small: </strong>A quick brown fox jumps over the lazy dog.
    </Typography>
    <Typography size="medium" type={type}>
      <strong>medium: </strong>A quick brown fox jumps over the lazy dog.
    </Typography>
    <Typography size="large" type={type}>
      <strong>large: </strong>A quick brown fox jumps over the lazy dog.
    </Typography>
  </ThemeProvider>
);

const meta = {
  title: 'Typography',
  component: Template,
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof Template>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Body: Story = {
  args: {type: 'body'}
}

export const Title: Story = {
  args: {type: 'title'}
}
export const Display: Story = {
  args: {type: 'display'}
}
export const Label: Story = {
  args: {type: 'label'}
}
export const Headline: Story = {
  args: {type: 'headline'}
}