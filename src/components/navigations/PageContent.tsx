"use client";

import { FunctionComponent, ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

type PageContentProps = {
  children: ReactNode | ReactNode[];
};

export const PageContent: FunctionComponent<PageContentProps> = ({ children }) => {
  return (
    <div className="w-full h-screen flex overflow-hidden">
      <Sidebar />

      <main className="bg-white dark:bg-dark-primary w-full flex flex-col overflow-y-auto">
        <Topbar />
        <div className="flex-1">{children}</div>
      </main>
    </div>
  );
};
