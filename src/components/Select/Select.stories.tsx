import { Meta, StoryObj } from '@storybook/react';
import { Select } from '../..';
import "../../App.css";
import { MenuItem } from '@mui/material';

const meta = {
  title: 'Select', 
  component: Select,
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <Select variant="standard" defaultValue="disease/trait">
      <MenuItem value="disease/trait">Disease/Trait</MenuItem>
      <MenuItem value="gene/bcre">Gene/b-cCRE</MenuItem>
      <MenuItem value="snp/qtl">SNP/QTL</MenuItem>
      <MenuItem value="single-cell">Single Cell</MenuItem>
    </Select>
  )
}
