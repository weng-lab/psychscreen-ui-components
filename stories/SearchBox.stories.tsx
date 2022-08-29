import React, { useState, useEffect } from 'react';
import { Meta, Story } from '@storybook/react';
import { SearchBox, SearchBoxProps } from '../src';
import "../src/App.css";
import { SearchBoxWithSelect } from '../src/components/SearchBox';
import { Grid } from '@mui/material';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
      width,
      height
  };
}

function useViewportSize() {
  const [ windowDimensions, setWindowDimensions ] = useState(getWindowDimensions());
  useEffect(() => {
      const handleResize = () => { setWindowDimensions(getWindowDimensions()); };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowDimensions;
}

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

const Template: Story<SearchBoxProps & { withSelect?: boolean }> = args => {
  const { width } = useViewportSize();
  return args.withSelect ? (
    <>
      <Grid container>
        <Grid item sm={6}>
          <strong>Non-Reactive</strong><br />
          <SearchBoxWithSelect
            selectOptions={SELECT_OPTIONS}
            label="What can we help you find?"
            variant="standard"
            {...args}
          />
        </Grid>
        <Grid item sm={6}>
          <strong>Reactive (at width &lt;800px; current width is {width / 2})</strong><br />
          <SearchBoxWithSelect
            selectOptions={SELECT_OPTIONS}
            label="What can we help you find?"
            variant="standard"
            reactiveThreshold={700}
            reactiveWidth={305}
            containerWidth={width / 2}
            {...args}
          />
        </Grid>
      </Grid>
    </>
  ) : (
      <SearchBox label="What can we help you find?" variant="standard" {...args} />
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
export const WithSelect = Template.bind({});

Default.args = {};
WithSelect.args = { withSelect: true };
