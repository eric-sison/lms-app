import Image from "next/image";
import { FunctionComponent } from "react";

export const SidebarCardHeader: FunctionComponent = () => {
  return (
    <div className="mb-10 px-1 flex items-center gap-3">
      <Image
        src="/mock/profile5.jpg"
        alt="profile"
        width={500}
        height={500}
        className="inline-block h-12 w-12 rounded-full object-cover shrink-0 border-4"
      />

      <section className="leading-5 w-44">
        <h3 className="text-zinc-200 font-medium">John S. Doe</h3>
        <p className="text-zinc-400 text-sm truncate">john.doe@gscwd.com</p>
      </section>
    </div>
  );
};
