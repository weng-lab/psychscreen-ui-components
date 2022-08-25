/**
 * AppBar.tsx: PsychSCREEN app bar.
 */

import React from 'react';
import { AppBar as MUIAppBar, AppBarProps as MUIAppBarProps, Box, Toolbar } from '@mui/material';
import styled from '@emotion/styled';

import { Button } from '../Button';
import MenuItem from './MenuItem';

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
    onPortalClicked?: () => void;
    onResourcesClicked?: () => void;
    onDownloadsClicked?: () => void;
};

export const StyledAppBar = styled(MUIAppBar)<AppBarProps>(() => ({
    backgroundColor: "#ffffff",
    color: "#000000"
}));

export const AppBar: React.FC<AppBarProps> = props => (
    <Box sx={{ flexGrow: 1 }}>
        <StyledAppBar position="static">
            <Toolbar>
                <MenuItem
                    onClick={props.onHomepageClicked}
                    marginRight="4em"
                >
                    PsychSCREEN
                </MenuItem>
                <MenuItem
                    onClick={props.onAboutClicked}
                    marginRight="1em"
                >
                    About
                </MenuItem>
                <MenuItem
                    onClick={props.onPortalClicked}
                    marginRight="1em"
                >
                    Portals
                </MenuItem>
                <MenuItem
                    onClick={props.onHomepageClicked}
                    flexGrow={1}
                >
                    Resources
                </MenuItem>
                <div>
                    <Button
                        onClick={props.onDownloadsClicked}
                        bvariant="filled"
                        btheme="light"
                    >
                        Downloads
                    </Button>
                </div>
            </Toolbar>
        </StyledAppBar>
    </Box>
);
export default AppBar;
