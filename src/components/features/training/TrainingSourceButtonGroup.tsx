"use client";

import { FunctionComponent } from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { useTrainingSourceFilterStore } from "@lms/utils/zustand/trainingSrcStore";
//import { useTrainings } from "./TrainingPage";

export const TrainingSourceButtonGroup: FunctionComponent = () => {
  const { source, setSource } = useTrainingSourceFilterStore();

  //const { filteredTrainings } = useTrainings();

  return (
    <ToggleGroup.Root
      type="single"
      orientation="horizontal"
      dir="ltr"
      value={source ?? "all"}
      onValueChange={(val) => {
        if (val) setSource(val);
      }}
      className="space-x-2 px-10 py-5"
    >
      <ToggleGroup.Item
        value="all"
        className={`${
          source === "all" ? "bg-indigo-700" : "bg-zinc-700"
        } w-24 py-2 rounded-md font-medium`}
      >
        All
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value="internal"
        className={`${
          source === "internal" ? "bg-indigo-700" : "bg-zinc-700"
        } w-28 py-2 rounded-md font-medium`}
      >
        Internal
      </ToggleGroup.Item>
      <ToggleGroup.Item
        value="external"
        className={`${
          source === "external" ? "bg-indigo-700" : "bg-zinc-700"
        } w-28 py-2 rounded-md font-medium`}
      >
        External
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
};
