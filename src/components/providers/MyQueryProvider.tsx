"use client";

import { useDevToolStore } from "@lms/utils/zustand/devToolStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import dynamic from "next/dynamic";
import React, { FunctionComponent, ReactNode, useEffect, useState } from "react";

type MyQueryProviderProps = {
  children: ReactNode | ReactNode[];
};

const ReactQueryDevToolsProduction = dynamic(() =>
  import("@tanstack/react-query-devtools/production").then((devTool) => ({
    default: devTool.ReactQueryDevtools,
  }))
);

export const MyQueryProvider: FunctionComponent<MyQueryProviderProps> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  const showDevTools = useDevToolStore((state) => state.showDevTools);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen />
      {showDevTools && (
        <React.Suspense fallback={null}>
          <ReactQueryDevToolsProduction />
        </React.Suspense>
      )}
    </QueryClientProvider>
  );
};
