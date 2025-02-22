import 'react-app-polyfill/ie11';
import * as React from 'react';
import { SearchBox } from '../.';
import { createRoot } from 'react-dom/client';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://factorbook.api.wenglab.org/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <div>
      <ApolloProvider client={client}>
        <SearchBox assembly="GRCh38" onSearchSubmit={() => { }} />
      </ApolloProvider>
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
