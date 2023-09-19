import { FunctionComponent, ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { useTheme } from "next-themes";

type PageContentProps = {
  children: ReactNode | ReactNode[];
};

export const PageContent: FunctionComponent<PageContentProps> = ({ children }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <main className="bg-white dark:bg-dark-primary w-full p-5">
        <button onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}>{children}</button>
      </main>
    </div>
  );
};
