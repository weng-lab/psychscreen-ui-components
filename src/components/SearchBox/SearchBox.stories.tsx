import { useState, useEffect } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SearchBox } from '../..';
import "../../App.css";
import { SearchBoxWithSelect } from '.';
import Grid from '@mui/material/Grid2';

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

const onSearch = () =>{
  console.log('on search ')
}

const SELECT_OPTIONS = [
  { name: "Disease/Trait", value: "disease", helperText: "e.g. schizophrenia, years of education" },
  { name: "Gene/b-cCRE", value: "gene", helperText: "e.g. APOE, PPIF1" },
  { name: "SNP/QTL", value: "SNP", helperText: "e.g. rs2836883, rs7690700" }
]

const meta = {
  title: 'SearchBox', 
  component: SearchBox,
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
} satisfies Meta<typeof SearchBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {onSearchButtonClick: onSearch},
}

/**
 * This is not good practice, since SearchBoxWithSelect is a separate component
 * it needs it's own meta defined to properly type args (only one meta can be defined and exported per file).
 * Without overriding with render(), SearchBox would be rendered
 */
export const WithSelect: Story = {
  args: {},
  render: (args) => {
    const { width } = useViewportSize();
    return (
      <Grid container>
        <Grid size={6}>
          <strong>Non-Reactive</strong><br />
          <SearchBoxWithSelect
            selectOptions={SELECT_OPTIONS}
            label="What can we help you find?"
            variant="standard"
            {...args}
          />
        </Grid>
        <Grid size={6}>
          <strong>Reactive (at width &lt;800px; current width is {width / 2})</strong><br />
          <SearchBoxWithSelect
            selectOptions={SELECT_OPTIONS}
            label="What can we help you find?"
            variant="standard"
            reactiveThreshold={800}
            reactiveWidth={305}
            containerWidth={width / 2}
            {...args}
          />
        </Grid>
      </Grid>
    )
  }
}
