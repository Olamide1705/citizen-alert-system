"use client";

import {
  MutationCache,
  QueryClient,
  QueryClientProvider,
  QueryKey,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode, useState } from "react";
import { toast } from "sonner";
import axios from "axios";

declare module "@tanstack/react-query" {
  interface Register {
    mutationMeta: {
      invalidatesQuery?: QueryKey;
      successMessage?: string;
      additionalDescription?: string;
      errorMessage?: string;
    };
    defaultError: Error;
  }
}

export default function QueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => {
    const client = new QueryClient({
      defaultOptions: {
        queries: {
          retry: 1,
          refetchOnWindowFocus: false,
        },
        mutations: {
          retry: 0,
        },
      },
      mutationCache: new MutationCache({
        onSuccess: (_data, _variables, _context, mutation) => {
          if (mutation.meta?.invalidatesQuery) {
            client.invalidateQueries({
              queryKey: mutation.meta.invalidatesQuery,
            });
          }

          if (mutation.meta?.successMessage) {
            toast.success(mutation.meta?.successMessage || "Successful!.", {
              description: mutation.meta?.additionalDescription,
            });
          }
        },
        onError: (error, _variables, _context, mutation) => {
          let description = "Something went wrong";

          if (axios.isAxiosError(error)) {
            description = error.response?.data?.message || error.message;
          } else if (error instanceof Error) {
            description = error.message;
          }

          toast.error(mutation.meta?.errorMessage || "An error occurred", {
            description,
          });
        },
      }),
    });

    return client;
  });

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
