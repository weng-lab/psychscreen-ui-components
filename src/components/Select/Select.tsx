import React from 'react';

import { Select as MUISelect, SelectProps as MUISelectProps } from '@mui/material';
import { styled } from "@mui/material/styles"

/**
 * PsychSCREEN drop down menu properties.
 * @member onItemClicked event handler for when a menu item is clicked.
 * @member items list of items to be displayed in the menu.
 */
export type SelectProps = MUISelectProps & {
    width?: number;
};

const StyledSelect = styled(MUISelect)<SelectProps>(() => ({
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0.5px",
    fontWeight: 400,
    height: "56px",
    padding: "16px",
    color: "#000000"
}));

const Select: React.FC<SelectProps> = props => (
    <StyledSelect
        label="What can we help you find?"
        variant="standard"
        style={{
            width: `${props.width || 172}px`,
        }}
        SelectDisplayProps={{ style: { paddingTop: "14px" } }}
        {...props}
    >   
        {props.children}
    </StyledSelect>
);
export default Select;
