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
  }
`;

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
          orderby: "name"
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
  }
`;

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
  query cCREAutocompleteQuery(
    $accession_prefix: [String!]
    $assembly: String!
    $includeiCREs: Boolean
    $limit: Int
  ) {
    cCREAutocompleteQuery(
      includeiCREs: $includeiCREs
      assembly: $assembly
      limit: $limit
      accession_prefix: $accession_prefix
    ) {    
      accession
      isiCRE
      coordinates {
        chromosome
        start
        end
      }
    }
  }
`;

export const getICREs = async (value: string, limit: number) => {
  const response = await fetch("https://screen.api.wenglab.org/graphql", {
    method: "POST",
    body: JSON.stringify({
      query: ICRE_AUTOCOMPLETE_QUERY,
      variables: {
        accession_prefix: [value],
        limit: limit,
      },
    }),
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};

export const getCCREs = async (
  value: string,
  assembly: string,
  limit: number,
  showiCREFlag: boolean
) => {
  const response = await fetch("https://screen.api.wenglab.org/graphql", {
    method: "POST",
    body: JSON.stringify({
      query: CCRE_AUTOCOMPLETE_QUERY,
      variables: {
        accession_prefix: [value],
        assembly: assembly.toLowerCase(),
        limit: limit,
        includeiCREs: showiCREFlag
      },
    }),
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};

export const getGenes = async (
  value: string,
  assembly: string,
  limit: number
) => {
  const response = await fetch("https://screen.api.wenglab.org/graphql", {
    method: "POST",
    body: JSON.stringify({
      query: GENE_AUTOCOMPLETE_QUERY,
      variables: {
        assembly: assembly.toLowerCase(),
        name_prefix: value,
        version: assembly.toLowerCase() === "grch38" ? 29 : 25,
        limit: limit,
      },
    }),
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};

export const getSNPs = async (
  value: string,
  assembly: string,
  limit: number
) => {
  const response = await fetch("https://screen.api.wenglab.org/graphql", {
    method: "POST",
    body: JSON.stringify({
      query: SNP_AUTOCOMPLETE_QUERY,
      variables: {
        assembly: assembly.toLowerCase(),
        snpid: value,
        limit: limit,
      },
    }),
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};
