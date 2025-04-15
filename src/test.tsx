import { createRoot } from "react-dom/client";
import { Box, Typography } from "@mui/material";
import { GenomeSearch, Result, ResultType } from "./components/Autocomplete";
import { useState } from "react";

function App() {
  const query: ResultType[] = ["Gene"]
  const [result, setResult] = useState<Result>()
  return (
    <Box display="flex" flexDirection="column" justifyContent="start" alignItems="center" height="100vh" width="100%">
      <Typography variant="h2">{query.join(", ")}</Typography>
      <GenomeSearch
        assembly="GRCh38"
        queries={query}
        showiCREFlag
        geneVersion={29}
        onSearchSubmit={(result) => {
          setResult(result)
        }}
        sx={{ width: "400px" }}
      />
      {result && (
        <>
          <Typography variant="h3">{result.type}</Typography>
          <Typography variant="h3">{result?.title}</Typography>
          <Typography variant="h4">{result?.description}</Typography>
          <Typography variant="h5">{result?.domain.chromosome}:{result?.domain.start}-{result?.domain.end}</Typography>
        </>
      )}
    </Box>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
