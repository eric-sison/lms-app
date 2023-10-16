"use client";

import { useLmsClient } from "@lms/components/providers/MyLmsClientProvider";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FunctionComponent } from "react";

export const TrainingTabStatus: FunctionComponent = () => {
  const filter = useSearchParams().get("filter");
  const client = useLmsClient();

  const { data: count } = useQuery({
    queryKey: ["training-count"],
    queryFn: async () => {
      return await client.trainingRoutes().getTrainingCount();
    },
  });

  return (
    <header className="border-b h-[5rem] dark:border-b-zinc-700/50 flex flex-col px-10 dark:bg-zinc-900/30">
      <section className="flex-1">
        <div className="h-full flex items-end space-x-5">
          <section className="flex items-start">
            <Link
              title="View all trainings"
              href="/trainings?filter=all"
              className={`${
                filter === "all" ? " border-b-indigo-600" : " border-b-transparent"
              } border-b-4 text-lg font-medium text-zinc-200 pb-3 px-2`}
            >
              All Trainings
            </Link>
            <p className="border dark:border-zinc-700 dark:bg-zinc-700/80 px-2 rounded-lg py-1 text-xs font-semibold">
              {count?.all}
            </p>
          </section>
          <section className="flex items-start">
            <Link
              title="View upcoming trainings"
              href="/trainings?filter=upcoming"
              className={`${
                filter === "upcoming" ? " border-b-indigo-600" : " border-b-transparent"
              } border-b-4 text-lg font-medium text-zinc-200 pb-3 px-2`}
            >
              Upcoming
            </Link>
            <p className="border dark:border-zinc-700 dark:bg-zinc-700/80 px-2 rounded-lg py-1 text-xs font-semibold">
              {count?.upcoming}
            </p>
          </section>
          <section className="flex items-start">
            <Link
              title="View ongoing trainings"
              href="/trainings?filter=ongoing"
              className={`${
                filter === "ongoing" ? " border-b-indigo-600" : " border-b-transparent"
              } border-b-4 text-lg font-medium text-zinc-200 pb-3 px-2`}
            >
              Ongoing
            </Link>
            <p className="border dark:border-zinc-700 dark:bg-zinc-700/80 px-2 rounded-lg py-1 text-xs font-semibold">
              {count?.ongoing}
            </p>
          </section>
          <section className="flex items-start">
            <Link
              title="View completed trainings"
              href="/trainings?filter=completed"
              className={`${
                filter === "completed" ? " border-b-indigo-600" : " border-b-transparent"
              } border-b-4 text-lg font-medium text-zinc-200 pb-3 px-2`}
            >
              Completed
            </Link>
            <p className="border dark:border-zinc-700 dark:bg-zinc-700/80 px-2 rounded-lg py-1 text-xs font-semibold">
              {count?.completed}
            </p>
          </section>
        </div>
      </section>
    </header>
  );
};
