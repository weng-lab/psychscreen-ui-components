import React from 'react';
import { Meta, Story } from '@storybook/react';
import { SearchBox, SearchBoxProps } from '../src';
import "../src/App.css";
import { SearchBoxWithSelect } from '../src/components/SearchBox';

const meta: Meta = {
  title: 'SearchBox', 
  component: SearchBox,
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

const SELECT_OPTIONS = [
  { name: "Disease/Trait", value: "disease", helperText: "e.g. schizophrenia, years of education" },
  { name: "Gene/bCRE", value: "gene", helperText: "e.g. APOE, PPIF1" },
  { name: "SNP/QTL", value: "SNP", helperText: "e.g. rs2836883, rs7690700" }
]

const Template: Story<SearchBoxProps & { withSelect?: boolean }> = args => args.withSelect ? (
  <SearchBoxWithSelect
    selectOptions={SELECT_OPTIONS}
    label="What can we help you find?"
    variant="standard"
    {...args}
  />
) : (
    <SearchBox label="What can we help you find?" variant="standard" {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
export const WithSelect = Template.bind({});

Default.args = {};
WithSelect.args = { withSelect: true };
