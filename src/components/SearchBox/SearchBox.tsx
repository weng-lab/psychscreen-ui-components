import React from 'react';

import { TextField, TextFieldProps, InputAdornment } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { styled } from "@mui/material/styles"
import { Button } from '../Button';

/*  
    Need to use a theme to pass the disableUnderline prop to the input element.
    Doing it directly in the InputProps gives a TS error because only the 
    "standard" variant has the prop available, and it is potential ambiguous
    which variant will be created (even though it'll always be "standard" here)
*/
const theme = createTheme({
    components: {
      // Name of the component
      MuiInput: {
        defaultProps: {
            // The props to change the default for.
            disableUnderline: true,
          },
      }
    },
  });

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
    backgroundColor: "#F2F2F2",
}));

const SearchBox: React.FC<SearchBoxProps> = (props) => (
    <ThemeProvider theme={theme}>
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
                }
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
    </ThemeProvider>
);
export default SearchBox;
