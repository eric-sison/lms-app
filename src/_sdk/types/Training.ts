import { Training } from "@lms/types/training";

export type TrainingMetadata = {
  trainings: Training[];
  count: { upcoming: number; ongoing: number; completed: number };
};

export type TrainingCountPerStatus = {
  all: number;
  upcoming: number;
  ongoing: number;
  completed: number;
};
