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
  if (node.category !== undefined) {
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
  return 'grey';
}

function setColor2(node: Node | Edge): string {
  if (node.category !== undefined) {
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
  return 'grey';
}

function setColor3(node: Node | Edge): string {
  if (node && node.category !== undefined) {
    switch (node.category) {
      case 'R':
        return 'red';
      case 'P':
        return 'purple';
      case 'B':
        return 'blue';
      default:
        return 'grey';
    }
  } else {
    return 'grey';
  }
}

function convertToSimple(node: Node | Edge): string {
  if (node.category) {
    switch (node.category) {
      case 'PLS':
        return 'Promoter';
      case 'dELS':
        return 'Distal Enhancer';
      case 'pELS':
        return 'Proximal Enhancer';
      case 'CA-CTCF':
        return 'Chromatin Accessible + CTCF';
      case 'CA-H3K4me3':
        return 'Chromatin Accessible + H3K4me3';
      case 'CA-TF':
        return 'Chromatin Accessible + Transcription Factor';
      case 'Low-DNase':
        return 'Low DNase';
      case 'CA-only':
        return 'Chromatin Accessible';
      case 'lower-expression':
        return 'Lower-Expression';
      case 'higher-expression':
        return 'Higher-Expression';
      default:
        return node.category;
    }
  }
  return 'Edge';
}

function convertToSimple2(node: Node | Edge): string {
  switch (node.category) {
    case 'R':
      return 'red nodes';
    case 'B':
      return 'blue nodes';
    case 'P':
      return 'purple nodes';
    default:
      if (node.category) return node.category;
      return 'Edge';
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
  getColor: setColor3,
  legendToggle: convertToSimple2,
  order: ['P', 'R', 'B'],
};
export const PilotDataWithCentered = Template.bind({});
PilotDataWithCentered.args = {
  data: data.data,
  title: 'cCRE Impact With Pilot Data With Centered cCRE',
  id: 'PilotWithCentered',
  getColor: setColor,
  legendToggle: convertToSimple,
  legendNodeLabel: 'cCRE Type',
  order: [
    'PLS',
    'pELS',
    'dELS',
    'CA-H3K4me3',
    'CA-CTCF',
    'CA-TF',
    'CA',
    'TF',
    'Low DNase',
  ],
};

export const FiftyPercent = Template.bind({});
FiftyPercent.args = {
  data: data.data,
  title: '50% Width and Height',
  id: '50Percent',
  width: '50%',
  height: '50%',
  getColor: setColor,
  legendToggle: convertToSimple,
  legendNodeLabel: 'cCRE Type',
};

export const PilotDataWithoutCentered = Template.bind({});
PilotDataWithoutCentered.args = {
  data: data3.data,
  title: 'cCRE Impact With Pilot Data Without Centered cCRE',
  id: 'PilotNoCentered',
  getColor: setColor,
  legendToggle: convertToSimple,
  legendNodeLabel: 'cCRE Type',
};

export const DifferentLabel = Template.bind({});
DifferentLabel.args = {
  data: data3.data,
  title: 'Different Label',
  id: 'diffLabel',
  getLabel: (node: Node) => node.category,
  getColor: setColor,
  legendToggle: convertToSimple,
  legendNodeLabel: 'Different Node Label',
  legendEdgeLabel: 'Different Edge Label',
};

export const DifferentColor = Template.bind({});
DifferentColor.args = {
  data: data3.data,
  title: 'Different Color',
  id: 'diffColor',
  getColor: setColor2,
  legendToggle: convertToSimple,
};

export const NoLegendToggle = Template.bind({});
NoLegendToggle.args = {
  data: data2.data,
  title: 'No Legend Toggle',
  id: 'noLegendToggle',
  scale: (n: number) => 10 * n,
  getColor: setColor3,
};

export const DifferentOrder = Template.bind({});
DifferentOrder.args = {
  data: data.data,
  title: 'Different Order',
  id: 'diffOrder',
  getColor: setColor,
  legendToggle: convertToSimple,
  legendNodeLabel: 'cCRE Type',
  order: [
    'Low DNase',
    'PLS',
    'dELS',
    'TF',
    'pELS',
    'CA-CTCF',
    'CA',
    'CA-H3K4me3',
    'CA-TF',
  ],
};
