import { default as React } from '../../../node_modules/react';
import { AppBarProps as MUIAppBarProps } from '@mui/material';
/**
 * PsychSCREEN AppBar properties.
 * @member onHomepageClicked event handler for when the homepage link is clicked.
 * @member onAboutClicked event handler for when the about page link is clicked.
 * @member onPortalClicked event handler for when the portal link is clicked.
 * @member onDownloadsClicked event handler for when the downloads link is clicked.
 */
export type AppBarProps = MUIAppBarProps & {
    onHomepageClicked?: () => void;
    onAboutClicked?: () => void;
    onPortalClicked?: (index: number) => void;
    onDownloadsClicked?: () => void;
    centered?: boolean;
};
export declare const StyledAppBar: import('@emotion/styled').StyledComponent<import('@mui/material').AppBarOwnProps & Omit<import('@mui/material').PaperOwnProps, "classes" | "color" | "position"> & import('@mui/material/OverridableComponent').CommonProps & Omit<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & {
    ref?: ((instance: HTMLElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLElement> | null | undefined;
}, "className" | "style" | "classes" | "color" | "position" | "children" | "sx" | "variant" | "square" | "elevation" | "enableColorOnDark"> & import('@mui/system').MUIStyledCommonProps<import('@mui/material').Theme> & {
    component?: React.ElementType;
} & {
    onHomepageClicked?: () => void;
    onAboutClicked?: () => void;
    onPortalClicked?: (index: number) => void;
    onDownloadsClicked?: () => void;
    centered?: boolean;
}, {}, {}>;
export declare const PortalsMenuItem: React.FC<{
    children?: React.ReactNode;
    onClick?: () => void;
}>;
export declare const AppBar: (props: AppBarProps) => import("react/jsx-runtime").JSX.Element;
