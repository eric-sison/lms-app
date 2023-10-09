import { create } from "zustand";

type TrainingDetailsTabHeader = "details" | "participants" | "requirements" | "materials";

type TrainingDetailsTab = {
  tab: TrainingDetailsTabHeader;
  setTab: (header: TrainingDetailsTabHeader) => void;
};

export const useTrainingDetailsTab = create<TrainingDetailsTab>()((set) => ({
  tab: "details",
  setTab: (tab) => set({ tab }),
}));
