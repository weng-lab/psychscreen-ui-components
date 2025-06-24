import { Add } from "@mui/icons-material";
import { Tab, Stack, Paper, Tooltip } from "@mui/material";
import {  OpenElementsContext } from "./OpenElementsContext";
import { compressOpenElementsToURL, constructElementURL, decompressOpenElementsFromURL } from "./utility";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useContext, useEffect, useMemo, useRef } from "react";
import { GenomicElementType, OpenElement, OpenElementsTabsProps, TabRoute } from "./types";
import { DragDropContext, Droppable, OnDragEndResponder } from "@hello-pangea/dnd";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { DraggableTab } from "./DraggableTab";
import OpenElementsTabsMenu from "./OpenElementsTabsMenu";

export type ElementDetailsHeaderProps = {
    elementType: GenomicElementType;
    elementID: string;
};

//Context can possible be null, have to add this custom hook to check
const useOpenElements = () => {
    const context = useContext(OpenElementsContext);
    if (!context) {
        throw new Error("useOpenElements must be used within an OpenElementsContextProvider");
    }
    return context;
};

export const OpenElementsTabs = ({ children, ...props }: OpenElementsTabsProps & { children?: React.ReactNode }) => {
    const [openElements, dispatch] = useOpenElements();

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Attributes of current element
    const urlElementType = pathname.split("/")[props.urlElementTypeIndex ?? 1] as GenomicElementType;
    const urlElementID = pathname.split("/")[props.urlElementIdIndex ?? 2];
    const urlSubtab = (pathname.split("/")[props.urlSubtabIndex ?? 3] ?? "") as TabRoute;
    const currentElementState = openElements.find((el) => el.elementID === urlElementID);

    const getElementUrl = props.constructElementURL ?? constructElementURL;

    // ------- Initialize state from URL on initial load -------

    const isInitializedRef = useRef(false);

    useEffect(() => {
        if (!isInitializedRef.current) {
            const openParam = searchParams.get("open");
            if (openParam) {
                const openElementsFromUrl: OpenElement[] = decompressOpenElementsFromURL(openParam);
                if (openElementsFromUrl.length > 0) {
                    dispatch({ type: "setState", state: openElementsFromUrl });
                }
            }
            isInitializedRef.current = true;
        }
    }, [dispatch, searchParams]);

    // ------- Routing Related --------

    const isRoutingRef = useRef(false); // used to prevent race conditions when updating internal state and url (both async)

    /**
     * Navigates to given url, marking isRoutingRef to true
     * Needed to prevent race conditions between async state and routing changes
     */
    const navigateAndMark = useCallback(
        (url: string) => {
            isRoutingRef.current = true;
            router.push(url);
        },
        [router]
    );

    /**
     * Reset the routing flag when routing is complete
     */
    useEffect(() => {
        isRoutingRef.current = false;
    }, [urlElementID]);

    /**
     * Sync URL with current internal state (skip if not initialized yet)
     * Important - this relies on openElements being an empty array on initial load, and it never being reset to empty
     * Otherwise would need to check isInitializedRef.current
     */
    useEffect(() => {
        if (!openElements.length || isRoutingRef.current) return;
        const newUrl = pathname + "?open=" + compressOpenElementsToURL(openElements);
        router.replace(newUrl);
    }, [openElements, pathname, navigateAndMark, router]);

    /**
     * 
     */
    useEffect(() => {
        // if current route is not in open elements, and routing is not currently underway
        if (!isRoutingRef.current && !currentElementState) {
            dispatch({
                type: "addElement",
                element: {
                    elementID: urlElementID,
                    elementType: urlElementType,
                    tab: urlSubtab,
                },
            });
        }
    }, [currentElementState, dispatch, urlElementID, urlElementType, urlSubtab]);

    //sync the current view to the state
    useEffect(() => {
        if (!isRoutingRef.current && currentElementState && urlSubtab !== currentElementState.tab) {
            dispatch({
                type: "updateElement",
                element: {
                    ...currentElementState,
                    tab: urlSubtab,
                },
            });
        }
    }, [urlSubtab, currentElementState, dispatch]);

    /**
     * Called when Drag ends within <DragDropContext>. Dispatches reorder event
     */
    const onDragEnd: OnDragEndResponder<string> = (result) => {
        const { destination, source, draggableId } = result;

        // Only proceed if destination is valid AND element was found
        if (!destination || destination.index === source.index) return;

        const element = openElements.find((el) => el.elementID === draggableId);
        if (!element) return;

        dispatch({
            type: "reorder",
            element,
            startIndex: source.index,
            endIndex: destination.index,
        });
    };

    // ------- <DraggableTab> Helpers -------

    const handleTabClick = useCallback(
        (elToOpen: OpenElement) => {
            navigateAndMark(getElementUrl(elToOpen) + "?" + searchParams.toString());
        },
        [getElementUrl, navigateAndMark, searchParams]
    );

    const handleCloseTab = useCallback(
        (elToClose: OpenElement) => {
            if (openElements.length > 1) {
                // only need to navigate if you're closing the tab that you're on
                const needToNavigate = elToClose.elementID === urlElementID;
                if (needToNavigate) {
                    const toCloseIndex = openElements.findIndex((openEl) => openEl.elementID === elToClose.elementID);

                    //if elToClose is last tab, go to the tab on left. Else, go to the tab on the right
                    const elToNavTo =
                        toCloseIndex === openElements.length - 1 ? openElements[toCloseIndex - 1] : openElements[toCloseIndex + 1];

                    const url = getElementUrl(elToNavTo)
                    navigateAndMark(url);
                }

                dispatch({
                    type: "removeElement",
                    element: elToClose,
                });
            }
        },
        [openElements, urlElementID, dispatch, getElementUrl, navigateAndMark]
    );

    //  ------- End <DraggableTab> Helpers -------

    //  ------- <OpenElementsTabsMenu> Helpers -------

    const moreThanOneElementOpen = useMemo(() => {
        if (openElements.length > 1) {
            return true;
        } else return false;
    }, [openElements]);

    const handleCloseAll = useCallback(() => {
        if (!moreThanOneElementOpen || !currentElementState) return;

        dispatch({
            type: "setState",
            state: [currentElementState],
        });
    }, [moreThanOneElementOpen, currentElementState, dispatch]);


    const handleSort = useCallback(() => {
        if (!moreThanOneElementOpen) return;

        const sortOrder: GenomicElementType[] = ["region", "gene", "icre", "variant"];
        dispatch({
            type: "setState",
            state: [...openElements].sort((a, b) => {
                const typeComparison = sortOrder.indexOf(a.elementType) - sortOrder.indexOf(b.elementType);
                if (typeComparison === 0) {
                    return a.elementID.localeCompare(b.elementID);
                }
                return typeComparison;
            }),
        });
    }, [moreThanOneElementOpen, dispatch, openElements]);


    // ------- End <OpenElementsTabsMenu> Helpers -------

    /**
     * Index of current route's element within internal state
     */
    const tabIndex = useMemo(() => {
        return openElements.findIndex((el) => el.elementID === urlElementID)
    }, [openElements, urlElementID]);

    return (
        <TabContext value={tabIndex}>
            {/* z index of scrollbar in DataGrid is 60 */}
            <Paper elevation={1} square sx={{ position: "sticky", top: 0, zIndex: 61 }} id="open-elements-tabs">
                <Stack direction={"row"}>
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="droppable" direction="horizontal">
                            {(provided, snapshot) => {
                                return (
                                    <TabList
                                        ref={provided.innerRef} //need to expose highest DOM node to the Droppable component
                                        variant="scrollable"
                                        allowScrollButtonsMobile
                                        scrollButtons={snapshot.draggingFromThisWith ? false : "auto"} //prevent scroll buttons from appearing when dragging first or last item
                                        sx={{
                                            "& .MuiTabs-scrollButtons.Mui-disabled": {
                                                opacity: 0.3,
                                            },
                                            "& .MuiTabs-indicator": {
                                                display: "none", // hide selected indicator since we're adding one back in to fix drag behavior
                                            },
                                            flexGrow: 1,
                                        }}
                                        {...provided.droppableProps} //contains attributes for styling and element lookups
                                    >
                                        {openElements.map((element, i) => (
                                            <DraggableTab
                                                key={i}
                                                index={i}
                                                closable={openElements.length > 1}
                                                element={element}
                                                isSelected={urlElementID === element.elementID}
                                                handleCloseTab={handleCloseTab}
                                                handleTabClick={handleTabClick}
                                            />
                                        ))}
                                        {!snapshot.draggingFromThisWith && (
                                            <Tooltip title="New Search" placement="right">
                                                <Tab onClick={() => props.handleAddTab()} icon={<Add fontSize="small" />} sx={{ minWidth: 0 }} />
                                            </Tooltip>
                                        )}
                                        {/* {provided.placeholder} */}
                                    </TabList>
                                );
                            }}
                        </Droppable>
                    </DragDropContext>
                    <OpenElementsTabsMenu handleCloseAll={() => handleCloseAll()} handleSort={() => handleSort()} />
                </Stack>
            </Paper>
            {/* Content is child of OpenElementTabs due to ARIA accessibility guidelines: https://www.w3.org/WAI/ARIA/apg/patterns/tabs/ */}
            <TabPanel value={tabIndex} sx={{ p: 0, flexGrow: 1, minHeight: 0 }}>
                {children}
            </TabPanel>
        </TabContext>
    );
};
