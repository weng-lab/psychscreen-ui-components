import { default as React } from '../../../node_modules/react';
import { TextFieldProps } from '@mui/material';
/**
 * PsychSCREEN drop down menu properties.
 * @member onItemClicked event handler for when a menu item is clicked.
 * @member items list of items to be displayed in the menu.
 */
export type SearchBoxProps = TextFieldProps & {
    width?: number;
    unadorned?: boolean;
    onSearchButtonClick?: () => void;
};
declare const SearchBox: React.FC<SearchBoxProps>;
export default SearchBox;
