import React from 'react';
import { Meta, StoryObj} from '@storybook/react';
import {
  AppBar,
  AppBarProps,
  TabletAppBar,
  TabletAppBarProps,
  PSYCHSCREEN_DEFAULT_THEME,
} from '../src';
import '../src/App.css';
import { ThemeProvider } from '@emotion/react';

const meta: Meta = {
  title: 'AppBar',
  component: AppBar,
  tags: ['autodocs'],
  // Existing
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  //Example has this
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof AppBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
}

// export const Tablet: Story = {
//   args: {tablet: true, title: 'Tablet App Bar'}
// }

export const CentredAppBar: Story = {
  args: {
    centered: 'true'
  }
}

// const Template: Story<TabletAppBarProps & { tablet?: boolean }> = (args) =>
//   args.tablet ? (
//     <ThemeProvider theme={PSYCHSCREEN_DEFAULT_THEME}>
//       <TabletAppBar {...args} />
//     </ThemeProvider>
//   ) : (
//     <ThemeProvider theme={PSYCHSCREEN_DEFAULT_THEME}>
//       <AppBar {...args} />
//     </ThemeProvider>
//   );

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
// export const Default = Template.bind({});
// export const Tablet = Template.bind({});
// export const CentredAppBar = Template.bind({});

// Default.args = {};
// Tablet.args = { tablet: true, title: 'Tablet App Bar' };
// CentredAppBar.args = { centered: true };
