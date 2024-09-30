import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { HorizontalCard, PSYCHSCREEN_DEFAULT_THEME } from '../src'; 
import "../src/App.css";
import { ThemeProvider } from '@emotion/react';

const meta = {
  title: 'HorizontalCard',
  component: HorizontalCard,
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
} satisfies Meta<typeof HorizontalCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const onCardClick = (v?: string) =>{
    console.log('Card Value',v)
}

export const Card: Story = {
  args: {
    onCardClick,
    cardSpacing: 5,
    cardContentText: [{ cardLabel: "Card 1", val: "val 1", cardDesc: "Card Desc 1" },
    { cardLabel: "Card 2", val: "val 2", cardDesc: " Card Desc 2" }]
  }
}

