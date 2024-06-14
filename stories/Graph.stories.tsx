import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Graph } from '../src';
import { GraphProps } from '../src';
import data2 from '../example/data2.json';
import data from '../example/data.json';
import '../src/App.css';

const meta: Meta = {
  title: 'Components/Graph',
  component: Graph,
};
export default meta;

const Template: Story<GraphProps> = (args) => <Graph {...args} />;

export const SampleGraph = Template.bind({});
SampleGraph.args = { data: data2.data, title: 'Sample Graph', id: 1 };
export const GraphWithPilotData = Template.bind({});
GraphWithPilotData.args = {
  data: data.data,
  title: 'cCRE Impact With Pilot Data',
  id: 'hello',
};

export const FiftyPercent = Template.bind({});
FiftyPercent.args = {
  data: data.data,
  title: '50% Width and Height',
  id: 2,
  width: '50%',
  height: '50%',
};
