import { useState } from "react";
import { CCREResult, GeneResult, ICREResult, Result, SnpResult } from "./types";

type UseCoordinatesReturn = [(input: string, assembly: string) => void, { data: Result[] }];

export function useCoordinates(): UseCoordinatesReturn {
    const [coords, setCoords] = useState<Result[]>([]);

    const fetchCoords = (input: string, assembly: string) => {
        setCoords([]);
        if (input.startsWith('chr') && input.length <= 5 && input.length > 3) {
            setCoords([{
                title: input.split(':')[0] + `:1-100000`,
                domain: {
                    chromosome: input.split(':')[0],
                    start: 1,
                    end: 100000
                },
                description: input.split(':')[0] + `:1-100000`,
                type: 'coordinate'
            },
            ]);
        }
        if (input.includes(':') && input.includes('-')) {
            const chromosome = input.split(':')[0];
            const start = parseInt(input.split(':')[1].split('-')[0]) || 0;
            const end = parseInt(input.split(':')[1].split('-')[1]) || start + 1000;

            const chrLength = chromosomeLengths[assembly][chromosome];

            // Only set coordinates if end is greater than start and within chromosome length
            if (end > start && chrLength && end <= chrLength) {
                setCoords([{
                    title: `${chromosome}:${start}-${end}`,
                    domain: {
                        chromosome: chromosome,
                        start: start,
                        end: end
                    },
                    description: `${chromosome}:${start}-${end}`,
                    type: 'coordinate'
                }]);
            }
        }
    }
    return [fetchCoords, { data: coords }]
}

const chromosomeLengths: { [key: string]: { [key: string]: number } } = {
    GRCh38: {
        "chr1": 248956422,
        "chr2": 242193529,
        "chr3": 198295559,
        "chr4": 190214555,
        "chr5": 181538259,
        "chr6": 170805979,
        "chr7": 159345973,
        "chr8": 145138636,
        "chr9": 138394717,
        "chr10": 133797422,
        "chr11": 135086622,
        "chr12": 133275309,
        "chr13": 114364328,
        "chr14": 107043718,
        "chr15": 101991189,
        "chr16": 90338345,
        "chr17": 83257441,
        "chr18": 80373285,
        "chr19": 58617616,
        "chr20": 64444167,
        "chr21": 46709983,
        "chr22": 50818468,
        "chrX": 156040895,
        "chrx": 156040895,
        "chrY": 57227415,
        "chry": 57227415,
    },
    mm10: {
        "chr1": 195471971,
        "chr2": 182113224,
        "chr3": 160039680,
        "chr4": 156508116,
        "chr5": 151834684,
        "chr6": 149736546,
        "chr7": 145441459,
        "chr8": 129401213,
        "chr9": 124595110,
        "chr10": 130694993,
        "chr11": 122082543,
        "chr12": 120129022,
        "chr13": 120421639,
        "chr14": 124902244,
        "chr15": 104043685,
        "chr16": 98207768,
        "chr17": 94987271,
        "chr18": 90702639,
        "chr19": 61431566,
        "chrX": 171031299,
        "chrx": 171031299,
        "chrY": 91744698,
        "chry": 91744698,
    },
}

export function snpResultList(results: SnpResult[], limit: number) {
    if (!results) {
        return [];
    }
    results = results.slice(0, limit);
    let rs: Result[] = [];
    results.forEach((result: SnpResult) => {
        rs.push({
            title: result.id,
            description: `${result.coordinates.chromosome}:${result.coordinates.start}-${result.coordinates.end}`,
            domain: {
                chromosome: result.coordinates.chromosome,
                start: result.coordinates.start,
                end: result.coordinates.end
            },
            type: 'snp'
        });
    });
    return rs;
}

export function geneResultList(results: GeneResult[], limit: number) {
    if (!results) {
        return [];
    }
    results = results.slice(0, limit);
    let rs: Result[] = [];
    results.forEach((result: GeneResult) => {
        rs.push({
            title: result.name,
            domain: {
                chromosome: result.coordinates.chromosome,
                start: result.coordinates.start,
                end: result.coordinates.end
            },
            description: `${result.id}\n${result.coordinates.chromosome}:${result.coordinates.start}-${result.coordinates.end}`,
            type: 'gene'
        });
    });
    return rs;
}

export function icreResultList(results: ICREResult[], limit: number) {
    if (!results) {
        return [];
    }
    results = results.slice(0, limit);
    let rs: Result[] = [];
    results.forEach((result: ICREResult) => {
        rs.push({
            title: result.accession,
            domain: {
                chromosome: result.coordinates.chromosome,
                start: result.coordinates.start,
                end: result.coordinates.end
            },
            description: `${result.coordinates.chromosome}:${result.coordinates.start}-${result.coordinates.end}`,
            type: 'icre'
        });
    });
    return rs
}

export function ccreResultList(results: CCREResult[], limit: number) {
    if (!results) {
        return [];
    }
    results = results.slice(0, limit);
    let rs: Result[] = [];
    results.forEach((result: CCREResult) => {
        rs.push({
            title: result.accession,
            domain: {
                chromosome: result.coordinates.chromosome,
                start: result.coordinates.start,
                end: result.coordinates.end
            },
            description: `${result.coordinates.chromosome}:${result.coordinates.start}-${result.coordinates.end}`,
            type: 'ccre'
        });
    });
    return rs
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