/**
 * OptionsMenuItem.tsx: a PsychSCREEN app bar menu item with a hamburger icon and a pop-out sub menu for options.
 */

 import React, { useState } from 'react';
 import { ClickAwayListener, Grow, MenuList, Popper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { DropDownMenu } from '../DropDownMenu';
import { MenuItemProps } from './DropDownMenuItem';

const OptionsMenuItem: React.FC<MenuItemProps> = props => {
    const anchorRef = React.useRef<HTMLDivElement>(null);
    const [ open, setOpen ] = useState(false);
    return (
        <>
            <div ref={anchorRef}>
                <MenuIcon
                    style={{ marginRight: props.flexGrow ? "0px" : props.marginRight, marginTop: "-3px", cursor: "pointer" }}
                    onClick={() => setOpen(true)}
                />
            </div>
            { anchorRef.current && (
                <Popper
                    anchorEl={anchorRef.current}
                    open={open}
                    placement="bottom-start"
                    transition
                    disablePortal
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
        </>
    );
}
export default OptionsMenuItem;
