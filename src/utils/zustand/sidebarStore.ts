import { create } from "zustand";

type SidebarStore = {
  collapsed: boolean;
  setCollapsed: (state: boolean) => void;
};

export const useSidebarStore = create<SidebarStore>()((set) => ({
  collapsed: false,
  setCollapsed: (collapsed) => set({ collapsed }),
}));
