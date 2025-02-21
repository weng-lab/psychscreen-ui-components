import { Meta, StoryObj } from '@storybook/react';
import SearchBox from './Autocomplete';
import { Domain } from './types';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://factorbook.api.wenglab.org/graphql',
    cache: new InMemoryCache(),
});

const meta = {
    title: 'Autocomplete',
    component: SearchBox,
    decorators: [
        (Story) => (
            <ApolloProvider client={client}>
                <Story />
            </ApolloProvider>
        ),
    ],
} satisfies Meta<typeof SearchBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        assembly: 'GRCh38',
        onSearchSubmit: (d: Domain) => console.log('Going to ', stringifyDomain(d)),
    },
};

function stringifyDomain(d: Domain): string {
    return `${d.chromosome}:${d.start}-${d.end}`;
}

