import { createRoot } from "react-dom/client";
import { GenomeSearch, Result } from "./components/Autocomplete";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        width: "100vw",
        marginTop: "100px",
      }}
    >
      <GenomeSearch
        assembly="GRCh38"
        onSearchSubmit={(r: Result) => console.log(r)}
        queries={["Gene", "SNP", "iCRE", "cCRE", "Coordinate"]}
        style={{ width: "400px", height: "45px", paddingBottom: "30px" }}
        defaultResults={[]}
      />
    </Box>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
