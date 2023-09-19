import { PageLayout } from "@lms/components/layouts/PageLayout";
import { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return <PageLayout>{children}</PageLayout>;
}
