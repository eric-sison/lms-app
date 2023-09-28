"use client";

import { ThemeProvider } from "next-themes";
import { FunctionComponent, ReactNode } from "react";

type MyThemeProviderProps = {
  children: ReactNode | ReactNode[];
};

export const MyThemeProvider: FunctionComponent<MyThemeProviderProps> = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={true}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};
