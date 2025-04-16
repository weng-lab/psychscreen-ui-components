import { createRoot } from "react-dom/client";
import { Box } from "@mui/material";
import { GenomeSearch } from "./components/Autocomplete";

function App() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="50vh"
      width="100%"
    >
      <GenomeSearch
        assembly="GRCh38"
        queries={["Gene", "iCRE", "cCRE"]}
        onSearchSubmit={(result) => {
          console.log(result);
        }}
        sx={{ width: "400px" }}
      />
    </Box>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
