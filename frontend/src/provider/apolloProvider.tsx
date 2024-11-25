"use client";

import type { ReactNode } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { SUBGRAPH_PROD_URL } from "../../constants";

const client = new ApolloClient({
  uri: SUBGRAPH_PROD_URL,
  cache: new InMemoryCache(),
});

const ApolloClientProvider = ({ children }: { children: ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
