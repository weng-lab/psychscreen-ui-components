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
    sampleRate: number = -1.0
): number[] {
    const minimum = 2 === sampleDomain.length ? sampleDomain[0] : Math.min(...input);
    const maximum = 2 === sampleDomain.length ? sampleDomain[1] : Math.max(...input);
    if (-1.0 === bandWidth) bandWidth = (maximum - minimum) / 30.0;
    if (-1.0 === sampleRate) sampleRate = (maximum - minimum) / 100.0;
    const samplePositions: number[] = [];
    for (let i = minimum + sampleRate; i <= maximum; i += sampleRate) samplePositions.push(i);
    const retval = samplePositions.map(x => 0.0);
    input.forEach(x => {
        const values = gaussian(Math.sqrt(2.0 * Math.PI) * bandWidth, x, bandWidth, samplePositions);
        values.forEach((x, i) => {
            retval[i] += x;
        });
    });
    return retval;
}

export function densityAtPoints(
    input: number[],
    samplePositions: number[],
    bandWidth: number = -1
  ): { value: number, count: number }[] {
    const min = Math.min(...input);
    const max = Math.max(...input);
    if (bandWidth === -1) bandWidth = (max - min) / 30;
  
    const retval = samplePositions.map(() => 0);
    input.forEach(x => {
      const values = gaussian(
        Math.sqrt(2.0 * Math.PI) * bandWidth,
        x,
        bandWidth,
        samplePositions
      );
      values.forEach((v, i) => {
        retval[i] += v;
      });
    });
  
    return samplePositions.map((value, i) => ({
      value,
      count: Math.round(retval[i] * 100)
    }));
  }