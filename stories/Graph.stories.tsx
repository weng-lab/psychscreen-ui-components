import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Graph } from '../src';
import { GraphProps } from '../src';
import data2 from '../example/data2.json';
import data3 from '../example/data3.json';
import data from '../example/data.json';
import { Edge, Node } from '../src/components/Graph/types';
import '../src/App.css';

const meta: Meta = {
  title: 'Graph',
  component: Graph,
};
export default meta;

const Template: Story<GraphProps> = (args) => <Graph {...args} />;

export const SampleGraph = Template.bind({});
SampleGraph.args = {
  data: data2.data,
  title: 'Sample Graph With No Centered cCRE',
  id: 'Sample',
  scale: (n: number) => 10 * n,
};
export const PilotDataWithCentered = Template.bind({});
PilotDataWithCentered.args = {
  data: data.data,
  title: 'cCRE Impact With Pilot Data With Centered cCRE',
  id: 'PilotWithCentered',
};

export const FiftyPercent = Template.bind({});
FiftyPercent.args = {
  data: data.data,
  title: '50% Width and Height',
  id: '50Percent',
  width: '50%',
  height: '50%',
};

export const PilotDataWithoutCentered = Template.bind({});
PilotDataWithoutCentered.args = {
  data: data3.data,
  title: 'cCRE Impact With Pilot Data Without Centered cCRE',
  id: 'PilotNoCentered',
};

export const DifferentLabel = Template.bind({});
DifferentLabel.args = {
  data: data3.data,
  title: 'Different Label',
  id: 'diffLabel',
  getLabel: (node: Node) => node.category,
};
