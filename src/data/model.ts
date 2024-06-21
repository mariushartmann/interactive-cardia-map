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
  "letter_of_a_soldier",
  "luggage_of_a_soldier",
  "cardia_note",
  "weapon_of_the_gods",
  "book_of_time",
  "adventure_notice",
  "mystic_cube",
  "flower_of_darkness",
] as const;
export type ItemIdentifier = (typeof itemIdentifier)[number];

export const bossIdentifier = [
  "giant_fire_mage",
  "giant_cursed_warrior",
  "river_mutant",
  "giant_kravog",
  "forest_dragon",
  "giant_minotaurus",
  "cardia_mermaid",
  "cardia_dragon",
  "snow_deamon",
  "white_tiger_girl",
  "winfred",
  "giant_snow_dragon",
  "cardia_yeti",
  "island_death",
  "dark_jin",
] as const;
export type BossIdentifier = (typeof bossIdentifier)[number];

export const allIdentifier = [
  ...oreIdentifier,
  ...plantIdentifier,
  ...itemIdentifier,
  ...bossIdentifier,
] as const;
export type AllIdentifier = (typeof allIdentifier)[number];
