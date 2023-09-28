import { create } from "zustand";

type TrainingSourceFilterStore = {
  source: string | null;
  setSource: (source: string | null) => void;
};

export const useTrainingSourceFilterStore = create<TrainingSourceFilterStore>()(
  (set) => ({
    source: "all",
    setSource: (source) => set({ source }),
  })
);
