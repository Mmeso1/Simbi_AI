import { create } from "zustand";
import { sections } from "@/data/personalizationData";

type State = {
  currentSection: number;
  next: () => void;
  previous: () => void;
  setSection: (sectionNumber: number) => void;
};

export const usePersonalizationStore = create<State>((set) => ({
  currentSection: 0,
  next: () => set((state) => ({ currentSection: state.currentSection + 1 })),
  previous: () =>
    set((state) => ({ currentSection: state.currentSection - 1 })),
  setSection: (sectionNumber) => set({ currentSection: sectionNumber }),
}));
