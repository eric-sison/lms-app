import Image from "next/image";
import { FunctionComponent } from "react";

export const SidebarCardHeader: FunctionComponent = () => {
  return (
    <div className="mb-7 px-1 flex items-center gap-3">
      <Image
        src="/mock/profile5.jpg"
        alt="profile"
        width={500}
        height={500}
        className="inline-block h-12 w-12 rounded-full object-cover shrink-0 border-2"
      />

      <section className="leading-5">
        <h3 className="text-zinc-200 font-medium">Eric C. Sison</h3>
        <p className="text-zinc-400 text-sm">ericsison@gscwd.com</p>
      </section>
    </div>
  );
};
