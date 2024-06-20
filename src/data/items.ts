import type { Data } from "./model";

const items: Data = [
  {
    ids: ["letter_of_a_soldier"],
    color: "#ffffff",
    itemType: "item",
    locationType: "point",
    data: "620,185",
  },
  {
    ids: ["luggage_of_a_soldier"],
    color: "#ffffff",
    itemType: "item",
    locationType: "point",
    data: "710,225",
  },
  {
    ids: ["cardia_note"],
    color: "#ffffff",
    itemType: "item",
    locationType: "point",
    data: "790,125",
  },
  {
    ids: ["weapon_of_the_gods"],
    color: "#ffffff",
    itemType: "item",
    locationType: "point",
    data: "1125,225",
  },
  {
    ids: ["book_of_time"],
    color: "#ffffff",
    itemType: "item",
    locationType: "point",
    data: "490,590",
  },
  {
    ids: ["adventure_notice"],
    color: "#ffffff",
    itemType: "item",
    locationType: "point",
    data: "490,665",
  },
  {
    ids: ["mystic_cube"],
    color: "#ffffff",
    itemType: "item",
    locationType: "point",
    data: "740,685",
  },
  {
    ids: ["flower_of_darkness"],
    color: "#ffffff",
    itemType: "item",
    locationType: "point",
    data: "983,665",
  },
];

items.sort((a, b) => (a.ids > b.ids ? 1 : -1));

export { items };
