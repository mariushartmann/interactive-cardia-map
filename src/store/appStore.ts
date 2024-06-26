import { create } from "zustand";
import {
  bossIdentifier,
  BossIdentifier,
  ItemIdentifier,
  itemIdentifier,
  NpcIdentifier,
  npcIdentifier,
  OreIdentifier,
  oreIdentifier,
} from "../data/model";

export type AppStore = {
  visibleOres: OreIdentifier[];
  setVisibleOres: (value: OreIdentifier[]) => void;
  setVisibleOresAll: () => void;
  setVisibleOresNone: () => void;
  visibleItems: ItemIdentifier[];
  setVisibleItems: (value: ItemIdentifier[]) => void;
  setVisibleItemsAll: () => void;
  setVisibleItemsNone: () => void;
  visibleBosses: BossIdentifier[];
  setVisibleBosses: (value: BossIdentifier[]) => void;
  setVisibleBossesAll: () => void;
  setVisibleBossesNone: () => void;
  visibleNpcs: NpcIdentifier[];
  setVisibleNpcs: (value: NpcIdentifier[]) => void;
  setVisibleNpcsAll: () => void;
  setVisibleNpcsNone: () => void;
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
  visibleBosses: [...bossIdentifier],
  setVisibleBosses: (newValue) => set(() => ({ visibleBosses: newValue })),
  setVisibleBossesAll: () =>
    set(() => ({ visibleBosses: [...bossIdentifier] })),
  setVisibleBossesNone: () => set(() => ({ visibleBosses: [] })),
  visibleNpcs: [...npcIdentifier],
  setVisibleNpcs: (newValue) => set(() => ({ visibleNpcs: newValue })),
  setVisibleNpcsAll: () => set(() => ({ visibleNpcs: [...npcIdentifier] })),
  setVisibleNpcsNone: () => set(() => ({ visibleNpcs: [] })),
}));
