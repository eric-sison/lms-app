"use client";

import { FunctionComponent, createContext, useContext, useEffect, useState } from "react";
import { TrainingTabStatus } from "./TrainingTabStatus";
import { TrainingSourceButtonGroup } from "./TrainingSourceButtonGroup";
import { Training } from "@lms/types/training";
import { redirect, useSearchParams } from "next/navigation";
import { TrainingCardGrid } from "./TrainingCardGrid";
import { TrainingPageHeader } from "./TrainingPageHeader";

type TrainingPageProps = {
  trainings: Training[];
};

const TrainingContext = createContext<TrainingPageProps>({ trainings: [] });

export const TrainingPage: FunctionComponent<TrainingPageProps> = ({ trainings }) => {
  const filter = useSearchParams().get("filter");

  if (filter === null) redirect("/trainings?filter=all");

  return (
    <TrainingContext.Provider value={{ trainings }}>
      <TrainingTabStatus />

      <main className="px-10 pt-10 space-y-10">
        <TrainingPageHeader />
        <TrainingCardGrid />
      </main>
    </TrainingContext.Provider>
  );
};

export const useTrainings = () => {
  const { trainings } = useContext(TrainingContext);

  const [filteredTrainings, setFilteredTrainings] = useState(trainings);

  const filter = useSearchParams().get("filter");

  useEffect(() => {
    if (filter) {
      if (filter === "all") {
        setFilteredTrainings(trainings);
      }

      if (filter === "upcoming") {
        const upcoming = trainings.filter((training) =>
          training.status.includes("Upcoming")
        );
        setFilteredTrainings(upcoming);
      }

      if (filter === "ongoing") {
        const ongoing = trainings.filter((training) =>
          training.status.includes("Ongoing")
        );
        setFilteredTrainings(ongoing);
      }

      if (filter === "completed") {
        const completed = trainings.filter((training) =>
          training.status.includes("Completed")
        );
        setFilteredTrainings(completed);
      }
    }
  }, [filter, trainings]);

  if (trainings === undefined) throw Error("Trainings not defined");

  return { trainings, filteredTrainings };
};
