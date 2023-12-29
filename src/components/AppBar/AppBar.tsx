/**
 * AppBar.tsx: PsychSCREEN app bar.
 */

import React from 'react';
import { AppBar as MUIAppBar, AppBarProps as MUIAppBarProps, Box, Toolbar } from '@mui/material';
import { styled } from "@mui/material/styles"

import MenuItem from './MenuItem';
import DropDownMenuItem from './DropDownMenuItem';

/**
 * PsychSCREEN AppBar properties.
 * @member onHomepageClicked event handler for when the homepage link is clicked.
 * @member onAboutClicked event handler for when the about page link is clicked.
 * @member onPortalClicked event handler for when the portal link is clicked.
 * @member onResourcesClicked event handler for when the resources link is clicked.
 * @member onDownloadsClicked event handler for when the downloads link is clicked.
 */
export type AppBarProps = MUIAppBarProps & {
    onHomepageClicked?: () => void;
    onAboutClicked?: () => void;
    onPortalClicked?: (index: number) => void;
    onResourcesClicked?: () => void;
    onDownloadsClicked?: () => void;
    centered?: boolean;
};

export const StyledAppBar = styled(MUIAppBar)<AppBarProps>((props) => ({
    backgroundColor: "#ffffff",
    color: "#000000",
    alignItems: props.centered===true ? "center" : "left"

}));

export const PortalsMenuItem: React.FC<{ children?: React.ReactNode, onClick?: () => void }> = ({ children, onClick }) => (
    <MenuItem
        onClick={onClick}
        height="48px"
        fontSize="14px"
        lineHeight="24px"
        marginTop="5px"
    >
        {children}
    </MenuItem>
);

const PortalsMenu: React.FC<{ onPortalClicked?: (index: number) => void }> = ({ onPortalClicked }) => (
    <>
        <PortalsMenuItem onClick={() => onPortalClicked && onPortalClicked(0)}>Disease/Trait</PortalsMenuItem>
        <PortalsMenuItem onClick={() => onPortalClicked && onPortalClicked(1)}>Gene/b-cCRE</PortalsMenuItem>
        <PortalsMenuItem onClick={() => onPortalClicked && onPortalClicked(2)}>SNP/QTL</PortalsMenuItem>
        <PortalsMenuItem onClick={() => onPortalClicked && onPortalClicked(3)}>Single-Cell</PortalsMenuItem>
    </>
);

const AppBar: React.FC<AppBarProps> = props => (
    <Box sx={{ flexGrow: 1 }}>
        <StyledAppBar position="static" {...props}>
            <Toolbar style={{ marginLeft: "60px" }}>
                <MenuItem
                    onClick={props.onHomepageClicked}
                    marginRight="32px"
                    fontWeight={700}
                    fontSize="20px"
                    lineHeight="15px"
                >
                    psych<br />&nbsp;screen
                </MenuItem>
                <MenuItem
                    onClick={props.onAboutClicked}
                    marginRight="32px"
                >
                    About Us
                </MenuItem>
                <DropDownMenuItem
                    marginRight="32px"
                    menu={<PortalsMenu onPortalClicked={props.onPortalClicked} />}
                >
                    Portals
                </DropDownMenuItem>
                <MenuItem
                    onClick={props.onHomepageClicked}
                    marginRight="32px"
                >
                    Resources
                </MenuItem>
                <MenuItem
                    onClick={props.onDownloadsClicked}
                    flexGrow={1}
                    marginRight="32px"
                >
                    Downloads
                </MenuItem>
            </Toolbar>
        </StyledAppBar>
    </Box>
);
export default AppBar;
