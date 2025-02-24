import { AutocompleteProps, BoxProps, ButtonProps, TextFieldProps } from "@mui/material";

export type GenomeSearchProps = Partial<AutocompleteProps<Result, false, true, false, React.ElementType>> & {
    assembly: "GRCh38" | "mm10";
    onSearchSubmit: (result: Result) => void;

    // queries
    queries: ("gene" | "snp" | "coordinate" | "icre" | "ccre" | "all")[];
    geneLimit?: number;
    snpLimit?: number;
    icreLimit?: number;
    ccreLimit?: number;

    // slot props for internal MUI components
    slotProps?: {
        input?: Partial<TextFieldProps>;
        button?: Partial<ButtonProps>;
        box?: Partial<BoxProps>;
    }

    // slots to replace internal MUI components
    slots?: {
        input?: React.ReactElement<TextFieldProps>;
        button?: React.ReactElement<ButtonProps>;
        box?: React.ReactElement<BoxProps>;
    }
};

export type Domain = {
    chromosome: string;
    start: number;
    end: number;
};

export type ResultType = 'gene' | 'snp' | 'coordinate' | 'icre' | 'ccre';
export type Result = {
    title?: string;
    description?: string;
    type?: ResultType;
    domain: Domain;
};

export interface SnpResult {
    id: string;
    coordinates: {
        chromosome: string;
        start: number;
        end: number;
    }
}

export interface GeneResult {
    id: string;
    name: string;
    coordinates: {
        chromosome: string;
        start: number;
        end: number;
    }
}

export interface ICREResult {
    accession: string;
    coordinates: Domain
    celltypes: string[]
    rdhs: string
}

export interface CCREResult {
    accession: string;
    coordinates: Domain
    celltypes: string[]
}
