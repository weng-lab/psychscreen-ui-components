import React from 'react';
import { Meta, StoryObj} from '@storybook/react';
import {
  AppBar,
  TabletAppBar,
  PSYCHSCREEN_DEFAULT_THEME,
} from '../..';
import "../../App.css";
import { ThemeProvider } from '@emotion/react';

const meta = {
  title: 'AppBar',
  component: AppBar,
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
  //This is not the ideal way if many components need access to the same theme
  //https://storybook.js.org/docs/writing-stories/mocking-data-and-modules/mocking-providers#configuring-the-mock-provider
  decorators: [
    (Story) => (
      <ThemeProvider theme={PSYCHSCREEN_DEFAULT_THEME}>
        <Story />  
      </ThemeProvider>
    )
  ]
} satisfies Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}

export const CentredAppBar: Story = {
  args: {
    centered: true
  }
}

/**
 * This feels like the wrong way to use stories, but I cant get around doing this since AppBar and
 * TabletAppBar are two seprate components with different types, and you can only declare one meta
 **/
export const Tablet: Story = {
  args: {},
  render: () => (
    <TabletAppBar title={'Tablet App Bar'}/>
  )
}
