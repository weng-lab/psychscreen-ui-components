import { default as React } from '../../../node_modules/react';
import { GenomeSearchProps } from './types';
/**
 * An autocomplete search component for genomic landmarks such as genes, SNPs, ICRs, and CCRs.
 * The props extends the MUI Autocomplete props, so you are able to adjust that component's props as well.
 * You can also use the slots and slotProps to customize the search's internal components, such as the input, button and the bounding box.
 * To use, pass in a list of the queries you want to run, and the assembly i.e. GRCh38 or mm10.
 * You must also provide a function to call when a result is selected, which will run when the user clicks the button.
 * @param props - extends MUI AutocompleteProps and includes additional props specific to this component
 */
declare const GenomeSearch: React.FC<GenomeSearchProps>;
export default GenomeSearch;
