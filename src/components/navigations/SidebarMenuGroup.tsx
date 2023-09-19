import { FunctionComponent, ReactNode } from "react";

type SidebarMenuGroupProps = {
  children: ReactNode | ReactNode[];
  header?: string;
};

export const SidebarMenuGroup: FunctionComponent<SidebarMenuGroupProps> = ({
  children,
  header,
}) => {
  return (
    <div className="pt-5">
      <header className="pb-1 px-4">
        <label className="text-zinc-300/60 font-semibold tracking-wider text-sm">{header}</label>
      </header>
      {children}
    </div>
  );
};
