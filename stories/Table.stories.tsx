import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CustomizedTable, PSYCHSCREEN_DEFAULT_THEME } from '../src'; 
import "../src/App.css";
import { ThemeProvider } from '@emotion/react';

const meta: Meta = {
  title: 'CustomizedTable',
  component: CustomizedTable,
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

const Template: Story<any> = args => (
  <ThemeProvider theme={PSYCHSCREEN_DEFAULT_THEME}>
    <CustomizedTable {...args}/>
  </ThemeProvider>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Table = Template.bind({ });

Table.args = { tabledata: [{Symbol: 'a','Score':2},{Symbol:'b','Score':5},{Symbol:'c','Score':15},{Symbol:'d','Score':25},{Symbol:'e','Score':35}]};

