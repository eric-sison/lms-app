import { Training } from "@lms/types/training";
import { create } from "zustand";

type TrainingStore = {
  trainings: Training[];
  setTrainings: (trainings: Training[]) => void;
};

export const useTrainingStore = create<TrainingStore>()((set) => ({
  trainings: [],
  setTrainings: (trainings) => set({ trainings }),
}));
