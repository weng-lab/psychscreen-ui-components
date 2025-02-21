export type SearchBoxProps = {
    assembly: string;
    onSearchSubmit: (domain: Domain) => void;
};

export type Domain = {
    chromosome: string;
    start: number;
    end: number;
};


export type Result = {
    title?: string;
    description: string;
    type?: ResultType;
};

export type ResultType = 'gene' | 'snp' | 'coordinate';