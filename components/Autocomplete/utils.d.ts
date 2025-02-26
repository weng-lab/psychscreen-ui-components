import { CCREResponse, GeneResponse, ICREResponse, Result, SnpResponse } from './types';
type UseCoordinatesReturn = [(input: string, assembly: string) => void, {
    data: Result[];
}];
export declare function useCoordinates(): UseCoordinatesReturn;
export declare function snpResultList(results: SnpResponse[], limit: number): Result[];
export declare function geneResultList(results: GeneResponse[], limit: number): Result[];
export declare function icreResultList(results: ICREResponse[], limit: number): Result[];
export declare function ccreResultList(results: CCREResponse[], limit: number): Result[];
export {};
