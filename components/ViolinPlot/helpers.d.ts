export declare const getTextHeight: (text: string, fontSize: number, fontFamily: string) => number;
export declare const calculateBoxStats: (data: number[], outlierType: string) => {
    min: number;
    max: number;
    firstQuartile: number;
    thirdQuartile: number;
    median: number;
    outliers: number[];
};
export declare function kernelDensityEstimator(kernel: (distance: number) => number, X: number[]): (data: number[]) => {
    value: number;
    count: number;
}[];
export declare function gaussian(bandwidth: number): (x: number) => number;
export declare function scottRule(data: number[]): number;
export declare function silvermanRule(data: number[]): number;
export declare function seededRandom(seed: string): number;
