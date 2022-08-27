import React from 'react';
import { Meta, Story } from '@storybook/react';
import { HorizontalCard, PSYCHSCREEN_DEFAULT_THEME } from '../src'; 
import "../src/App.css";
import { ThemeProvider } from '@emotion/react';

const meta: Meta = {
  title: 'HorizontalCard',
  component: HorizontalCard,
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
    <HorizontalCard {...args}/>
  </ThemeProvider>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Card = Template.bind({});

const onCardClick = (v?: string) =>{
    console.log('Card Value',v)

}

Card.args = { onCardClick, cardSpacing: 5, cardContentText : [{cardLabel: "Card 1", val: "val 1", cardDesc: "Card Desc 1"},{cardLabel: "Card 2", val: "val 2", cardDesc: " Card Desc 2"}] };

