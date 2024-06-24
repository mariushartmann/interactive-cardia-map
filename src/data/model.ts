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
  "blood_feather",
  "book_of_time",
  "cardia_note_1",
  "cardia_note_2",
  "cardia_note_3",
  "cardia_note_4",
  "cavesman_watch",
  "flower_of_darkness",
  "goaji_stone",
  "golden_flower",
  "letter_of_a_soldier",
  "lillys_adventure_book",
  "lillys_broom",
  "lillys_cat_plush",
  "lillys_crown_cork",
  "lillys_necklace",
  "lillys_secret_key",
  "lillys_ticket",
  "lucky_ring",
  "luggage_of_a_soldier",
  "mystic_cube",
  "rings_of_connectivity",
  "weapon_of_the_gods",
] as const;
export type ItemIdentifier = (typeof itemIdentifier)[number];

export const bossIdentifier = [
  "abandoned_mutant",
  "cardia_dragon",
  "cardia_mermaid",
  "cardia_yeti",
  "cave_deamon",
  "cave_dragon",
  "dark_jin",
  "forest_dragon",
  "giant_cardia_wolf",
  "giant_creature",
  "giant_cave_bandit",
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

export const npcIdentifier = [
  "aldwin",
  "artemis",
  "atreyu",
  "elora",
  "rina",
  "shae",
  "theoden",
  "x",
  "zuah",
  "zuahs_shadow",
] as const;
export type NpcIdentifier = (typeof npcIdentifier)[number];

export const allIdentifier = [
  ...oreIdentifier,
  ...plantIdentifier,
  ...itemIdentifier,
  ...bossIdentifier,
  ...npcIdentifier,
] as const;
export type AllIdentifier = (typeof allIdentifier)[number];
