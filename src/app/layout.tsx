
import { Stack } from "@mui/material"
import { OpenElementsContextProvider } from "../components/ElementTabs/OpenElementsProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>

                <OpenElementsContextProvider>
                    {/* Overall wrapper set to be screen height */}
                    <Stack height={"100vh"} minHeight={0} id="app-wrapper">
                        {/* Overflow=auto provides scrolling ancestor for OpenElementsTab. This allows it to be position=sticky with top=0, and right under AppBar*/}
                        <Stack flexGrow={1} overflow={"auto"} minHeight={0} id="content-wrapper">
                            <Stack flexGrow={1}>{children}</Stack>
                        </Stack>
                    </Stack>
                </OpenElementsContextProvider>
            </body>
        </html>
    );
}
