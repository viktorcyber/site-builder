import { isServer, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

let browserQueryClient: QueryClient | undefined = undefined;

export function getQueryClient() {
  if (isServer) {
    return queryClient;
  } else {
    if (!browserQueryClient) browserQueryClient = queryClient;
    return browserQueryClient;
  }
}
