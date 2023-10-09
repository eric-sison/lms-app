"use client";

import { useTrainingDetailsTab } from "@lms/utils/zustand/trainingDetailsTabStore";
import { FunctionComponent, useState } from "react";

export const TrainingDetailsTab: FunctionComponent = () => {
  const { tab, setTab } = useTrainingDetailsTab();

  return (
    <header className="border-b h-[5rem] dark:border-b-zinc-700 flex flex-col px-10">
      <section className="flex-1">
        <div className="h-full flex items-end space-x-5">
          <section className="flex items-start">
            <button
              title="View all trainings"
              onClick={() => setTab("details")}
              className={`${
                tab === "details" ? " border-b-indigo-600" : " border-b-transparent"
              } border-b-4 font-medium text-zinc-200 pb-3 px-2`}
            >
              Training Details
            </button>
          </section>
          <section className="flex items-start">
            <button
              title="View upcoming trainings"
              onClick={() => setTab("participants")}
              className={`${
                tab === "participants" ? " border-b-indigo-600" : " border-b-transparent"
              } border-b-4 font-medium text-zinc-200 pb-3 px-2`}
            >
              Participants
            </button>
          </section>
          <section className="flex items-start">
            <button
              onClick={() => setTab("requirements")}
              title="View ongoing trainings"
              className={`${
                tab === "requirements" ? " border-b-indigo-600" : " border-b-transparent"
              } border-b-4 font-medium text-zinc-200 pb-3 px-2`}
            >
              Requirements
            </button>
          </section>
          <section className="flex items-start">
            <button
              onClick={() => setTab("materials")}
              title="View completed trainings"
              className={`${
                tab === "materials" ? " border-b-indigo-600" : " border-b-transparent"
              } border-b-4 font-medium text-zinc-200 pb-3 px-2`}
            >
              Course Materials
            </button>
          </section>
        </div>
      </section>
    </header>
  );
};
