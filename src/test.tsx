import { createRoot } from "react-dom/client";
import { Box } from "@mui/material";
import { Violin, ViolinBoxPlotProps } from "./components/ViolinBoxPlot/types";
import ViolinBoxPlot from "./components/ViolinBoxPlot/violinBoxPlot";
import { useRef } from "react";

function generateTestData(): ViolinBoxPlotProps<{ group: string }> {
  const generateViolin = (label: string, color: string): Violin<{ group: string }> => {
    const generateNormalDistribution = (mean: number, stdDev: number, count: number) => {
      return Array.from({ length: count }, () => {
        const u1 = Math.random();
        const u2 = Math.random();
        const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2); // Box-Muller transform
        return Math.round(mean + stdDev * z); // Applying the normal distribution formula
      });
    };

    // Generate data with a normal distribution
    const data = generateNormalDistribution(50, 15, 200); // mean: 50, stdDev: 15, 200 data points

    // To simulate counts of how many times the value appears (for violin plot density), we can use a histogram
    const valueCounts: { value: number, count: number }[] = [];
    const valueMap = new Map<number, number>();

    // Generate the histogram from the data
    data.forEach((value) => {
      valueMap.set(value, (valueMap.get(value) || 0) + 1);
    });

    // Convert the valueMap to an array of objects
    valueMap.forEach((count, value) => {
      valueCounts.push({ value, count });
    });

    return {
      data: valueCounts,
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
