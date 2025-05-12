import * as d3 from "d3";

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
export const calculateBoxStats = (data: number[], includeOutliers: boolean) => {

    data.sort((a, b) => a - b);

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
    const { firstQuartile, thirdQuartile } = getQuartiles(data);
    const med = median(data);

    // Calculate the IQR and whiskers
    const iqr = thirdQuartile - firstQuartile;
    const lowerWhisker = firstQuartile - 1.5 * iqr;
    const upperWhisker = thirdQuartile + 1.5 * iqr;

    // Calculate outliers (values outside of the whiskers)
    const outliers = data.filter(val => val < lowerWhisker || val > upperWhisker);

    // Min and max
    const filteredValues = includeOutliers ? data.filter(val => val >= lowerWhisker && val <= upperWhisker) : data;
    const min = filteredValues[0];
    const max = filteredValues[filteredValues.length - 1];

    return { min, max, firstQuartile, thirdQuartile, median: med, outliers };
    
};

export function kernelDensityEstimator(
    kernel: (distance: number) => number,
    X: number[]
): (data: number[]) => { value: number, count: number }[] {
    return (data: number[]) => {
        // Calculate the raw count (density) for each tick
        const rawCount = X.map((x) => ({
            value: x,
            count: d3.mean(data, (v) => kernel(x - v)) || 0,
        }));

        // Scale the counts to taper to zero at the min and max
        const min = Math.min(...data);
        const max = Math.max(...data);

        // Apply the scaling to count values
        return rawCount.map(point => {
            const taperFactor = (point.value - min) * (max - point.value);
            return {
                value: point.value,
                count: taperFactor > 0 ? point.count * taperFactor : 0,
            };
        });
    };
}


export function epanechnikov(bandwidth: number){
    return (x: number) => Math.abs(x /= bandwidth) <= 1 ? 0.75 * (1 - x * x) / bandwidth : 0;
}


