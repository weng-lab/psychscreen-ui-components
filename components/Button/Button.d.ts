import { ButtonProps as MUIButtonProps } from '@mui/material';
export type ButtonVariant = 'filled' | 'outlined';
export type ButtonState = '' | '&:active' | '&:focus' | '&:hover' | '&:pressed' | '&:disabled';
export type ButtonStyling = {
    backgroundColor: string;
    color: string;
    opacity?: number;
    boxShadow?: string;
    border?: string;
    fontWeight?: number;
};
export type ButtonProps = MUIButtonProps & {
    btheme: 'light' | 'dark';
    bvariant: ButtonVariant;
};
export type ButtonTheme = Map<ButtonState, ButtonStyling>;
export declare const PSYCHSCREEN_BUTTON_LIGHT_THEME: Map<ButtonVariant, ButtonTheme>;
export declare const PSYCHSCREEN_BUTTON_DARK_THEME: Map<ButtonVariant, ButtonTheme>;
declare const Button: import('@emotion/styled').StyledComponent<import('@mui/material').ButtonOwnProps & Omit<import('@mui/material').ButtonBaseOwnProps, "classes"> & import('@mui/material/OverridableComponent').CommonProps & Omit<Omit<import('../../../node_modules/react').DetailedHTMLProps<import('../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    ref?: ((instance: HTMLButtonElement | null) => void | import('../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../node_modules/react').RefObject<HTMLButtonElement> | null | undefined;
}, "className" | "style" | "classes" | "color" | "children" | "sx" | "variant" | "tabIndex" | "disabled" | "size" | "href" | "action" | "loading" | "centerRipple" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "TouchRippleProps" | "touchRippleRef" | "disableElevation" | "disableFocusRipple" | "endIcon" | "fullWidth" | "loadingIndicator" | "loadingPosition" | "startIcon"> & import('@mui/system').MUIStyledCommonProps<import('@mui/material').Theme> & {
    component?: React.ElementType;
} & {
    btheme: "light" | "dark";
    bvariant: ButtonVariant;
}, {}, {}>;
export default Button;
