export type Data = DataItem[];

export type DataItem = {
  id: Identifier;
  itemType: ItemType;
  locationType: LocationType;
};

type ItemType = "plant" | "ore" | "item";
type LocationType = "point" | "area";

type Identifier = OreIdentifier | PlantIdentifier;

type OreIdentifier =
  | "spiritstone"
  | "ruby"
  | "obsidian"
  | "dureline"
  | "opal"
  | "fairyswing"
  | "manastone"
  | "retion"
  | "regency"
  | "adamantite"
  | "argentum"
  | "moonlightstone"
  | "crystalwing"
  | "runecarore"
  | "duckharukon"
  | "thunderboltstone"
  | "mithril"
  | "lifestone"
  | "aquamarine"
  | "hearthstone"
  | "pearl"
  | "emeralnd"
  | "crusium"
  | "copper"
  | "iron"
  | "sapphire";

type PlantIdentifier =
  | "anise"
  | "prometheus"
  | "hycanith"
  | "campanula"
  | "poisun"
  | "dragonfruit"
  | "cactus"
  | "flora"
  | "heliotrope"
  | "lily"
  | "rosemary"
  | "celadine"
  | "rose"
  | "thyme"
  | "heath";
