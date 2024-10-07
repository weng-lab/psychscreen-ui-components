import { Paper, PaperProps } from '@mui/material';
import { styled } from "@mui/material/styles"

import { PSYCHSCREEN_TONAL_PALETTES } from '../Theme';

/**
 * PsychSCREEN drop down menu properties.
 * @member onItemClicked event handler for when a menu item is clicked.
 * @member items list of items to be displayed in the menu.
 */
export type DropDownMenuProps = PaperProps;

const DropDownMenu = styled(Paper)<DropDownMenuProps>(() => ({
    boxShadow: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
    borderRadius: "4px",
    backgroundColor: PSYCHSCREEN_TONAL_PALETTES.get("Primary")!.get(100),
    textAlign: "center"
}));
export default DropDownMenu;
