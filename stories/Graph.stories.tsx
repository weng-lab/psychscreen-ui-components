import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Graph } from '../src';
import { GraphProps } from '../src';
import data2 from '../example/data2.json';
import data3 from '../example/data3.json';
import data from '../example/data.json';
import { Edge, Node } from '../src/components/Graph/types';
import '../src/App.css';

function setColor(node: Node | Edge): string {
  switch (node.category) {
    case 'PLS':
      return '#FF0000';
    case 'dELS':
      return '#FFCD00';
    case 'pELS':
      return '#FFA700';
    case 'CA-CTCF':
      return '#00B0F0';
    case 'CA-H3K4me3':
      return '#ffaaaa';
    case 'CA-TF':
      return '#be28e5';
    case 'Low-DNase':
      return '#e1e1e1';
    case 'lower-expression':
      return 'black';
    case 'higher-expression':
      return 'blue';
    default:
      return 'grey';
  }
}

function setColor2(node: Node | Edge): string {
  switch (node.category) {
    case 'PLS':
      return 'red';
    case 'dELS':
      return 'orange';
    case 'pELS':
      return 'yellow';
    case 'CA-CTCF':
      return 'green';
    case 'CA-H3K4me3':
      return 'blue';
    case 'CA-TF':
      return 'purple';
    case 'Low-DNase':
      return 'pink';
    case 'lower-expression':
      return 'black';
    case 'higher-expression':
      return 'purple';
    default:
      return 'grey';
  }
}

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
  getColor: setColor,
};
export const PilotDataWithCentered = Template.bind({});
PilotDataWithCentered.args = {
  data: data.data,
  title: 'cCRE Impact With Pilot Data With Centered cCRE',
  id: 'PilotWithCentered',
  getColor: setColor,
};

export const FiftyPercent = Template.bind({});
FiftyPercent.args = {
  data: data.data,
  title: '50% Width and Height',
  id: '50Percent',
  width: '50%',
  height: '50%',
  getColor: setColor,
};

export const PilotDataWithoutCentered = Template.bind({});
PilotDataWithoutCentered.args = {
  data: data3.data,
  title: 'cCRE Impact With Pilot Data Without Centered cCRE',
  id: 'PilotNoCentered',
  getColor: setColor,
};

export const DifferentLabel = Template.bind({});
DifferentLabel.args = {
  data: data3.data,
  title: 'Different Label',
  id: 'diffLabel',
  getLabel: (node: Node) => node.category,
  getColor: setColor,
};

export const DifferentColor = Template.bind({});
DifferentColor.args = {
  data: data3.data,
  title: 'Different Color',
  id: 'diffColor',
  getColor: setColor2,
};
