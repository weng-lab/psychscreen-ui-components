import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

function Fetch() {
  const [input, setInput] = useState("");

  const {data: icreData, isLoading: icreLoading, refetch: refetchICREs} = useQuery({
    queryKey: ["icres"],
    queryFn: () => getICREs(input),
    enabled: false,
  })

  useEffect(()=>{
    const fetchIcre = true;
    if(input.length > 0){
      if (fetchIcre) refetchICREs();
    }
  }, [input])

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {setInput(e.target.value)}}
      />
      <div style={{backgroundColor: "darkgray", padding: "5px", borderRadius: "5px"}}>
        iCREs 
        {icreData.data.iCREQuery.map((icre: any) => (
          <div key={icre.accession} style={{backgroundColor: "lightgray", padding: "5px", borderRadius: "5px"}}>{icre.accession}</div>
        ))}
      </div>
      {/* <div style={{backgroundColor: "darkgray", padding: "5px", borderRadius: "5px"}}>
        Genes
        {genes.map((gene: any) => (
          <div key={gene.id} style={{backgroundColor: "lightgray", padding: "5px", borderRadius: "5px"}}>{gene.name}</div>
        ))}
      </div>
      <div style={{backgroundColor: "darkgray", padding: "5px", borderRadius: "5px"}} >
        SNPs
        {snps.map((snp: any) => (
          <div key={snp.id} style={{backgroundColor: "lightgray", padding: "5px", borderRadius: "5px"}}>{snp.id}</div>
        ))}
      </div> */}
    </div>
  );
}

export default Fetch;

const CCRE_AUTOCOMPLETE_QUERY = `
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

const GENE_AUTOCOMPLETE_QUERY = `
query ($assembly: String!, $name_prefix: [String!], $limit: Int, $version: Int) {
    gene(assembly: $assembly, name_prefix: $name_prefix, limit: $limit, version: $version) {
      name
      id
      coordinates {
        start
        chromosome
        end
      }
    }
  }  
 `;

const SNP_AUTOCOMPLETE_QUERY = `
query snpAutocompleteQuery($snpid: String!, $assembly: String!) {
    snpAutocompleteQuery(snpid: $snpid, assembly: $assembly) {
        id
        coordinates {
            chromosome
            start
            end
        }
    }
}
`;

const getICREs = async (value: string) => {
  const response = await fetch("https://screen.api.wenglab.org/graphql", {
    method: "POST",
    body: JSON.stringify({
      query: CCRE_AUTOCOMPLETE_QUERY,
      variables: {
        accession_prefix: [value],
        limit: 3,
      },
    }),
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};

const getGenes = async (
  value: string,
  assembly: string,
) => {
  const response = await fetch("https://screen.api.wenglab.org/graphql", {
    method: "POST",
    body: JSON.stringify({
      query: GENE_AUTOCOMPLETE_QUERY,
      variables: {
        assembly: assembly.toLowerCase(),
        name_prefix: value,
        version: assembly.toLowerCase() === "grch38" ? 29 : 25,
        limit: 3,
      },
    }),
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};

const getSNPs = async (value: string, assembly: string) => {
  const response = await fetch("https://screen.api.wenglab.org/graphql", {
    method: "POST",
    body: JSON.stringify({
      query: SNP_AUTOCOMPLETE_QUERY,
      variables: {
        assembly: assembly.toLowerCase(),
      snpid: value,
    },
    }),
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};
