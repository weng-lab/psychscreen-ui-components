import { createRoot } from "react-dom/client";
import { Box, Button, Stack, Typography } from "@mui/material";
import ViolinBoxPlot from "./components/ViolinPlot/violinPlot";
import { useRef } from "react";
import { sp1AdiposeSub, sp1AdiposeVisceral, sp1EsophagusMucosa, sp1KidneyMedulla, wholeBlood, sp1Screen } from "./components/ViolinPlot/testData";
import { ScatterPlot } from "./components/ScatterPlot";

type Point = {
  x: number;
  y: number;
  color: string;
  shape: "circle" | "triangle";
};

function App() {

  const ref = useRef()
  const svgRef = useRef<SVGSVGElement>(null);

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

  const scatterData: Point[] = [
    { x: 1, y: 2, color: 'red', shape: "circle" },
    { x: 3, y: 4, color: 'blue', shape: "circle" },
    { x: 5, y: 6, color: 'green', shape: "circle" },
];

  const downloadSVG = (ref: React.RefObject<SVGSVGElement>, filename: string) => {
    if (!ref.current) {
      console.error('SVG reference is not set.');
      return;
    }
    
    const serializer = new XMLSerializer();
    const source = serializer.serializeToString(ref.current);
    const blob = new Blob([source], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${filename}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <Stack>
      <Button onClick={() => downloadSVG(svgRef, 'test')}>DownloadSVG</Button>
      <Box
        padding={1}
        sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 1, position: "relative", width: "1600px", height: "800px" }}
        mt={2}
        mb={2}
        ml={10}
      >
        <ScatterPlot
        pointData={scatterData}
        loading={false}
        leftAxisLabel="Y-Axis Label"
        bottomAxisLabel="X-Axis Label"
        disableTooltip={true}
        initialState= {{
            minimap: {
                open: true,
            },
            controls: {
                selectionType: "pan"
            }
        }}
        svgRef={svgRef}
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
          axisLabel="SCREEN Gene Expression (SP1)"
          labelOrientation="vertical"
          violinProps={{
            bandwidth: "scott",
            // showAllPoints: true,
            // jitter: 10,
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
          pointTooltipBody={(point) => {
            return (
                <Box sx={{ textAlign: "center", p: 1 }}>
                  <Typography>{point.value}</Typography>
                </Box>
            );
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
          axisLabel="Factorbook Tissues"
          labelOrientation="rightDiagonal"
          violinProps={{
            bandwidth: "scott",
          }}
        />
      </Box>
    </Stack>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
