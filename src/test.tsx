import { createRoot } from "react-dom/client";
import { GenomeSearch, Result } from "./components/Autocomplete";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { Box } from "@mui/material";
import Fetch from "./fetch";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new ApolloClient({
  uri: "https://screen.api.wenglab.org/graphql",
  cache: new InMemoryCache(),
});

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
            queries={["gene", "snp", "icre", "ccre", "coordinate"]}
            style={{ width: "400px", height: "45px", paddingBottom: "30px" }}
          />
        </Box>
    </QueryClientProvider>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
