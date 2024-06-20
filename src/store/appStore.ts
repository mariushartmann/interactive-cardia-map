import { create } from "zustand";
import { itemIdentifier, oreIdentifier } from "../data/model";

type AppStore = {
  visibleOres: string[];
  setVisibleOres: (value: string[]) => void;
  setVisibleOresAll: () => void;
  setVisibleOresNone: () => void;
  visibleItems: string[];
  setVisibleItems: (value: string[]) => void;
  setVisibleItemsAll: () => void;
  setVisibleItemsNone: () => void;
};

export const useAppStore = create<AppStore>((set) => ({
  visibleOres: [...oreIdentifier],
  setVisibleOres: (newValue) => set(() => ({ visibleOres: newValue })),
  setVisibleOresAll: () => set(() => ({ visibleOres: [...oreIdentifier] })),
  setVisibleOresNone: () => set(() => ({ visibleOres: [] })),
  visibleItems: [...itemIdentifier],
  setVisibleItems: (newValue) => set(() => ({ visibleItems: newValue })),
  setVisibleItemsAll: () => set(() => ({ visibleItems: [...itemIdentifier] })),
  setVisibleItemsNone: () => set(() => ({ visibleItems: [] })),
}));
