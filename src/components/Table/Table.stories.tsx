import { Meta, StoryObj } from '@storybook/react';
import { CustomizedTable, PSYCHSCREEN_DEFAULT_THEME } from '../..'; 
import "../../App.css";
import { ThemeProvider } from '@emotion/react';

const tdata = Array.from(Array(1000).keys()).map((a)=> {
  //return {  Symbol: 'S'+ a, 'Score 1':a, 'Score 2':1,'Score 3':4,'Score 4':6,'Score 5':9,'Score 6':0,'Score 7':9,'Score 8':1,'Score 9':2,'Score 10':5,'Score 11':12}
  return [{header: 'Symbol 1', value: 'ss '+a},{header: 'Symbol 1', value: 'ss '+a},{header: 'Symbol 1', value: 'ss '+a},{header: 'Symbol 1', value: 'ss '+a},{header: 'Symbol 1', value: 'ss '+a},{header: 'Symbol 1', value: 'ss '+a},{header: 'Symbol 2', value: a},{header: 'Symbol 3', value: a},{header: 'Symbol 4', value: a},{ header: 'Score', value: 'score '+ a, render: <b>{'test'+a}</b>}]
})

const meta  = {
  title: 'CustomizedTable',
  component: CustomizedTable,
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
  decorators: [
    (Story) => (
      <ThemeProvider theme={PSYCHSCREEN_DEFAULT_THEME}>
        <Story />  
      </ThemeProvider>
    )
  ]
} satisfies Meta<typeof CustomizedTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rowsPerPage: [10,100], 
    tabledata: tdata
  }
}
