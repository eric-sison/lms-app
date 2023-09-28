"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FunctionComponent } from "react";
import { useTrainings } from "./TrainingPage";
import { useQuery } from "@tanstack/react-query";
import { useLmsClient } from "@lms/components/providers/MyLmsClientProvider";

export const TrainingTabStatus: FunctionComponent = () => {
  const { trainings } = useTrainings();

  const filter = useSearchParams().get("filter");

  const client = useLmsClient();

  const { data: upcoming, isLoading: upcomingLoading } = useQuery({
    queryKey: ["upcoming-count"],
    queryFn: async () => {
      return await client
        .trainingRoutes()
        .getTrainingCountByFilter({ params: "upcoming" });
    },
  });

  const { data: ongoing, isLoading: ongoingLoading } = useQuery({
    queryKey: ["ongoing-count"],
    queryFn: async () => {
      return await client
        .trainingRoutes()
        .getTrainingCountByFilter({ params: "ongoing" });
    },
  });

  const { data: completed, isLoading: completedLoading } = useQuery({
    queryKey: ["completed-count"],
    queryFn: async () => {
      return await client
        .trainingRoutes()
        .getTrainingCountByFilter({ params: "completed" });
    },
  });

  return (
    <header className="border-b h-[5rem] dark:border-b-zinc-700 flex flex-col px-10">
      <section className="flex-1">
        <div className="h-full flex items-end space-x-5">
          <section className="flex items-start">
            <Link
              title="View all trainings"
              href="/trainings?filter=all"
              className={`${
                filter === "all" ? " border-b-indigo-600" : " border-b-transparent"
              } border-b-4 font-medium text-zinc-200 pb-3 px-2`}
            >
              All Trainings
            </Link>
            <p className="border dark:border-zinc-700 dark:bg-zinc-700/80 px-2 rounded-lg py-1 text-xs font-semibold">
              {trainings.length}
            </p>
          </section>
          <section className="flex items-start">
            <Link
              title="View upcoming trainings"
              href="/trainings?filter=upcoming"
              className={`${
                filter === "upcoming" ? " border-b-indigo-600" : " border-b-transparent"
              } border-b-4 font-medium text-zinc-200 pb-3 px-2`}
            >
              Upcoming
            </Link>
            {upcomingLoading ? (
              <div className="ml-[0.35rem] h-5 w-5 border-4 dark:border-l-zinc-500 dark:border-y-zinc-500 border-r-transparent rounded-full animate-spin" />
            ) : (
              <p className="border dark:border-zinc-700 dark:bg-zinc-700/80 px-2 rounded-lg py-1 text-xs font-semibold">
                {upcoming}
              </p>
            )}
          </section>
          <section className="flex items-start">
            <Link
              title="View ongoing trainings"
              href="/trainings?filter=ongoing"
              className={`${
                filter === "ongoing" ? " border-b-indigo-600" : " border-b-transparent"
              } border-b-4 font-medium text-zinc-200 pb-3 px-2`}
            >
              Ongoing
            </Link>
            {ongoingLoading ? (
              <div className="ml-[0.3rem] h-5 w-5 border-4 dark:border-l-zinc-500 dark:border-y-zinc-500 border-r-transparent rounded-full animate-spin" />
            ) : (
              <p className="border dark:border-zinc-700 dark:bg-zinc-700/80 px-2 rounded-lg py-1 text-xs font-semibold">
                {ongoing}
              </p>
            )}
          </section>
          <section className="flex items-start">
            <Link
              title="View completed trainings"
              href="/trainings?filter=completed"
              className={`${
                filter === "completed" ? " border-b-indigo-600" : " border-b-transparent"
              } border-b-4 font-medium text-zinc-200 pb-3 px-2`}
            >
              Completed
            </Link>
            {completedLoading ? (
              <div className="ml-[0.35rem] h-5 w-5 border-4 dark:border-l-zinc-500 dark:border-y-zinc-500 border-r-transparent rounded-full animate-spin" />
            ) : (
              <p className="border dark:border-zinc-700 dark:bg-zinc-700/80 px-2 rounded-lg py-1 text-xs font-semibold">
                {completed}
              </p>
            )}
          </section>
        </div>
      </section>
    </header>
  );
};
