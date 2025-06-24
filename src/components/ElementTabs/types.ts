export type OpenElementsTabsProps = {
    /**
     * Callback function to handle what happens when the user presses the '+' button
     * Should probably focus a search bar that would push a new route
     */
    handleAddTab: () => void;
    /**
     * Build the url based on the open element
     * @default
     * `/${element.elementType}/${element.elementID}/${element.tab}`
     */
    constructElementURL?: (element: OpenElement) => string;
    /**
     * url indexes for where the pathname should be split
     * will be called on tab clicked/opened and on tab closed (whenever navigating to a new tab)
     * @default
     * Element Type: 1
     * Element Id: 2
     * Subtab: 3
     */
    urlElementTypeIndex?: number;
    urlElementIdIndex?: number;
    urlSubtabIndex?: number;
    // genomicElementTypes: T[];
    // subTabRoutes: U[];
    // sortOrder?: T[];
}

export interface GenomicRange {
    chromosome: string;
    start: number;
    end: number;
}

export type GenomicElementType = "variant" | "gene" | "icre" | "region"

export type SharedRoute = "browser"

//region search does not have "base" tab like gene/snp/icre. Always region/[region]/[elementType]
export type RegionRoute = SharedRoute | "icres" | "genes" | "variants"

//empty route is for the elements default tab. For example /gene/SP1 will be the gene expression. Otherwise would need to assign /gene/SP1/gene
export type ElementDefaultTab = ""

export type VariantRoute = SharedRoute | ElementDefaultTab | "icres" | "genes"

export type GeneRoute = SharedRoute | ElementDefaultTab | "icres" | "variants"

export type IcreRoute = SharedRoute | ElementDefaultTab | "genes" | "variants"

export type TabRoute = VariantRoute | GeneRoute | IcreRoute | RegionRoute

export type OpenElement = { elementType: GenomicElementType; elementID: string, tab: TabRoute };

export type OpenElementsAction =
  | { type: "addElement"; element: OpenElement }
  | { type: "removeElement"; element: OpenElement }
  | { type: "updateElement"; element: OpenElement }
  | { type: "reorder"; element: OpenElement; startIndex: number; endIndex: number }
  | { type: "setState"; state: OpenElementsState }

export type OpenElementsState = OpenElement[];