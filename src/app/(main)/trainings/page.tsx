import { TrainingCardClassic } from "@lms/components/features/training/TrainingCardClassic";
import { LmsClient } from "@lms/_sdk/client/LmsClient";
import { PageProps } from "../../../../.next/types/app/(main)/trainings/page";
import { redirect } from "next/navigation";
import { TrainingCardGrid } from "@lms/components/features/training/TrainingCardGrid";
import { EmptyTraining } from "@lms/components/features/training/EmptyTraining";
import Link from "next/link";

const client = LmsClient.getInstance();

export default async function Trainings({ searchParams }: PageProps) {
  const trainings = await client.trainingRoutes().getAllTrainings();

  const upcoming = trainings.filter((training) => training.status.includes("Upcoming"));
  const ongoing = trainings.filter((training) => training.status.includes("Ongoing"));
  const completed = trainings.filter((training) => training.status.includes("Completed"));

  if (searchParams.filter === undefined) redirect("/trainings?filter=all");

  return (
    <div className="">
      <header className="border-b h-28 dark:border-b-zinc-700 flex flex-col px-10">
        {/* <section className="space-y-1">
          <p className="text-sm text-zinc-400 font-medium">Dashboard / Trainings</p>
          <h3 className="text-3xl font-semibold text-zinc-300">Trainings & Seminars</h3>
        </section> */}

        <section className="flex-1">
          <div className="h-full flex items-end space-x-5">
            <section className="flex items-start">
              <Link
                title="View all trainings"
                href="/trainings?filter=all"
                className={`${
                  searchParams.filter === "all"
                    ? " border-b-indigo-600"
                    : " border-b-transparent"
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
                  searchParams.filter === "upcoming"
                    ? " border-b-indigo-600"
                    : " border-b-transparent"
                } border-b-4 font-medium text-zinc-200 pb-3 px-2`}
              >
                Upcoming
              </Link>
              <p className="border dark:border-zinc-700 dark:bg-zinc-700/80 px-2 rounded-lg py-1 text-xs font-semibold">
                {upcoming.length}
              </p>
            </section>
            <section className="flex items-start">
              <Link
                title="View ongoing trainings"
                href="/trainings?filter=ongoing"
                className={`${
                  searchParams.filter === "ongoing"
                    ? " border-b-indigo-600"
                    : " border-b-transparent"
                } border-b-4 font-medium text-zinc-200 pb-3 px-2`}
              >
                Ongoing
              </Link>
              <p className="border dark:border-zinc-700 dark:bg-zinc-700/80 px-2 rounded-lg py-1 text-xs font-semibold">
                {ongoing.length}
              </p>
            </section>
            <section className="flex items-start">
              <Link
                title="View completed trainings"
                href="/trainings?filter=completed"
                className={`${
                  searchParams.filter === "completed"
                    ? " border-b-indigo-600"
                    : " border-b-transparent"
                } border-b-4 font-medium text-zinc-200 pb-3 px-2`}
              >
                Completed
              </Link>
              <p className="border dark:border-zinc-700 dark:bg-zinc-700/80 px-2 rounded-lg py-1 text-xs font-semibold">
                {completed.length}
              </p>
            </section>
          </div>
        </section>
      </header>

      <main className="px-10 py-5">
        {/**
         * something here
         */}
      </main>

      {searchParams.filter === "all" ? (
        trainings.length === 0 ? (
          <EmptyTraining
            filter={searchParams.filter}
            info="There are no trainings at the moment"
          />
        ) : (
          <TrainingCardGrid>
            {trainings?.map((training, index) => (
              <TrainingCardClassic key={index} training={training} />
            ))}
          </TrainingCardGrid>
        )
      ) : searchParams.filter === "upcoming" ? (
        upcoming.length === 0 ? (
          <EmptyTraining
            filter={searchParams.filter}
            info="There are no upcoming trainings at the moment"
          />
        ) : (
          <TrainingCardGrid>
            {upcoming?.map((training, index) => (
              <TrainingCardClassic key={index} training={training} />
            ))}
          </TrainingCardGrid>
        )
      ) : searchParams.filter === "ongoing" ? (
        ongoing.length === 0 ? (
          <EmptyTraining
            filter={searchParams.filter}
            info="There are no ongoing trainings at the moment"
          />
        ) : (
          <TrainingCardGrid>
            {ongoing?.map((training, index) => (
              <TrainingCardClassic key={index} training={training} />
            ))}
          </TrainingCardGrid>
        )
      ) : searchParams.filter === "completed" ? (
        completed.length === 0 ? (
          <EmptyTraining
            filter={searchParams.filter}
            info="There are no completed trainings yet"
          />
        ) : (
          <TrainingCardGrid>
            {completed?.map((training, index) => (
              <TrainingCardClassic key={index} training={training} />
            ))}
          </TrainingCardGrid>
        )
      ) : null}
    </div>
  );
}
