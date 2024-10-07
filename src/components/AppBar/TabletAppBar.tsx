/**
 * TabletAppBar.tsx: PsychSCREEN app bar for tablets and mobile devices.
 */

import React from 'react';
import { AppBarProps, StyledAppBar, PortalsMenuItem as OptionsMenuItem } from './AppBar';
import { Box, Toolbar } from '@mui/material';

import MenuItem from './MenuItem';
import OptionsMenu from './OptionsMenuItem';

export type TabletAppBarProps = AppBarProps & { title?: string };

const PortalsMenu: React.FC<{ onItemClicked?: (index: number) => void }> = ({ onItemClicked }) => (
    <>
        <OptionsMenuItem onClick={() => onItemClicked && onItemClicked(-1)}>About</OptionsMenuItem>
        <OptionsMenuItem onClick={() => onItemClicked && onItemClicked(0)}>Disease/Trait Portal</OptionsMenuItem>
        <OptionsMenuItem onClick={() => onItemClicked && onItemClicked(1)}>Gene/b-cCRE Portal</OptionsMenuItem>
        <OptionsMenuItem onClick={() => onItemClicked && onItemClicked(2)}>SNP/QTL Portal</OptionsMenuItem>
        <OptionsMenuItem onClick={() => onItemClicked && onItemClicked(3)}>Single-Cell Portal</OptionsMenuItem>
    </>
);

export const TabletAppBar = (props: TabletAppBarProps) => (
    <Box sx={{ flexGrow: 1 }}>
        <StyledAppBar position="static" elevation={0}>
            <Toolbar style={{ paddingLeft: "19px" }}>
                <OptionsMenu
                    marginRight="32px"
                    menu={<PortalsMenu onItemClicked={props.onPortalClicked} />}
                >
                    Portals
                </OptionsMenu>
                <MenuItem flexGrow={1} textAlign="center" fontSize="22px" lineHeight="28px" fontWeight={400}>
                    { props.title || "" }
                </MenuItem>
            </Toolbar>
        </StyledAppBar>
    </Box>
);
