import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

// Apollo Client instance for the first GraphQL API
const client1 = new ApolloClient({
  uri: 'http://localhost:3000/api/tasks',
  cache: new InMemoryCache(),
});

// Apollo Client instance for the second GraphQL API
const client2 = new ApolloClient({
  uri: 'http://localhost:3000/api/users',
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client1}>
        {/* Components using the first GraphQL API */}
        <Component {...pageProps} />
      </ApolloProvider>

      <ApolloProvider client={client2}>
        {/* Components using the second GraphQL API */}
        {/* Add your components here */}
      </ApolloProvider>
    </>
  );
}
