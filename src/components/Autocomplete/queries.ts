export const SNP_AUTOCOMPLETE_QUERY = `
    query suggestions($assembly: String!, $snpid: String!) { 
        snpAutocompleteQuery(assembly: $assembly, snpid: $snpid) {
            id
            coordinates {
                chromosome
                start
                end
            }
        }
    }`;

export const GENE_AUTOCOMPLETE_QUERY = `
    query Genes(
        $id: [String]
        $name: [String]
        $strand: String
        $chromosome: String
        $start: Int
        $end: Int
        $gene_type: String
        $havana_id: String
        $name_prefix: [String!]
        $limit: Int
        $assembly: String!
    ) {
        gene(
            id: $id
            name: $name
            strand: $strand
            chromosome: $chromosome
            start: $start
            end: $end
            gene_type: $gene_type
            havana_id: $havana_id
            name_prefix: $name_prefix
            limit: $limit
            assembly: $assembly
        ) {
            id
            name
            coordinates {
                chromosome
                start
                end
            }
        }
    }
`;

export const RESOLVE_QUERY = `
    query q(
        $id: String!
        $assembly: String!
    ) {
        resolve(
            id: $id
            assembly: $assembly
        ) {
            coordinates {
                chromosome
                start
                end
            }
        }
    }`;

export const ICRE_AUTOCOMPLETE_QUERY = `
    query iCREQuery($accession_prefix: [String!], $limit: Int) {
        iCREQuery(accession_prefix: $accession_prefix, limit: $limit) {
            rdhs
            accession
            celltypes
            coordinates {
                start
                end
                chromosome
            }
        }
    }
`;


export const CCRE_AUTOCOMPLETE_QUERY = `
    query cCREQuery($accession_prefix: [String!], $limit: Int, $assembly: String!) {
        cCREQuery(accession_prefix: $accession_prefix, assembly: $assembly, limit: $limit) {
            accession
            coordinates {
                start
                end
                chromosome
            }
        }
    }
`


