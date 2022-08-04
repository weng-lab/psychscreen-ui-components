/**
 * Button.tsx: provides PsychSCREEN-styled buttons.
 */

import { Button as MUIButton, ButtonProps as MUIButtonProps, styled } from '@mui/material';
import { FONT_WEIGHTS, FONT_SIZES } from '../Typography/Typography';

export type ButtonProps = MUIButtonProps & { primary?: boolean };

const Button = styled(MUIButton)<ButtonProps>(({ primary }) => ({
    borderRadius: '28px',
    backgroundColor: primary ? "#000000" : "#ffffff",
    color: primary ? "#ffffff" : "#000000",
    fontFamily: "Gilroy",
    fontSize: FONT_SIZES.get("body")?.get("medium"),
    fontWeight: FONT_WEIGHTS.get("body")?.get("medium"),
    '&:active': {
        backgroundColor: primary ? "#000000" : "#ffffff",
        color: primary ? "#ffffff" : "#000000",
    },
    '&:focus': {
        backgroundColor: primary ? "#000000" : "#ffffff",
        color: primary ? "#ffffff" : "#000000",
    },
    '&:hover': {
        backgroundColor: primary ? "#505050" : "#f6f6f6",
        color: primary ? "#ffffff" : "#000000",
    },
    '&:pressed': {
        backgroundColor: primary ? "#505050" : "#f6f6f6",
        color: primary ? "#ffffff" : "#000000",
    },
    '&:disabled': {
        backgroundColor: primary ? "#cccccc" : "#f6f6f6",
        color: primary ? "#ffffff" : "#c5c5c5",
    }
}));
export default Button;
