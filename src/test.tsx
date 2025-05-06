import { createRoot } from "react-dom/client";
import { Box } from "@mui/material";
import { Violin } from "./components/ViolinBoxPlot/types";
import ViolinBoxPlot from "./components/ViolinBoxPlot/violinBoxPlot";
import { useRef } from "react";
import { densityAtPoints } from "./components/ViolinBoxPlot/standardNormalKernel";

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


const testData = (
  [{
      label: "adipose",
      data: [
        0.436162647040756, 
        0.4183012913197454, 
        0.13353890837021754, 
        0.6106601630898799, 
        0.4116197059632301, 
        0.9116901587538612,
      ]
    },{
      label: "adrenal gland",
      data: [
        0.9585638832219674, 
        0.9885589568786155, 
        0.3944516808262163, 
        0.5037906830571811, 
        0.3263358609287514, 
        0.9786369483844743, 
        0.9479236198317263, 
        1.0546130545568877, 
        0.877371345869774,
      ]
    },{
      label: "blood vessel",
      data: [
        0.7767011839884108, 
        1.0784568180532925, 
        0.9439888750737718, 
        0.5786392099680723, 
        0.5693739096150459, 
        0.5611013836490559, 
        0.23299611039215382,
      ]
    },{
      label: "brain",
      data: [
        1.0584260244570054, 
        1.0301947853567512, 
        1.0441476208787228, 
        1.1058506743851435, 
        1.0599418880619547, 
        1.0261245167454502, 
        1.184975190698261, 
        1.1439511164239635, 
        1.1649473726218416, 
        1.0930713063760635, 
        1.0199466816788423, 
        1.0273496077747566, 
        1.0318122713303703, 
        1.055378331375, 
        1.0969100130080565, 
        1.1287222843384268, 
        1.048053173115609, 
        1.1199154102579911, 
        1.065206128054312, 
        1.0685568950723632, 
        1.1319392952104246, 
        1.0021660617565076, 
        1.044539760392411, 
        1.080987046910887, 
        1.1737688231366499,
      ]
    },
  ]
);

function App() {
  const ref = useRef()
  const data = generateTestData()

  const input = [0.43, 0.41, 0.13, 0.61, 0.41, 0.91];
  const violinData = densityAtPoints(input, input);

  // const data: Violin<T> = {
  //   label: "dsjhfv",
  //   data: violinData
  // }

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
        leftAxisLabel="aklhsdbgfdabdhf"
      />
    </Box>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
