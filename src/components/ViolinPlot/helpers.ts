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
export const calculateBoxStats = (data: number[], outlierType: string) => {

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
    const outliers = outlierType === "none"
        ? []
        : outlierType === "top"
            ? data.filter(val => val > upperWhisker)
            : outlierType === "bottom"
                ? data.filter(val => val < lowerWhisker)
                : data.filter(val => val < lowerWhisker || val > upperWhisker);

    // Min and max
    const min = data[0];
    const max = data[data.length - 1];

    return { min, max, firstQuartile, thirdQuartile, median: med, outliers };
    
};

export function kernelDensityEstimator(
    kernel: (distance: number) => number,
    X: number[]
): (data: number[]) => { value: number, count: number }[] {
    return (data: number[]) => {
        return X.map((x) => ({
            value: x,
            count: d3.mean(data, (v) => kernel(x - v)) || 0,
        }));
    };
}

export function gaussian(bandwidth: number): (x: number) => number {
    const normalizationFactor = 1 / (bandwidth * Math.sqrt(2 * Math.PI));
    return (x) => normalizationFactor * Math.exp(-0.5 * Math.pow(x / bandwidth, 2));
}

export function scottRule(data: number[]) {
    const n = data.length;
    if (n === 0) {
      return 0;
    }
  
    const mean = data.reduce((a, b) => a + b, 0) / n;
    const variance = data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / data.length;
    const stdDev = Math.sqrt(variance)
    const binWidth = 3.5 * stdDev / Math.pow(n, 1/3);
    return binWidth;
  }

  export function silvermanRule(data: number[]) {
    const n = data.length;
    if (n === 0) return 0;

    const mean = data.reduce((a, b) => a + b, 0) / n;
    const variance = data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / n;
    const stdDev = Math.sqrt(variance);

    //calc iqr
    const sortedData = data.slice().sort((a, b) => a - b);
    const q1 = sortedData[Math.floor((n - 1) * 0.25)];
    const q3 = sortedData[Math.floor((n - 1) * 0.75)];
    const iqr = q3 - q1;

    const bandwidth = 0.9 * Math.min(stdDev, iqr / 1.34) * Math.pow(n, -1 / 5);
    
    //ensure a positive result even if quartiles coincide
    return Math.max(bandwidth, 1e-10);
}
