import React from 'react';

import { TextField, TextFieldProps, InputAdornment } from '@mui/material';
import styled from '@emotion/styled';

import { Button } from '../Button';

/**
 * PsychSCREEN drop down menu properties.
 * @member onItemClicked event handler for when a menu item is clicked.
 * @member items list of items to be displayed in the menu.
 */
export type SearchBoxProps = TextFieldProps & {
    width?: number;
    unadorned?: boolean;
    onSearchButtonClick?: () => void;
};

const StyledTextField = styled(TextField)<SearchBoxProps>(() => ({
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0.5px",
    fontWeight: 400,
    height: "56px",
    borderRadius: "100px",
    border: "0px",
    backgroundColor: "#F2F2F2"
}));

const SearchBox: React.FC<SearchBoxProps> = props => (
    <StyledTextField
        label="What can we help you find?"
        variant="standard"
        helperText="e.g. schizophrenia, years of education"
        InputProps={{
            endAdornment: props.unadorned ? undefined : (
                <InputAdornment position="end" style={{ marginLeft: "-10px" }}>
                    <Button
                        bvariant='filled'
                        btheme='light'
                        onClick={props.onSearchButtonClick}
                    >
                        Search
                    </Button>
                </InputAdornment>
            ),
            style: {
                height: "76px",
                marginRight: props.unadorned ? "0px" : "10px",
                marginTop: "0px",
                backgroundColor: "none",
                width: `${props.width || 436}px`
            },
            disableUnderline: true
        }}
        inputProps={{
            style: {
                height: "24px",
                paddingTop: "16px",
                paddingLeft: "16px",
                paddingBottom: "12px"
            }
        }}
        FormHelperTextProps={{
            style: {
                paddingLeft: "28px",
                lineHeight: "16px",
                fontSize: "12px",
                letterSpacing: "0.4px",
                color: "#8D8D8D"
            }
        }}
        InputLabelProps={{
            style: {
                marginTop: "-18px",
                paddingTop: "16px",
                paddingBottom: "16px",
                paddingLeft: "28px",
                color: "#8D8D8D"
            }
        }}
        {...props}
    />
);
export default SearchBox;
