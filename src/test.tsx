import { createRoot } from "react-dom/client";
import { Stack } from "@mui/material";
import { MiniMapProps, ScatterPlot } from "./components/ScatterPlot";

type Point = {
  x: number;
  y: number;
  color: string;
  shape: "circle" | "triangle";
};

// Example data for the scatter plot
const scatterData: Point[] = [
  { x: 1, y: 2, color: 'red', shape: "circle" },
  { x: 3, y: 4, color: 'blue', shape: "circle" },
  { x: 5, y: 6, color: 'green', shape: "circle" },
];

// Mock for the map prop
const miniMap: MiniMapProps = {
  position: { right: 50, bottom: 50 }
};

function App() {
  return (
    <Stack height={"57vh"} width={"70vw"} padding={1} sx={{ border: '2px solid', borderColor: 'grey.400', borderRadius: '8px' }}>
      <ScatterPlot
        pointData={scatterData}
        loading={false}
        leftAxisLabel="sdgc"
        bottomAxisLabel="s.khdcvsvb"
        miniMap={miniMap}
        disableTooltip
        initialState={
          {
            minimap: {
              open: true,
            },
            controls: {
              selectionType: "pan"
            }
          }
        }
      />
      </Stack>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
