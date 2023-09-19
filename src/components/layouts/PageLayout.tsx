"use client";

import { FunctionComponent, ReactNode } from "react";
import { Topbar } from "../navigations/Topbar";
import { PageContent } from "../navigations/PageContent";

type PageLayoutProps = {
  children: ReactNode | ReactNode[];
};

export const PageLayout: FunctionComponent<PageLayoutProps> = ({ children }) => {
  return (
    <>
      <PageContent>{children}</PageContent>
    </>
  );
};
