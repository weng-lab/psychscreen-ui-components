import { AutocompleteProps, BoxProps, ButtonProps, TextFieldProps } from '@mui/material';
export type GenomeSearchProps = Partial<AutocompleteProps<Result, false, true, false, React.ElementType>> & {
    assembly: "GRCh38" | "mm10";
    onSearchSubmit: (result: Result) => void;
    defaultResults?: Result[];
    showiCREFlag?: boolean;
    queries: ResultType[];
    geneLimit?: number;
    snpLimit?: number;
    icreLimit?: number;
    ccreLimit?: number;
    slotProps?: {
        input?: Partial<TextFieldProps>;
        button?: Partial<ButtonProps>;
        box?: Partial<BoxProps>;
    };
    slots?: {
        input?: React.ReactElement<TextFieldProps>;
        button?: React.ReactElement<ButtonProps>;
        box?: React.ReactElement<BoxProps>;
    };
};
export type Domain = {
    chromosome: string;
    start: number;
    end: number;
};
export type ResultType = 'Gene' | 'SNP' | 'Coordinate' | 'iCRE' | 'cCRE';
export type Result = {
    title?: string;
    description?: string;
    type?: ResultType;
    id?: string;
    name?: string;
    domain: Domain;
};
export interface SnpResponse {
    id: string;
    coordinates: {
        chromosome: string;
        start: number;
        end: number;
    };
}
export interface GeneResponse {
    id: string;
    name: string;
    coordinates: {
        chromosome: string;
        start: number;
        end: number;
    };
}
export interface ICREResponse {
    accession: string;
    coordinates: Domain;
    celltypes: string[];
    rdhs: string;
}
export interface CCREResponse {
    accession: string;
    coordinates: Domain;
    celltypes: string[];
    isiCRE: boolean;
}
