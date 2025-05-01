import { createRoot } from "react-dom/client";
import { Box } from "@mui/material";
import { Violin, ViolinBoxPlotProps } from "./components/ViolinBoxPlot/types";
import ViolinBoxPlot from "./components/ViolinBoxPlot/violinBoxPlot";
import { useRef } from "react";

function generateTestData(): ViolinBoxPlotProps<{ group: string }> {

  const generateViolin = (label: string, color: string): Violin<{ group: string }> => {
    const generateDistribution = (mean: number, stdDev: number, numBins: number, outlierFactor: number = 3) => {
      const counts: { value: number, count: number }[] = [];
      const binWidth = stdDev / 2; // Adjust the bin width to fit the distribution

      // Generate values centered around the mean, with a normal distribution
      for (let i = 0; i < numBins; i++) {
        const value = mean + (i - numBins / 2) * binWidth;
        const count = Math.max(0, Math.round(Math.exp(-Math.pow((value - mean) / stdDev, 2)) * 100)); // Gaussian-like distribution
        counts.push({ value, count });
      }

      // Add outliers to the distribution
      const numOutliers = Math.floor(Math.random() * 5) + 3; // Randomly decide how many outliers to add (3 to 7 outliers)
      for (let i = 0; i < numOutliers; i++) {
        const outlierValue = mean + (Math.random() * 2 - 1) * outlierFactor * stdDev; // Random outlier values
        const outlierCount = Math.floor(Math.random() * 3) + 1; // Random count for each outlier
        counts.push({ value: outlierValue, count: outlierCount });
      }

      return counts;
    };

    // Generating three distributions with different means and stdDev for variety
    const dataA = generateDistribution(10, 3, 30);
    const dataB = generateDistribution(15, 4, 30);
    const dataC = generateDistribution(20, 5, 30);

    return {
      data: label === 'Group A' ? dataA : label === 'Group B' ? dataB : dataC,
      label,
      color,
      width: 30,
      metaData: { group: label },
    };
  };

  return {
    loading: false,
    leftAxisLabel: 'Expression Level',
    violins: [
      generateViolin('Group A', '#4f46e5'),
      generateViolin('Group B', '#16a34a'),
      generateViolin('Group C', '#dc2626'),
    ],
  };
}

function App() {
  const data = generateTestData()
  const ref = useRef()

  return (
    <Box
      padding={1}
      sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 1, position: "relative", width: "1600px", height: "800px" }}
      mt={2}
      mb={2}
      ml={10}
      ref={ref}
    >
      <ViolinBoxPlot
        violins={data.violins}
        loading={data.loading}
      />
    </Box>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
