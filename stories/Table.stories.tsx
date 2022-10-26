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

const tdata = Array.from(Array(1000).keys()).map((a)=> {
  //return {  Symbol: 'S'+ a, 'Score 1':a, 'Score 2':1,'Score 3':4,'Score 4':6,'Score 5':9,'Score 6':0,'Score 7':9,'Score 8':1,'Score 9':2,'Score 10':5,'Score 11':12}
  return [{header: 'Symbol', value: a},{ header: 'Score', value: 'score '+ a, render: <b>{'test'+a}</b>}]
})

Table.args = { rowsPerPage: [10,100],  tabledata: tdata};

