import { createRoot } from "react-dom/client";
import { Box, Stack } from "@mui/material";
import ViolinBoxPlot from "./components/ViolinPlot/violinPlot";
import { useRef } from "react";
import { sp1AdiposeSub, sp1AdiposeVisceral, sp1EsophagusMucosa, sp1KidneyMedulla, wholeBlood, sp1Screen } from "./components/ViolinPlot/testData";

function App() {

  const ref = useRef()
  
  const distributions = [
    {
      data: sp1AdiposeSub.map(value => ({ value })),
      label: "Adipose - Subcutaneous",
    },
    {
      data: sp1AdiposeVisceral.map(value => ({ value })),
      label: "Adipose - Visceral (Omentum)"
    },
    {
      data: sp1KidneyMedulla.map(value => ({ value })),
      label: "Kidney - Medulla"
    },
    {
      data: sp1EsophagusMucosa.map(value => ({ value })),
      label: "Esophagus - Mucosa"
    },
    {
      data: wholeBlood.map(value => ({ value })),
      label: "Whole Blood"
    },
  ]

  return (
    <Stack>
      <Box
        padding={1}
        sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 1, position: "relative", width: "1600px", height: "800px" }}
        mt={2}
        mb={2}
        ml={10}
        ref={ref}
      >
        <ViolinBoxPlot
          distributions={sp1Screen}
          loading={false}
          leftAxisLabel="SCREEN Gene Expression (SP1)"
          labelOrientation="rightDiagonal"
          violinProps={{
              bandwidth: "scott",
          }}
          crossProps={{
            outliers: "all"
          }}
        />
      </Box>
      <Box
        padding={1}
        sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 1, position: "relative", width: "1600px", height: "800px" }}
        mt={2}
        mb={2}
        ml={10}
        ref={ref}
      >
        <ViolinBoxPlot
          distributions={sp1Screen}
          loading={false}
          leftAxisLabel="SCREEN Gene Expression (SP1)"
          labelOrientation="rightDiagonal"
          violinProps={{
              bandwidth: "silverman",
              showAllPoints: true,
              jitter: 10,
          }}
          crossProps={{
            outliers: "all"
          }}
          onViolinClicked={(distribution) => {
            console.log("Clicked distribution:", distribution);
          }}
          onPointClicked={(point) => {
            console.log("Clicked point:", point);
          }}
        />
      </Box>
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
          leftAxisLabel="GTEX Gene Expression (SP1)"
          labelOrientation="rightDiagonal"
          violinProps={{
              bandwidth: "scott",
          }}
          crossProps={{
            outliers: "all"
          }}
        />
      </Box>
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
          leftAxisLabel="GTEX Gene Expression (SP1)"
          labelOrientation="rightDiagonal"
          violinProps={{
              bandwidth: "silverman",
          }}
          crossProps={{
            outliers: "all"
          }}
        />
      </Box>
    </Stack>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
