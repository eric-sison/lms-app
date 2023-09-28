"use client";

import { LmsClient } from "@lms/_sdk/client/LmsClient";
import { FunctionComponent, ReactNode, createContext, useContext } from "react";

type MyLmsClientProviderProps = {
  children: ReactNode | ReactNode[];
};

const MyClientProviderContext = createContext<LmsClient | undefined>(undefined);

export const MyLmsClientProvider: FunctionComponent<MyLmsClientProviderProps> = ({ children }) => {
  return (
    <MyClientProviderContext.Provider value={LmsClient.getInstance()}>
      {children}
    </MyClientProviderContext.Provider>
  );
};

export const useLmsClient = () => {
  const lmsClient = useContext(MyClientProviderContext);

  if (lmsClient === undefined) throw Error("LMS Client is undefined");

  return lmsClient;
};
