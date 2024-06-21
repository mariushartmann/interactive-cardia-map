export type Data = DataItem[];

export type DataItem = {
  ids: AllIdentifier[];
  color: string;
  itemType: DataType;
  locationType: LocationType;
  data: string | null;
};

export type DataType = "plant" | "ore" | "item" | "boss" | "npc";
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
export type OreIdentifier = (typeof oreIdentifier)[number];

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

export const itemIdentifier = [
  "adventure_notice",
  "book_of_time",
  "cardia_note",
  "flower_of_darkness",
  "letter_of_a_soldier",
  "luggage_of_a_soldier",
  "mystic_cube",
  "weapon_of_the_gods",
] as const;
export type ItemIdentifier = (typeof itemIdentifier)[number];

export const bossIdentifier = [
  "cardia_dragon",
  "cardia_mermaid",
  "cardia_yeti",
  "dark_jin",
  "forest_dragon",
  "giant_cursed_warrior",
  "giant_fire_mage",
  "giant_kravog",
  "giant_minotaurus",
  "giant_snow_dragon",
  "island_death",
  "river_mutant",
  "snow_deamon",
  "white_tiger_girl",
  "winfred",
] as const;
export type BossIdentifier = (typeof bossIdentifier)[number];

export const allIdentifier = [
  ...oreIdentifier,
  ...plantIdentifier,
  ...itemIdentifier,
  ...bossIdentifier,
] as const;
export type AllIdentifier = (typeof allIdentifier)[number];
