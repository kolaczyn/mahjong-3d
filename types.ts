const TILE_NUMBER = ["1", "2", "3", "4", "5", "6", "7", "8", "9"] as const;
export type TileNumber = (typeof TILE_NUMBER)[number];

const NUMBERED_TILES_TYPES = ["Man", "Pin", "Sou"] as const;
export type NumberedTilesType = (typeof NUMBERED_TILES_TYPES)[number];

const MAN = [
  "Man1",
  "Man2",
  "Man3",
  "Man4",
  "Man5",
  "Man6",
  "Man7",
  "Man8",
  "Man9",
] as const;
export type Man = (typeof MAN)[number];

const PIN = [
  "Pin1",
  "Pin2",
  "Pin3",
  "Pin4",
  "Pin5",
  "Pin6",
  "Pin7",
  "Pin8",
  "Pin9",
] as const;
export type Pin = (typeof PIN)[number];

const SOU = [
  "Sou1",
  "Sou2",
  "Sou3",
  "Sou4",
  "Sou5",
  "Sou6",
  "Sou7",
  "Sou8",
  "Sou9",
] as const;
export type Sou = (typeof SOU)[number];

export type NumberedTile = Man | Pin | Sou;

export const WINDS = ["East", "South", "West", "North"] as const;
export type Wind = (typeof WINDS)[number];
export const DRAGONS = ["Green", "Red", "White"] as const;
export type Dragon = (typeof DRAGONS)[number];

export type HonorTile = Wind | Dragon;

export type Tile = NumberedTile | HonorTile;

export type ImageName = Man | Pin | Sou | `Winds/${Wind}` | `Dragons/${Dragon}`;
