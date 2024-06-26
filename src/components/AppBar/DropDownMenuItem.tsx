/**
 * MenuItem.tsx: a PsychSCREEN app bar menu item.
 */

import React, { useState } from 'react';
import { ClickAwayListener, Grow, MenuList, Popper, Stack } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { DropDownMenu } from '../DropDownMenu';
import { Typography } from "../Typography";

export type MenuItemProps = React.CSSProperties & {
    onClick?: () => void;
    children: React.ReactNode;
    menu: React.ReactNode;
};

const DropDownMenuItem: React.FC<MenuItemProps> = props => {
    const anchorRef = React.useRef<HTMLDivElement>(null);
    const [ open, setOpen ] = useState(false);
    return (
        <Stack direction="row">
            <div
                onClick={props.onClick}
                ref={anchorRef}
                style={{ cursor: "pointer" }}
                onMouseOver={() => setOpen(true)}
            >
                <Typography
                    type="title"
                    size="small"
                    variant="h6"
                    sx={{ flexGrow: props.flexGrow }}
                    style={{ fontWeight: 400, display: "inline-block", ...props, marginRight: "7.25px" }}
                    onClick={props.onClick}
                    className="app-bar-menu-item"
                >
                    {props.children}
                </Typography>
            </div>
            <ArrowDropDownIcon
                style={{ marginRight: props.flexGrow ? "0px" : props.marginRight, marginTop: "-3px", cursor: "pointer" }}
                onMouseOver={() => setOpen(true)}
            />
            { anchorRef.current && (
                <Popper
                    anchorEl={anchorRef.current}
                    open={open}
                    placement="bottom-start"
                    transition
                    onMouseLeave={()=> setOpen(false)}
                >
                    { ({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom' }}
                        >
                            <DropDownMenu style={{ width: "150px" }}>
                                <ClickAwayListener onClickAway={() => setOpen(false)}>
                                    
                                    <MenuList style={{ textAlign: "center" }}>
                                        {props.menu}
                                    </MenuList>
                                    
                                </ClickAwayListener>
                            </DropDownMenu>
                        </Grow>
                    )}
                </Popper>
            )}
        </Stack>
    );
};
export default DropDownMenuItem;
