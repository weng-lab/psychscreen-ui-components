import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Graph } from '../src/components/Graph';
import { GraphProps } from '../src/components/Graph/types';
import data from '../example/data.json';
import data2 from '../example/data2.json';
import '../src/App.css';

const meta: Meta = {
  title: 'Components/Graph',
  component: Graph,
};
export default meta;

const Template: Story<GraphProps> = (args) => <Graph {...args} />;

export const SampleGraph = Template.bind({});
export const GraphWithPilotData = Template.bind({});

SampleGraph.args = { data: data2, title: 'Sample Graph' };
GraphWithPilotData.args = { data: data, title: 'cCRE Impact With Pilot Data' };
