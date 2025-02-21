import { Autocomplete, TextField } from '@mui/material';
import React, { useState, useCallback } from 'react';
import { Result, SearchBoxProps } from './types';
import { useAutoComplete } from './utils';

const SearchBox: React.FC<SearchBoxProps> = props => {
    const { fetch } = useAutoComplete(props.assembly);
    const [results, setResults] = useState<Result[]>();
    const [isResultSelected, setIsResultSelected] = useState(false);

    const onSubmit = useCallback((value: Result) => {
        let domainString = ""
        switch (value.type) {
            case 'gene':
                domainString = value.description.split('\n')[1]
                break
            case 'snp':
                domainString = value.description
                break
            case 'coordinate':
                domainString = value.title || ""
                break
        }
        const chromosome = domainString.split(':')[0]
        let start = parseInt(domainString.split(':')[1].split('-')[0])
        let end = parseInt(domainString.split(':')[1].split('-')[1])

        // add padding to the resulting domain if the result is a SNP or gene
        if (value.type === 'snp' || value.type === 'gene') {
            const center = Math.floor((start + end) / 2)
            const halfWindow = 2500
            start = center - halfWindow
            end = center + halfWindow
        }

        props.onSearchSubmit && props.onSearchSubmit({ chromosome, start, end });
    }, [props.onSearchSubmit])

    const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setResults([]);
        const results = await fetch(value);
        setResults(results);
    };

    return (
        <Autocomplete
            options={results || []}
            getOptionLabel={(option: Result) => {
                console.log('Option label:', option.title);
                return option.title || '';
            }}
            groupBy={(option: Result) => option.type || ''}
            renderOption={(props, option: Result) => {
                console.log('Rendering option:', option);
                return (
                    <li {...props} key={option.title}>
                        <div>
                            <strong>{option.title}</strong>
                            <br />
                            <span>{option.description}</span>
                        </div>
                    </li>
                );
            }}
            filterOptions={(options) => options}
            onChange={(_event, value) => {
                console.log('Selected value:', value);
                if (value) {
                    setIsResultSelected(true);
                    onSubmit(value);
                }
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search"
                    onChange={handleInputChange}
                    sx={{
                        '& .MuiInputBase-input': {
                            color: isResultSelected ? 'green' : 'gray',
                        }
                    }}
                />
            )}
            style={{ width: 300 }}
        />
    );
};

export default SearchBox;