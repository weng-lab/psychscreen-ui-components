import { useEffect } from "react";
import { ControlButtonsProps } from "./types";
import { IconButton, Stack, Tooltip } from "@mui/material";
import { ZoomIn, ZoomOut, PanTool, Edit, SettingsBackupRestore, Download } from "@mui/icons-material"

const ControlButtons = ({
    selectable,
    resetable,
    handleSelectionModeChange,
    selectMode,
    zoomIn,
    zoomOut,
    zoomReset,
    position,
    highlight,
    downloadButton,
    downloadPlot
}: ControlButtonsProps) => {

    useEffect(() => {
        // Function to handle key press
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Shift' && selectable && selectMode === "select") {
                handleSelectionModeChange('pan'); // Switch to pan mode when Shift is pressed

                // Function to handle key release
                const handleKeyUp = (e: KeyboardEvent) => {
                    if (e.key === 'Shift' && selectable) {
                        handleSelectionModeChange('select'); // Switch back to select mode when Shift is released
                    }
                };

                window.addEventListener('keyup', handleKeyUp);
                return () => {
                    window.removeEventListener('keyup', handleKeyUp);
                };
            }
        };

        // Add event listeners for key press and release
        window.addEventListener('keydown', handleKeyDown);

        // Clean up event listeners on unmount
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleSelectionModeChange, selectMode, selectable]);

    return (
        <>
            {selectMode !== "none" && (
                <Stack direction={position === "bottom" ? "row" : "column"} spacing={5} alignItems={"center"} justifyContent={"center"}>
                    {
                        selectable && (
                            <Tooltip title="Drag to pan, or hold Shift and drag">
                                <IconButton aria-label="pan" onClick={() => handleSelectionModeChange('pan')} sx={{ color: selectMode === "pan" ? highlight ? highlight : "primary.main" : "default" }}>
                                    <PanTool />
                                </IconButton>
                            </Tooltip>
                        )
                    }
                    {
                        selectable && (
                            <Tooltip title="Drag to select">
                                <IconButton aria-label="edit" onClick={() => handleSelectionModeChange('select')} sx={{ color: selectMode === "select" ? highlight ? highlight : "primary.main" : "default" }}>
                                    <Edit />
                                </IconButton>
                            </Tooltip>
                        )
                    }
                    <Tooltip title="Zoom In">
                        <IconButton aria-label="zoom-in" onClick={zoomIn}>
                            <ZoomIn />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Zoom Out">
                        <IconButton aria-label="zoom-out" onClick={zoomOut}>
                            <ZoomOut />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Reset Zoom and Pan">
                        <IconButton aria-label="resetZoom" onClick={zoomReset} disabled={!resetable}>
                            <SettingsBackupRestore />
                        </IconButton>
                    </Tooltip>
                    {downloadButton === "inline" && (
                        <Tooltip title="Download Plot as PNG">
                            <IconButton aria-label="download" onClick={() => downloadPlot()}>
                                <Download />
                            </IconButton>
                        </Tooltip>
                    )}
                </Stack>
            )}
        </>

    );
}

export default ControlButtons;