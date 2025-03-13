import { CCREResponse, GeneResponse, ICREResponse, Result, SnpResponse } from './types';
/**
 * Get the coordinates from a string input.
 * @param input - The input string to search for coordinates
 * @param assembly - The assembly to search for coordinates
 * @returns An array of results with the coordinates
 */
export declare function getCoordinates(input: string, assembly: string): Result[];
export declare function snpResultList(results: SnpResponse[], limit: number): Result[];
export declare function geneResultList(results: GeneResponse[], limit: number): Result[];
export declare function icreResultList(results: ICREResponse[], limit: number): Result[];
export declare function ccreResultList(results: CCREResponse[], limit: number): Result[];
export declare function isDomain(input: string): boolean;
