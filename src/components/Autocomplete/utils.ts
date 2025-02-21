import { gql, useLazyQuery } from "@apollo/client";
import { GENE_AUTOCOMPLETE_QUERY, SNP_AUTOCOMPLETE_QUERY } from "./queries";
import { Result } from "./types";

/**
 * Filters for unique search results, as non-unique results cause undefined
 * behavior in the semantic UI search component.
 *
 * @param results the list of results, each with a title field which distinguishes unique results.
 */
export const uniq = (results: Result[], d: string): Result[] => {
    let r: Result[] = [];
    results.forEach((result: Result) => {
        let found = false;
        r.forEach(rr => {
            if (rr.title === result.title) found = true;
        });
        if (!found) r.push(result);
    });

    return r.length ? r : [{ title: d, description: '' }];
};

interface SnpResult {
    id: string;
    coordinates: {
        chromosome: string;
        start: number;
        end: number;
    }
}

interface GeneResult {
    id: string;
    name: string;
    coordinates: {
        chromosome: string;
        start: number;
        end: number;
    }
}

export function useAutoComplete(assembly: string) {
    const [geneFetch, { data: geneData }] = useLazyQuery(gql(GENE_AUTOCOMPLETE_QUERY));
    const [snpFetch, { data: snpData }] = useLazyQuery(gql(SNP_AUTOCOMPLETE_QUERY));

    const fetch = async (input: string): Promise<Result[]> => {
        console.log("fetching for input", input);

        const genePromise = new Promise<void>((resolve) => {
            geneFetch({
                variables: { name_prefix: [input], assembly: assembly, orderby: 'name', limit: 5 },
                onCompleted: () => resolve(),
            });
        });

        let snpPromise = Promise.resolve();
        if (input.toLowerCase().startsWith('rs')) {
            snpPromise = new Promise<void>((resolve) => {
                snpFetch({
                    variables: { snpid: input, assembly: assembly === "GRCh38" ? "hg38" : assembly, limit: 3 },
                    onCompleted: () => resolve(),
                });
            });
        }

        await Promise.all([genePromise, snpPromise]);

        const geneResults = geneResultList(geneData?.gene || []);
        const snpResults = input.toLowerCase().startsWith('rs') ? snpResultList(snpData?.snpAutocompleteQuery || []) : [];

        return [...geneResults, ...snpResults];
    };

    return { fetch };
}

function snpResultList(results: SnpResult[]) {
    let rs: Result[] = [];
    results.forEach((result: SnpResult) => {
        rs.push({
            title: result.id,
            description: `${result.coordinates.chromosome}:${result.coordinates.start}-${result.coordinates.end}`,
            type: 'snp'
        });
    });
    return rs;
}

function geneResultList(results: GeneResult[]) {
    let rs: Result[] = [];
    results.forEach((result: GeneResult) => {
        rs.push({
            title: result.name,
            description: `${result.id}\n${result.coordinates.chromosome}:${result.coordinates.start}-${result.coordinates.end}`,
            type: 'gene'
        });
    });
    return rs;
}
// async (_event: React.SyntheticEvent, { value }: { value: string }) => {
//     const val: string = value.toLowerCase();
//     let rs: Result[] = [];
//     if (val.startsWith('rs') && props.assembly === 'GRCh38') {
//         const response = await fetch(api, {
//             method: 'POST',

//             body: JSON.stringify({
//                 query: SNP_AUTOCOMPLETE_QUERY,
//                 variables: { snpid: value, assembly: 'hg38', limit: 3 },
//             }),
//             headers: { 'Content-Type': 'application/json' },
//         });
//         const rst = (await response.json()).data
//             ?.snpAutocompleteQuery
//             ?.slice(0, 3)
//             .map((result: { id: string; coordinates: { chromosome: string; start: number; end: number } }) => ({
//                 title: result.id,
//                 description: `${result.coordinates.chromosome}:${result.coordinates.start}-${result.coordinates.end}`
//             }));
//         rs = uniq(rst, value);
//     }
//     if (
//         value.toLowerCase().match(/^chr[0-9x-y]+$/g)?.length === 1 &&
//         value.length <= 5
//     )
//         rs = [
//             { title: value + ':1-100000', description: `\n${value}:1-100000` },
//             { title: value + ':1-1000000', description: `\n${value}:1-1000000` },
//             {
//                 title: `${value}:1-10000000`,
//                 description: `\n${value}:1-10000000`,
//             },
//         ];
//     const response = await fetch(api, {
//         method: 'POST',
//         body: JSON.stringify({
//             query: GENE_AUTOCOMPLETE_QUERY,
//             variables: { name_prefix: [value], assembly: props.assembly, orderby: 'name', limit: 5 },
//         }),
//         headers: { 'Content-Type': 'application/json' },
//     });
//     const genesRes = (await response.json()).data
//         ?.gene
//         ?.map((result: { name: string, id: string, coordinates: { chromosome: string; start: number; end: number } }) => ({
//             title: result.name,
//             description: `${result.id}\n${result.coordinates.chromosome}:${result.coordinates.start}-${result.coordinates.end}`
//         })
//         );
//     const res: Result[] | undefined = genesRes && genesRes.length === 0 && rs.length > 0 ? undefined : uniq(genesRes, value);
//     const list = rs ? (res ? [...rs, ...res] : rs) : res
//     list?.forEach(item => {
//         if (item.title?.startsWith('rs')) {
//             item.type = 'snp';
//         } else if (item.title?.startsWith('chr')) {
//             item.type = 'coordinate';
//         } else {
//             item.type = 'gene';
//         }
//     })
//     setResults(list);