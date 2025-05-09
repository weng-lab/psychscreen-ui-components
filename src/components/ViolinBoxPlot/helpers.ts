import { Datum } from "./types";

// Helper function to measure the height of the longest tick
export const getTextHeight = (text: string, fontSize: number, fontFamily: string): number => {
    const el = document.createElement("g");
    el.style.position = "absolute";
    el.style.visibility = "hidden";
    el.style.fontSize = `${fontSize}px`;
    el.style.fontFamily = fontFamily;
    el.style.whiteSpace = "nowrap"; // Prevents wrapping
    el.textContent = text;
    document.body.appendChild(el);
    const width = el.getBoundingClientRect().width;
    document.body.removeChild(el);
    return width;
};

// Get the min, max, quartiles, median, and ouotiers for each data set
export const calculateBoxStats = (data: Datum[], includeOutliers: boolean, otherData: number[]) => {
    const values: number[] = [];
    data.forEach(d => {
        for (let i = 0; i < d.count; i++) {
            values.push(d.value);
        }
    });

    values.sort((a, b) => a - b);

    const median = (arr: number[]) => {
        const mid = Math.floor(arr.length / 2);
        return arr.length % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
    };

    const getQuartiles = (arr: number[]) => {
        const mid = Math.floor(arr.length / 2);
        const lower = arr.slice(0, mid);
        const upper = arr.slice(arr.length % 2 === 0 ? mid : mid + 1);
        return {
            firstQuartile: median(lower),
            thirdQuartile: median(upper),
        };
    };

    // Calculate quartiles
    const { firstQuartile, thirdQuartile } = getQuartiles(values);
    const med = median(values);

    // Calculate the IQR and whiskers
    const iqr = thirdQuartile - firstQuartile;
    const lowerWhisker = firstQuartile - 1.5 * iqr;
    const upperWhisker = thirdQuartile + 1.5 * iqr;

    // Calculate outliers (values outside of the whiskers)
    const outliers = otherData.length > 0 ? otherData : values.filter(val => val < lowerWhisker || val > upperWhisker);

    // Min and max
    const filteredValues = includeOutliers ? values.filter(val => val >= lowerWhisker && val <= upperWhisker) : values;
    const min = filteredValues[0];
    const max = filteredValues[filteredValues.length - 1];

    return { min, max, firstQuartile, thirdQuartile, median: med, outliers };
};

/**
 * Samples a normal distribution at the given positions.
 * @param amplitude the amplitude of the distribution.
 * @param mean the mean of the distribution.
 * @param stdev the standard deviation of the distribution.
 * @param positions the positions at which to sample the distribution.
 */
export function gaussian(amplitude: number, mean: number, stdev: number, positions: number[]): number[] {
    const a = amplitude / (Math.sqrt(2.0 * Math.PI) * stdev);
    const d = 2.0 * stdev * stdev;
    return positions.map(x => a * Math.exp((-(x - mean) * (x - mean)) / d));
}

/**
 * Smooths the input data with a normal kernel density estimator.
 * @param input: the input vector to smooth.
 * @param sampleDomain: the domain over which to smooth; defaults to the domain of the input data.
 * @param bandWidth: the standard deviation of the kernel; defaults to 1/20 of the domain width.
 * @param sampleRate: the rate at which to sample the density; defaults to 1/100 of the domain width.
 */
export function standardNormalKernel(
    input: number[],
    sampleDomain: number[] = [],
    bandWidth: number = -1.0,
    sampleCount: number = 100
): number[] {
    // Determine the minimum and maximum from the input or sampleDomain
    const minimum = sampleDomain.length === 2 ? sampleDomain[0] : Math.min(...input);
    const maximum = sampleDomain.length === 2 ? sampleDomain[1] : Math.max(...input);

    // Set default bandwidth if not provided
    if (bandWidth === -1.0) bandWidth = (maximum - minimum) / 30.0;

    // Generate exactly 100 sample positions
    const samplePositions = Array.from(
        { length: sampleCount },
        (_, i) => minimum + i * (maximum - minimum) / (sampleCount - 1)
    );

    // Initialize the density array
    const densities = new Array(sampleCount).fill(0);

    // Calculate the density for each input value
    input.forEach(value => {
        const weights = gaussian(Math.sqrt(2.0 * Math.PI) * bandWidth, value, bandWidth, samplePositions);
        weights.forEach((weight, i) => {
            densities[i] += weight;
        });
    });

    return densities;
}

export function binKernelDensity(
    data: number[],
    bins: number = 50
): { value: number, count: number }[] {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const binWidth = (max - min) / bins;
    const binnedData: { value: number, count: number }[] = Array.from({ length: bins }, (_, i) => ({
        value: min + i * binWidth + binWidth / 2,
        count: 0,
    }));

    data.forEach(value => {
        const binIndex = Math.floor((value - min) / binWidth);
        const clampedIndex = Math.min(binIndex, bins - 1); // Ensure last value fits in the last bin
        binnedData[clampedIndex].count += 1;
    });

    return binnedData;
}
