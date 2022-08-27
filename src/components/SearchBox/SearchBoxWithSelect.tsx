import { MenuItem } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { Select } from '../Select';
import SearchBox, { SearchBoxProps } from './SearchBox';

export type SearchBoxWithSelectOption = {
    value: string;
    name: string;
    helperText: string;
}

export type SearchBoxWithSelectProps = SearchBoxProps & {
    selectOptions: SearchBoxWithSelectOption[];
    onSelectChange?: (option: SearchBoxWithSelectOption) => void;
    onSearchChange?: (value: string) => void;
    reactiveThreshold?: number;
    reactiveWidth?: number;
    containerWidth?: number;
};

const SearchBoxWithSelect: React.FC<SearchBoxWithSelectProps> = props => {
    const [ option, setOption ] = useState(props.selectOptions[0]);
    const belowThreshold = useMemo( () => (
        props.reactiveThreshold && (props.containerWidth || 0) < props.reactiveThreshold
    ), [ props.reactiveThreshold, props.containerWidth ]);
    return (
        <>
            <Select
                onChange={e => {
                    setOption(props.selectOptions[e.target.value as number]);
                    props.onSelectChange && props.onSelectChange(props.selectOptions[e.target.value as number]);
                }}
                defaultValue={0}
                width={belowThreshold ? props.reactiveWidth : undefined}
            >
                { props.selectOptions.map((option, i) => (
                    <MenuItem
                        key={option.value}
                        value={i}
                    >
                        {option.name}
                    </MenuItem>
                ))}
            </Select>
            { belowThreshold ? <br /> : null }
            <SearchBox
                onChange={e => props.onSearchChange && props.onSearchChange(e.target.value)}
                helperText={option.helperText}
                width={belowThreshold ? props.reactiveWidth : undefined}
                {...props}
            />
        </>
    );
};
export default SearchBoxWithSelect;
