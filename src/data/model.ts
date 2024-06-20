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

const allIdentifier = [
  ...oreIdentifier,
  ...plantIdentifier,
  ...itemIdentifier,
] as const;
type AllIdentifier = (typeof allIdentifier)[number][];
