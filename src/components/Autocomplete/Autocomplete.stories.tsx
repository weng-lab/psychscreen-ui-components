import { Meta, StoryObj } from '@storybook/react';
import GenomeSearch from './Autocomplete';
import { Result } from './types';
import { Button, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const meta = {
    title: 'Autocomplete',
    component: GenomeSearch,
    tags: ['autodocs'],
} satisfies Meta<typeof GenomeSearch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        assembly: 'GRCh38',
        onSearchSubmit: (r: Result) => console.log('Going to', r),
        queries: ["Gene", "SNP", "iCRE", "cCRE", "Coordinate"],
        ccreLimit: 3,
        geneLimit: 3,
        icreLimit: 3,
        snpLimit: 3,
        style: {},
        sx: { width: 300 },
        slots: {},
        slotProps: {},
    }
}
export const InputSlot: Story = {
    args: {
        assembly: 'GRCh38',
        onSearchSubmit: (r: Result) => console.log('Going to', r.title),
        queries: ["Gene", "SNP", "iCRE", "cCRE", "Coordinate"],
        ccreLimit: 3,
        geneLimit: 3,
        icreLimit: 3,
        snpLimit: 3,
        style: {},
        sx: { width: 300 },
        slots: { input: <TextField label="Search" variant="standard" color="secondary" /> },
    },
};

export const ButtonSlotProps: Story = {
    args: {
        assembly: 'GRCh38',
        onSearchSubmit: (r: Result) => console.log('Going to', r.title),
        queries: ["Gene", "SNP", "iCRE", "cCRE", "Coordinate"],
        ccreLimit: 3,
        geneLimit: 3,
        icreLimit: 3,
        snpLimit: 3,
        style: {},
        sx: { width: 400 },
        slots: {},
        slotProps: {
            button: { variant: 'contained', startIcon: <SearchIcon />, color: 'secondary', children: "Search", sx: { paddingInline: 3 } },
        },
    },
};

export const ButtonAndInputSlot: Story = {
    args: {
        assembly: 'GRCh38',
        onSearchSubmit: (r: Result) => console.log('Going to', r.title),
        queries: ["Gene", "SNP", "iCRE", "cCRE", "Coordinate"],
        ccreLimit: 3,
        geneLimit: 3,
        icreLimit: 3,
        snpLimit: 3,
        style: {},
        sx: { width: 400 },
        slots: {
            button: <Button variant="contained" color="secondary" startIcon={<SearchIcon />} sx={{ paddingInline: 3 }}>Search</Button>,
            input: <TextField label="Search" variant="standard" color="secondary" />
        },
        slotProps: {}
    },
};

