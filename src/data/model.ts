import { TypeOfExpression } from "typescript";

export type Data = DataItem[];

export type DataItem = {
  ids: AllIdentifier;
  color: string;
  itemType: ItemType;
  locationType: LocationType;
  data: string | null;
};

type ItemType = "plant" | "ore" | "item";
type LocationType = "point" | "area";

export const oreIdentifier = [
  "adamantite",
  "aquamarine",
  "argentum",
  "copper",
  "crusium",
  "crystalwing",
  "duckharukon",
  "dureline",
  "emeralnd",
  "fairyswing",
  "hearthstone",
  "iron",
  "lifestone",
  "manastone",
  "mithril",
  "moonlightstone",
  "obsidian",
  "opal",
  "pearl",
  "regency",
  "retion",
  "ruby",
  "runecarore",
  "sapphire",
  "spiritstone",
  "thunderboltstone",
] as const;
type OreIdentifier = (typeof oreIdentifier)[number];

export const plantIdentifier = [
  "anise",
  "cactus",
  "campanula",
  "celadine",
  "dragonfruit",
  "flora",
  "heath",
  "heliotrope",
  "hycanith",
  "lily",
  "poisun",
  "prometheus",
  "rose",
  "rosemary",
  "thyme",
] as const;
export type PlantIdentifier = (typeof plantIdentifier)[number];

const allIdentifier = [...oreIdentifier, ...plantIdentifier] as const;
type AllIdentifier = (typeof allIdentifier)[number][];
