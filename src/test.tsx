import { createRoot } from "react-dom/client";
import { Box, Typography } from "@mui/material";
import { GenomeSearch, ResultType } from "./components/Autocomplete";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState<ResultType[]>(["Gene"]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setQuery(["SNP"]);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="50vh" width="100%">
      <Typography variant="h1">{query.join(", ")}</Typography>
      <GenomeSearch
        assembly="GRCh38"
        queries={query}
        onSearchSubmit={(result) => {
          console.log(result);
        }}
        sx={{ width: "400px" }}
      />
    </Box>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
