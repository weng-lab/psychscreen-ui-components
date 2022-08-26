/**
 * MenuItem.tsx: a PsychSCREEN app bar menu item.
 */

import React from 'react';

import { Typography } from "../Typography";

export type MenuItemProps = React.CSSProperties & {
    onClick?: () => void;
    children: React.ReactNode;
};

const MenuItem: React.FC<MenuItemProps> = props => (
    <Typography
        type="title"
        size="small"
        variant="h6"
        sx={{ flexGrow: props.flexGrow }}
        style={{ marginRight: props.flexGrow ? "0px" : props.marginRight, cursor: "pointer", fontWeight: 400, ...props }}
        onClick={props.onClick}
        className="app-bar-menu-item"
    >
        {props.children}
    </Typography>
);
export default MenuItem;
