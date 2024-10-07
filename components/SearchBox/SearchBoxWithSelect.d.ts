import { default as React } from '../../../node_modules/react';
import { SearchBoxProps } from './SearchBox';
export type SearchBoxWithSelectOption = {
    value: string;
    name: string;
    helperText: string;
};
export type SearchBoxWithSelectProps = SearchBoxProps & {
    selectOptions: SearchBoxWithSelectOption[];
    onSelectChange?: (option: SearchBoxWithSelectOption) => void;
    onSearchChange?: (value: string) => void;
    onSearchButtonClick?: () => void;
    reactiveThreshold?: number;
    reactiveWidth?: number;
    containerWidth?: number;
};
declare const SearchBoxWithSelect: React.FC<SearchBoxWithSelectProps>;
export default SearchBoxWithSelect;
