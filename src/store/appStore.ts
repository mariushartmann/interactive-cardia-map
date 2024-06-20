import { create } from "zustand";
import { oreIdentifier } from "../data/model";

type AppStore = {
  visibleOres: string[];
  setVisibleOres: (value: string[]) => void;
  setVisibleOresAll: () => void;
  setVisibleOresNone: () => void;
};

export const useAppStore = create<AppStore>((set) => ({
  visibleOres: [...oreIdentifier],
  setVisibleOres: (newValue) => set(() => ({ visibleOres: newValue })),
  setVisibleOresAll: () => set(() => ({ visibleOres: [...oreIdentifier] })),
  setVisibleOresNone: () => set(() => ({ visibleOres: [] })),
}));
