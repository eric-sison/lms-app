"use client";

import { FunctionComponent, ReactNode, createContext, useContext } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type SidebarMenuItemProps = {
  icon: JSX.Element;
  path: string;
  label: string;
  counter?: number;
};

type SidebarMenuItemContextState = {
  targetPath: string;
  currentPath: string;
};

const SidebarMenuItemContext = createContext<SidebarMenuItemContextState>({
  targetPath: "",
  currentPath: "",
});

export const SidebarMenuItem: FunctionComponent<SidebarMenuItemProps> = ({
  icon,
  path,
  label,
  counter,
}) => {
  const pathName = usePathname();

  return (
    <SidebarMenuItemContext.Provider value={{ targetPath: path, currentPath: pathName }}>
      <Link
        role="menuitem"
        href={path}
        className={`${
          pathName.includes(path) && "bg-dark-tertiary"
        } flex items-center justify-between hover:bg-dark-tertiary pl-1 pr-4 rounded-md`}
      >
        <SidebarMenuIndicator />

        <button className="flex items-center gap-[0.9rem] w-full py-2 pl-2">
          {icon}
          <span className="text-zinc-300 tracking-wide">{label}</span>
        </button>

        {counter && <span className="text-zinc-400 text-sm font-medium">{counter}</span>}
      </Link>
    </SidebarMenuItemContext.Provider>
  );
};

const SidebarMenuIndicator: FunctionComponent = () => {
  const { targetPath, currentPath } = useContext(SidebarMenuItemContext);

  return (
    <div
      className={`${
        currentPath.includes(targetPath) ? "bg-indigo-600" : " bg-transparent"
      } w-[0.35rem] h-4 bg-indigo-600 rounded`}
    />
  );
};
