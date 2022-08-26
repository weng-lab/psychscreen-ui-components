import { MenuItem } from '@mui/material';
import React, { useState } from 'react';
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
};

const SearchBoxWithSelect: React.FC<SearchBoxWithSelectProps> = props => {
    const [ option, setOption ] = useState(props.selectOptions[0]);
    return (
        <>
            <Select
                onChange={e => {
                    setOption(props.selectOptions[e.target.value as number]);
                    props.onSelectChange && props.onSelectChange(props.selectOptions[e.target.value as number]);
                }}
                defaultValue={0}
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
            <SearchBox
                onChange={e => props.onSearchChange && props.onSearchChange(e.target.value)}
                helperText={option.helperText}
                {...props}
            />
        </>
    );
};
export default SearchBoxWithSelect;
