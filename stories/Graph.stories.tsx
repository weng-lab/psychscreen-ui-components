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
  title: 'Components/Graph',
  component: Graph,
};
export default meta;

const Template: Story<GraphProps> = (args) => <Graph {...args} />;

const convertNodeData = (data: {
  data: {
    node: Array<{ id: string; category: string }>;
    edge: Array<{
      perturbed: string;
      target: string;
      effectSize: number;
      expressionImpact?: string;
    }>;
    centered?: { id: string };
  };
}): { nodes: Node[]; edges: Edge[]; centered?: { id: string } } => {
  // Convert nodes to required format
  const nodes = data.data.node.map((node) => ({
    id: node.id,
    info: { category: node.category },
  }));

  // Convert edges to required format
  const edges = data.data.edge.map((edge) => ({
    from: edge.perturbed, // Map 'perturbed' to 'from'
    to: edge.target, // Map 'target' to 'to'
    effectSize: edge.effectSize,
    ...(edge.expressionImpact && { expressionImpact: edge.expressionImpact }), // Only include expressionImpact if it exists
  }));

  // Create the result object
  const result: { nodes: Node[]; edges: Edge[]; centered?: { id: string } } = {
    nodes,
    edges,
  };

  // Include centered if it exists
  if (data.data.centered) {
    result.centered = data.data.centered;
  }

  return result;
};

export const SampleGraph = Template.bind({});
SampleGraph.args = {
  data: data2.data,
  title: 'Sample Graph With No Centered cCRE',
  id: 1,
  scale: (n: number) => 10 * n,
};
export const PilotDataWithCentered = Template.bind({});
PilotDataWithCentered.args = {
  data: data.data,
  title: 'cCRE Impact With Pilot Data With Centered cCRE',
  id: 'hello',
};

export const FiftyPercent = Template.bind({});
FiftyPercent.args = {
  data: convertNodeData(data),
  title: '50% Width and Height',
  id: 2,
  width: '50%',
  height: '50%',
};

export const PilotDataWithoutCentered = Template.bind({});
PilotDataWithoutCentered.args = {
  data: data3.data,
  title: 'cCRE Impact With Pilot Data Without Centered cCRE',
  id: 'hi',
};
