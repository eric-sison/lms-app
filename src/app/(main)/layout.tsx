import { PageContent } from "@lms/components/navigations/PageContent";
import { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return <PageContent>{children}</PageContent>;
}
