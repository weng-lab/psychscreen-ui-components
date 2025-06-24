import { GenomicElementType, GenomicRange, OpenElement, TabRoute } from "./types";
import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from "lz-string";

/**
 * Very dumb parser for genomic range. No input checking. Assumes proper formatting and no commas in values.
 * Will handle URL encoding of ':' as '%3A'
 * @param input `String` with format chr:start-end
 * @returns `GenomicRange`
 */
export function parseGenomicRangeString(input: string): GenomicRange {
    if (input.includes("%3A")) {
        return {
            // %3A is URL encoding of ":"
            chromosome: input.split("%3A")[0],
            start: +input.split("%3A")[1].split("-")[0],
            end: +input.split("%3A")[1].split("-")[1],
        };
    } else
        return {
            chromosome: input.split(":")[0],
            start: +input.split(":")[1].split("-")[0],
            end: +input.split(":")[1].split("-")[1],
        };
}

const openElementListDelimiter = ','
const openElementDelimiter = '/'

const elementTypeEncoding: {[key in GenomicElementType]: string} = {
    'gene': 'g',
    'icre': 'i',
    'variant': 'v',
    'region': 'r'
  }

const elementTypeDecoding: { [key: string]: GenomicElementType } = Object.fromEntries(
    Object.entries(elementTypeEncoding).map(([element, encoding]: [GenomicElementType, string]) => [encoding, element])
);

const tabRouteEncoding: { [key in TabRoute]: string } = {
    browser: "b",
    genes: "g",
    icres: "i",
    variants: "v",
    "": "",
  };
  
  const tabRouteDecoding: { [key: string]: TabRoute } = Object.fromEntries(
    Object.entries(tabRouteEncoding).map(([element, encoding]: [TabRoute, string]) => [encoding, element])
  );

/**
 *
 * @param urlOpen properly formatted URI Encoded query parameter representing ```OpenElement[]``` state
 * @returns ```OpenElement[]```
 */
export function decompressOpenElementsFromURL(urlOpenElements: string | null): OpenElement[] {
    return decompressFromEncodedURIComponent(urlOpenElements)
        .split(openElementListDelimiter)
        .map((entry) => {
            const [encodedElementType, elementID, encodedTab = ""] = entry.split(openElementDelimiter);
            return {
                elementType: elementTypeDecoding[encodedElementType],
                elementID,
                tab: tabRouteDecoding[encodedTab],
            };
        })
        .filter((x) => x.elementType && x.elementID); // filter out any invalid
}

/**
 *
 * @param openElements
 * @returns URI encoded query parameter representing the ```OpenElement[]``` state
 */
export function compressOpenElementsToURL(openElements: OpenElement[]): string {
    return compressToEncodedURIComponent(
        openElements
            .map((x) => [elementTypeEncoding[x.elementType], x.elementID, tabRouteEncoding[x.tab]].join(openElementDelimiter))
            .join(openElementListDelimiter)
    );
}

export const constructElementURL = (element: OpenElement) =>
    `/${element.elementType}/${element.elementID}/${element.tab}`;