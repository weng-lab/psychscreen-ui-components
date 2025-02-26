import React, { useCallback, useEffect, useRef, useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import { CCRE_AUTOCOMPLETE_QUERY, GENE_AUTOCOMPLETE_QUERY, ICRE_AUTOCOMPLETE_QUERY, SNP_AUTOCOMPLETE_QUERY } from './queries';
import { ccreResultList, geneResultList, icreResultList, snpResultList, useCoordinates } from './utils';
import { AutocompleteProps, Box, Button, TextField, Typography } from '@mui/material';
import { Autocomplete } from '@mui/material';
import { GenomeSearchProps, Result } from './types';

/**
 * An autocomplete search component for genomic landmarks such as genes, SNPs, ICRs, and CCRs. 
 * The props extends the MUI Autocomplete props, so you are able to adjust that component's props as well.
 * You can also use the slots and slotProps to customize the search's internal components, such as the input, button and the bounding box.
 * To use, pass in a list of the queries you want to run, and the assembly i.e. GRCh38 or mm10. 
 * You must also provide a function to call when a result is selected, which will run when the user clicks the button.
 * @param props - extends MUI AutocompleteProps and includes additional props specific to this component
 */

const GenomeSearch: React.FC<GenomeSearchProps> = ({
    queries, assembly, geneLimit, snpLimit, icreLimit, ccreLimit,
    onSearchSubmit, defaultResults, style, sx, slots, slotProps,
    ...autocompleteProps
}) => {
    // Boolean flags for each query
    const searchAll = queries.includes("all")
    const searchGene = queries.includes("gene") || searchAll
    const searchSnp = queries.includes("snp") || searchAll
    const searchICRE = queries.includes("icre") || searchAll
    const searchCCRE = queries.includes("ccre") || searchAll
    const searchCoordinate = queries.includes("coordinate") || searchAll

    // State variables
    const [inputValue, setInputValue] = useState('');
    const [selection, setSelection] = useState<Result>({} as Result);
    const [results, setResults] = useState<Result[]>(defaultResults || []);

    // GraphQL queries
    const [fetchCoords, { data: coordsData }] = useCoordinates()
    const [fetchGenes, { data: geneData, loading: geneLoading }] = useLazyQuery(gql(GENE_AUTOCOMPLETE_QUERY));
    const [fetchSnps, { data: snpData, loading: snpLoading }] = useLazyQuery(gql(SNP_AUTOCOMPLETE_QUERY));
    const [fetchICREs, { data: icreData, loading: icreLoading }] = useLazyQuery(gql(ICRE_AUTOCOMPLETE_QUERY));
    const [fetchCCREs, { data: ccreData, loading: ccreLoading }] = useLazyQuery(gql(CCRE_AUTOCOMPLETE_QUERY));
    const isLoading = geneLoading || snpLoading || icreLoading || ccreLoading

    // Debounce timeout
    const debounceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Handle input change
    const handleInputChange = (_event: any, newInputValue: string) => {
        setInputValue(newInputValue);
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }
        debounceTimeout.current = setTimeout(() => {
            setResults([]);
            setSelection({} as Result);
            if (newInputValue.startsWith('chr')) {
                searchCoordinate && fetchCoords(
                    newInputValue, assembly
                );
            } else {
                searchGene && fetchGenes({
                    variables: { name_prefix: [newInputValue], assembly: assembly, limit: geneLimit || 5 },
                });
                searchSnp && fetchSnps({
                    variables: { snpid: newInputValue, assembly: assembly, limit: snpLimit || 3 },
                });
                searchICRE && fetchICREs({
                    variables: { accession_prefix: [newInputValue], limit: icreLimit || 3 },
                });
                searchCCRE && fetchCCREs({
                    variables: { accession_prefix: [newInputValue], assembly: assembly, limit: ccreLimit || 3 },
                });
            }
        }, 300);
    };

    // Effect to set results
    useEffect(() => {
        if (isLoading) { return }

        const temp = [
            ...geneData ? geneResultList(geneData.gene, geneLimit || 5) : [],
            ...snpData ? snpResultList(snpData.snpAutocompleteQuery, snpLimit || 3) : [],
            ...icreData ? icreResultList(icreData.iCREQuery, icreLimit || 3) : [],
            ...ccreData ? ccreResultList(ccreData.cCREQuery, ccreLimit || 3) : [],
            ...coordsData ? coordsData : [],
        ]
        setResults(temp)
    }, [geneData, snpData, coordsData, icreData, ccreData, isLoading]);

    // Handle submit
    const onSubmit = useCallback((r: Result) => {
        onSearchSubmit && onSearchSubmit(r);
    }, [onSearchSubmit])

    // Handle enter key down
    const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && results && results.length === 1) {
            setSelection(results[0]);
            onSubmit(results[0]);
        }
    }, [results, onSubmit]);

    // Update onChange handler
    const onChange = (_event: any, newValue: Result | null) => {
        console.log(newValue)
        if (newValue) {
            setSelection(newValue);
        } else {
            setSelection({} as Result);
        }
    };

    return (
        <Box display="flex" flexDirection="row" gap={2} style={{ ...style }} sx={sx} {...slotProps?.box}>
            <Autocomplete
                onChange={onChange}
                inputValue={inputValue}
                onInputChange={handleInputChange}
                options={results}
                getOptionLabel={(option: Result) => {
                    return option.title || '';
                }}
                groupBy={(option: Result) => option.type || ''}
                noOptionsText={
                    <Typography variant="caption">
                        {inputValue ? isLoading ? "Loading..." : "" :
                            "Start typing for options"}
                    </Typography>
                }
                renderOption={(props, option: Result) => {
                    return (
                        <li {...props} key={`${option.type}-${option.title || 'untitled'}-${option.description || 'no-desc'}`}>
                            <Box>
                                <Typography variant="body1" component="div" fontWeight="bold">
                                    {option.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{ whiteSpace: 'pre-line' }}>
                                    {option.description}
                                </Typography>
                            </Box>
                        </li>
                    );
                }}
                // filterOptions={(x) => x}
                renderInput={(params) => {
                    if (slots && slots.input) {
                        return React.cloneElement(slots.input as React.ReactElement, {
                            ...params,
                            onKeyDown: handleKeyDown,
                        })
                    }
                    return (
                        <TextField
                            {...params}
                            label="Search"
                            onKeyDown={handleKeyDown}
                            {...slotProps?.input}
                        />
                    )
                }}
                style={style}
                sx={sx}
                {...autocompleteProps as Partial<AutocompleteProps<Result, false, true, false, React.ElementType>>}
            />
            {slots && slots.button ? React.cloneElement(slots.button as React.ReactElement, {
                onClick: () => onSubmit(selection),
            }) : <Button variant="contained" onClick={() => onSubmit(selection)} {...slotProps?.button}>{slotProps?.button?.children || "Go"}</Button>}
        </Box>
    );
};

export default GenomeSearch;