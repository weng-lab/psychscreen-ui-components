import { PaperProps } from '@mui/material';
/**
 * PsychSCREEN drop down menu properties.
 * @member onItemClicked event handler for when a menu item is clicked.
 * @member items list of items to be displayed in the menu.
 */
export type DropDownMenuProps = PaperProps;
declare const DropDownMenu: import('@emotion/styled').StyledComponent<import('@mui/material').PaperOwnProps & import('@mui/material/OverridableComponent').CommonProps & Omit<Omit<import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void | import('../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
}, "className" | "style" | "classes" | "children" | "sx" | "variant" | "square" | "elevation"> & import('@mui/system').MUIStyledCommonProps<import('@mui/material').Theme> & {
    component?: React.ElementType;
}, {}, {}>;
export default DropDownMenu;
