import React, { useMemo, useState } from 'react';
import { MenuItem } from '@mui/material';

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
                variant="filled"
                disableUnderline
                style={{
                    borderTopLeftRadius: "100px",
                    borderBottomLeftRadius: "100px",
                    borderTopRightRadius: belowThreshold ? "100px" : "0px",
                    borderBottomRightRadius: belowThreshold ? "100px" : "0px",
                    backgroundColor: "#F2F2F2",
                    paddingTop: "11px",
                    fontSize: "16px",
                    marginBottom: "16px",
                    width: belowThreshold ? `${props.reactiveWidth}px` : undefined,
                    textAlign: "center"
                }}
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
            { belowThreshold ? <br style={{ lineHeight: "16px" }} /> : null }
            <SearchBox
                onChange={e => props.onSearchChange && props.onSearchChange(e.target.value)}
                helperText={option.helperText}
                width={belowThreshold ? props.reactiveWidth : undefined}
                style={{ borderTopLeftRadius: belowThreshold ? "100px" : "0px", borderBottomLeftRadius: belowThreshold ? "100px" : "0px" }}
                unadorned={!!belowThreshold}
                {...props}
            />
        </>
    );
};
export default SearchBoxWithSelect;
