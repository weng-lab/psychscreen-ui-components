import React, { useCallback, useEffect, useRef, useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import { CCRE_AUTOCOMPLETE_QUERY, GENE_AUTOCOMPLETE_QUERY, ICRE_AUTOCOMPLETE_QUERY, SNP_AUTOCOMPLETE_QUERY } from './queries';
import { ccreResultList, geneResultList, icreResultList, snpResultList, useCoordinates } from './utils';
import { Box, Button, TextField } from '@mui/material';
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
const GenomeSearch: React.FC<GenomeSearchProps> = props => {
    const searchAll = props.queries.includes("all")
    const searchGene = props.queries.includes("gene") || searchAll
    const searchSnp = props.queries.includes("snp") || searchAll
    const searchICRE = props.queries.includes("icre") || searchAll
    const searchCCRE = props.queries.includes("ccre") || searchAll
    const searchCoordinate = props.queries.includes("coordinate") || searchAll

    const [results, setResults] = useState<Result[]>();
    const [isResultSelected, setIsResultSelected] = useState(false);
    const [selection, setSelection] = useState<Result>({} as Result);

    const [fetchCoords, { data: coordsData }] = useCoordinates()
    const [fetchGenes, { data: geneData }] = useLazyQuery(gql(GENE_AUTOCOMPLETE_QUERY));
    const [fetchSnps, { data: snpData }] = useLazyQuery(gql(SNP_AUTOCOMPLETE_QUERY));
    const [fetchICREs, { data: icreData }] = useLazyQuery(gql(ICRE_AUTOCOMPLETE_QUERY));
    const [fetchCCREs, { data: ccreData }] = useLazyQuery(gql(CCRE_AUTOCOMPLETE_QUERY));

    const debounceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }
        debounceTimeout.current = setTimeout(() => {
            searchCoordinate && fetchCoords(
                input
            );
            searchGene && fetchGenes({
                // $name_prefix: [String], $assembly: String!, $orderby: String, $limit: Int
                variables: { name_prefix: [input], assembly: props.assembly, orderby: 'name', limit: 5 },
            });
            searchSnp && fetchSnps({
                // $snpid: String, $assembly: String!, $limit: Int
                variables: { snpid: input, assembly: props.assembly, limit: 3 },
            });
            searchICRE && fetchICREs({
                // $accession_prefix: [String!], $limit: Int
                variables: { accession_prefix: [input], limit: 3 },
            });
            searchCCRE && fetchCCREs({
                // $accession_prefix: [String!], $limit: Int, $assembly: String!
                variables: { accession_prefix: [input], limit: 3, assembly: props.assembly },
            });
            setResults([]);
            setSelection({} as Result);
        }, 300);
    };

    useEffect(() => {
        let combinedResults: Result[] = []
        if (searchGene && geneData) {
            combinedResults.push(...geneResultList(geneData.gene, props.geneLimit || 3))
        }
        if (searchSnp && snpData) {
            combinedResults.push(...snpResultList(snpData.snpAutocompleteQuery, props.snpLimit || 3))
        }
        if (searchICRE && icreData) {
            combinedResults.push(...icreResultList(icreData.iCREQuery, props.icreLimit || 3))
        }
        if (searchCCRE && ccreData) {
            combinedResults.push(...ccreResultList(ccreData.cCREQuery, props.ccreLimit || 3))
        }
        if (searchCoordinate && coordsData) {
            combinedResults.push(...coordsData)
        }
        setResults(combinedResults)
    }, [geneData, snpData, coordsData, icreData, ccreData]);

    const onSubmit = useCallback((value: Result) => {
        props.onSearchSubmit && props.onSearchSubmit(value);
    }, [props.onSearchSubmit])

    return (
        <Box display="flex" flexDirection="row" gap={2} style={{ ...props.style }} sx={props.sx}>
            <Autocomplete
                options={results || []}
                getOptionLabel={(option: Result) => {
                    return option.title || '';
                }}
                groupBy={(option: Result) => option.type || ''}
                renderOption={(props, option: Result) => {
                    return (
                        <li {...props} key={option.description}>
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
                renderInput={(params) => {
                    if (props.slots && props.slots.input) {
                        return React.cloneElement(props.slots.input as React.ReactElement, {
                            ...params,
                            onChange: handleInputChange,
                            value: selection?.title,
                        })
                    }
                    return (
                        <TextField
                            {...params}
                            label="Search"
                            onChange={handleInputChange}
                            value={selection?.title}
                            sx={{ color: isResultSelected ? 'green' : 'gray' }}
                            {...props.slotProps?.input}
                        />
                    )
                }}
                {...props}
            />
            {props.slots && props.slots.button ? React.cloneElement(props.slots.button as React.ReactElement, {
                onClick: () => onSubmit(selection),
            }) : <Button variant="contained" onClick={() => onSubmit(selection)} {...props.slotProps?.button}>{props.slotProps?.button?.children || "Go"}</Button>}
        </Box>
    );
};

export default GenomeSearch;