"use client";

import { FunctionComponent } from "react";
import { TrainingCard } from "./TrainingCard";
import { useLmsClient } from "@lms/components/providers/MyLmsClientProvider";
import { useQuery } from "@tanstack/react-query";
import { redirect, useSearchParams } from "next/navigation";

export const TrainingCardGrid: FunctionComponent = () => {
  const filter = useSearchParams().get("filter");
  const client = useLmsClient();

  const { data: trainings, isLoading } = useQuery({
    queryKey: ["filtered-trainings", filter],
    queryFn: async () => {
      return await client
        .trainingRoutes()
        .getAllTrainings({ queries: [{ key: "filter", value: filter }] });
    },
    enabled: !!filter,
  });

  if (!trainings && !isLoading) redirect("/trainings/?filter=all");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-y-5 gap-x-5 md:gap-y-7 lg:gap-y-7 xl:gap-y-7">
      {trainings?.map((training, index) => (
        <TrainingCard key={index} training={training} />
      ))}
    </div>
  );
};
