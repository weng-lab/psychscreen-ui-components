import { createRoot } from "react-dom/client";
import { Box } from "@mui/material";
import ViolinBoxPlot from "./components/ViolinBoxPlot/violinBoxPlot";
import { useRef } from "react";

function App() {
  const ref = useRef()

  const data = [5, 4, 4, 3, 2, 1, 1, 1]
  const data2 = [7, 2, 6, 7, 7, 7, 7, 8 ,8 ,8 ,8 ,9, 9, 2, 3, 3, 3, 2, 1, 1, 1, 1, 4, 4, 5, 5 ,6, 6, 6, 7, 5, 4, 2,  9, 8, 10, 18]
  const data3 = [
    11.44, 6.88, 17.83, 4.46, 8.68, 8.95, 8.11, 13.21, 0.56, 18.11,
    15.63, 14.69, 2.53, 14.61, 5.69, 17.72, 18.54, 15.96, 14.77, 12.49,
    13.20, 17.28, 1.59, 15.83, 15.59, 2.08, 5.68, 14.84, 3.47, 18.93,
    12.98, 10.97, 15.81, 12.22, 2.85, 16.55, 5.97, 15.92, 16.36, 5.86,
    10.42, 19.95, 12.81, 7.42, 17.02, 17.77, 7.03, 8.06, 16.68, 16.72,
    16.55, 15.90, 13.78, 2.16, 11.13, 10.40, 2.83, 19.01, 9.25, 4.09,
    2.22, 5.28, 4.05, 1.72, 13.25, 13.52, 19.66, 6.94, 12.70, 11.65,
    11.30, 11.82, 4.06, 12.37, 19.93, 12.85, 14.34, 0.03, 11.00, 18.61,
    11.31, 10.84, 18.05, 12.83, 14.60, 6.44, 18.25, 13.02, 14.31, 15.14,
    3.26, 3.26, 0.77, 12.23, 3.49, 16.00, 12.70, 14.30, 8.82, 15.62
  ]
  const data4 = [4, 2]
  
  const distributions = [
    {
      data: data4,
      label: "test 1",
      color: "red"
    },
    {
      data: data2,
      label: "test 2",
      color: "blue"
    },
    {
      data: data3,
      label: "test 3",
      color: "yellow"
    },
    {
      data: data,
      label: "test 4",
      color: "orange"
    }
  ]

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
        distributions={distributions}
        loading={false}
        leftAxisLabel="Left Axis Label"
        outliers
        labelOrientation="leftDiagonal"
      />
    </Box>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
