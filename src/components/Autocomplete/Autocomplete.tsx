import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Result, SearchBoxProps } from './types';
import { gql, useLazyQuery } from '@apollo/client';
import { GENE_AUTOCOMPLETE_QUERY, SNP_AUTOCOMPLETE_QUERY } from './queries';
import { geneResultList, snpResultList } from './utils';
import { TextField } from '@mui/material';
import { Autocomplete } from '@mui/material';

const SearchBox: React.FC<SearchBoxProps> = props => {
    const [results, setResults] = useState<Result[]>();
    const [isResultSelected, setIsResultSelected] = useState(false);
    const [selection, setSelection] = useState<Result | null>(null);

    const [fetchGenes, { data: geneData }] = useLazyQuery(gql(GENE_AUTOCOMPLETE_QUERY));
    const [fetchSnps, { data: snpData }] = useLazyQuery(gql(SNP_AUTOCOMPLETE_QUERY));

    const debounceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }
        debounceTimeout.current = setTimeout(() => {
            fetchGenes({
                variables: { name_prefix: [input], assembly: props.assembly, orderby: 'name', limit: 5 },
            });
            fetchSnps({
                variables: { snpid: input, assembly: props.assembly, limit: 3 },
            });
            setResults([]);
            setSelection(null);
        }, 300);
    };

    useEffect(() => {
        if (geneData && snpData) {
            setResults([
                ...geneResultList(geneData.gene),
                ...snpResultList(snpData.snpAutocompleteQuery)
            ]);
        }
    }, [geneData, snpData]);

    const onSubmit = useCallback((value: Result) => { console.log(value) }, [])

    return (
        <>
            <Autocomplete
                options={results || []}
                getOptionLabel={(option: Result) => {
                    return option.title || '';
                }}
                groupBy={(option: Result) => option.type || ''}
                renderOption={(props, option: Result) => {
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
                onChange={(_event, value) => {
                    if (value) {
                        setIsResultSelected(true);
                        setSelection(value);
                    }
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search"
                        onChange={handleInputChange}
                        value={selection?.title}
                        sx={{
                            '& .MuiInputBase-input': {
                                color: isResultSelected ? 'green' : 'gray',
                            }
                        }}
                    />
                )}
                style={{ width: 300 }}
            />
        </>
    );
};

export default SearchBox;
{/* <Autocomplete
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
            /> */}
// const [isResultSelected, setIsResultSelected] = useState(false);

// const onSubmit = useCallback((value: Result) => {
//     let domainString = ""
//     switch (value.type) {
//         case 'gene':
//             domainString = value.description.split('\n')[1]
//             break
//         case 'snp':
//             domainString = value.description
//             break
//         case 'coordinate':
//             domainString = value.title || ""
//             break
//     }
//     const chromosome = domainString.split(':')[0]
//     let start = parseInt(domainString.split(':')[1].split('-')[0])
//     let end = parseInt(domainString.split(':')[1].split('-')[1])

//     // add padding to the resulting domain if the result is a SNP or gene
//     if (value.type === 'snp' || value.type === 'gene') {
//         const center = Math.floor((start + end) / 2)
//         const halfWindow = 2500
//         start = center - halfWindow
//         end = center + halfWindow
//     }

//     props.onSearchSubmit && props.onSearchSubmit({ chromosome, start, end });
// }, [props.onSearchSubmit])