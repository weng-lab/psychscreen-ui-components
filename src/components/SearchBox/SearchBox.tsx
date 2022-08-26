import React from 'react';

import { TextField, TextFieldProps, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';

/**
 * PsychSCREEN drop down menu properties.
 * @member onItemClicked event handler for when a menu item is clicked.
 * @member items list of items to be displayed in the menu.
 */
export type SearchBoxProps = TextFieldProps & {
    width?: number;
};

const StyledTextField = styled(TextField)<SearchBoxProps>(() => ({
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0.5px",
    fontWeight: 400,
    height: "56px"
}));

const SearchBox: React.FC<SearchBoxProps> = props => (
    <StyledTextField
        label="What can we help you find?"
        variant="standard"
        helperText="e.g. schizophrenia, years of education"
        InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                    <SearchIcon style={{ color: "#49454F" }} />
                </InputAdornment>
            ),
            style: {
                height: "76px",
                margin: "0px",
                width: `${props.width || 436}px`
            }
        }}
        inputProps={{
            style: {
                height: "24px",
                paddingTop: "16px",
                paddingLeft: "16px",
                paddingBottom: "16px"
            }
        }}
        FormHelperTextProps={{
            style: {
                paddingLeft: "16px",
                lineHeight: "16px",
                fontSize: "12px",
                letterSpacing: "0.4px",
                color: "#8D8D8D"
            }
        }}
        InputLabelProps={{
            style: {
                marginTop: "-15px",
                paddingTop: "16px",
                paddingBottom: "16px",
                paddingLeft: "16px",
                color: "#8D8D8D"
            }
        }}
        {...props}
    />
);
export default SearchBox;
