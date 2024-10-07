import { default as React } from '../../../node_modules/react';
import { SelectProps as MUISelectProps } from '@mui/material';
/**
 * PsychSCREEN drop down menu properties.
 * @member onItemClicked event handler for when a menu item is clicked.
 * @member items list of items to be displayed in the menu.
 */
export type SelectProps = MUISelectProps & {
    width?: number;
};
declare const Select: React.FC<SelectProps>;
export default Select;
