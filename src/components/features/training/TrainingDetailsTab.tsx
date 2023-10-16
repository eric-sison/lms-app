"use client";

import { useTrainingDetailsTab } from "@lms/utils/zustand/trainingDetailsTabStore";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FunctionComponent, useState } from "react";

export const TrainingDetailsTab: FunctionComponent = () => {
  //const { tab, setTab } = useTrainingDetailsTab();

  const tab = useSearchParams().get("pos");

  return (
    <header className="border-b h-[5rem] dark:border-b-zinc-700 dark:bg-zinc-900/30 flex flex-col px-10">
      <section className="flex-1">
        <div className="h-full flex items-end space-x-5">
          <section className="flex items-start">
            <Link
              href={"/trainings/details?pos=details"}
              title="View all trainings"
              // onClick={() => setTab("details")}
              className={`${
                tab === "details" ? " border-b-indigo-600" : " border-b-transparent"
              } border-b-4 text-lg font-medium text-zinc-200 pb-3 px-2`}
            >
              Details
            </Link>
          </section>

          <section className="flex items-start">
            <Link
              href={"/trainings/details?pos=materials"}
              title="View completed trainings"
              className={`${
                tab === "materials" ? " border-b-indigo-600" : " border-b-transparent"
              } border-b-4 text-lg font-medium text-zinc-200 pb-3 px-2`}
            >
              Materials
            </Link>
          </section>

          <section className="flex items-start">
            <Link
              href={"/trainings/details?pos=participants"}
              title="View upcoming trainings"
              className={`${
                tab === "participants" ? " border-b-indigo-600" : " border-b-transparent"
              } border-b-4 text-lg font-medium text-zinc-200 pb-3 px-2`}
            >
              Participants
            </Link>
          </section>

          <section className="flex items-start">
            <Link
              href={"/trainings/details?pos=requirements"}
              title="View ongoing trainings"
              className={`${
                tab === "requirements" ? " border-b-indigo-600" : " border-b-transparent"
              } border-b-4 text-lg font-medium text-zinc-200 pb-3 px-2`}
            >
              Requirements
            </Link>
          </section>
        </div>
      </section>
    </header>
  );
};
