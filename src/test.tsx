import { createRoot } from "react-dom/client";
import { Box, Stack } from "@mui/material";
import ViolinBoxPlot from "./components/ViolinPlot/violinPlot";
import { useRef } from "react";
import { sp1AdiposeSub, sp1AdiposeVisceral, sp1EsophagusMucosa, sp1KidneyMedulla, wholeBlood } from "./components/ViolinPlot/testData";

function App() {

  const ref = useRef()
  
  const distributions = [
    {
      data: sp1AdiposeSub,
      label: "Adipose - Subcutaneous"
    },
    {
      data: sp1AdiposeVisceral,
      label: "Adipose - Visceral (Omentum)"
    },
    {
      data: sp1KidneyMedulla,
      label: "Kidney - Medulla"
    },
    {
      data: sp1EsophagusMucosa,
      label: "Esophagus - Mucosa"
    },
    {
      data: wholeBlood,
      label: "Whole Blood"
    },
    {
      data: sp1AdiposeSub,
      label: "Adipose - Subcutaneous2"
    },
    {
      data: sp1AdiposeVisceral,
      label: "Adipose - Visceral (Omentum)2"
    },
    {
      data: sp1KidneyMedulla,
      label: "Kidney - Medulla2"
    },
    {
      data: sp1EsophagusMucosa,
      label: "Esophagus - Mucosa2"
    },
    {
      data: wholeBlood,
      label: "Whole Blood2"
    },
    {
      data: sp1AdiposeSub,
      label: "Adipose - Subcutaneous3"
    },
    {
      data: sp1AdiposeVisceral,
      label: "Adipose - Visceral (Omentum)3"
    },
    {
      data: sp1KidneyMedulla,
      label: "Kidney - Medulla3"
    },
    {
      data: sp1EsophagusMucosa,
      label: "Esophagus - Mucosa3"
    },
    {
      data: wholeBlood,
      label: "Whole Blood3"
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
          distributions={distributions}
          loading={false}
          leftAxisLabel="Left Axis Label"
          labelOrientation="rightDiagonal"
          outliers
        />
      </Box>
    </Stack>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
