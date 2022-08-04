/**
 * theme.ts: defines the component library default color palette.
 */

import { createTheme } from '@mui/material/styles';

export const PSYCHSCREEN_DEFAULT_THEME = createTheme({
    palette: {
        primary: {
            dark: "#000000",
            main: "#808080",
            light: "#b1b1b1"
        },
        secondary: {
            dark: "#95b7ce",
            main: "#c5d9e8",
            light: "#ddebf5"
        }
    }
});
