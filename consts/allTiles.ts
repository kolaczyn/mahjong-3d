import {
  HonorTile,
  Man,
  NumberedTilesType,
  Pin,
  Sou,
  Tile,
  Wind,
} from "@/types";

const fromOneToNine = <T extends Tile>(prefix: NumberedTilesType): T[] =>
  Array(9)
    .fill(0)
    .map((_, i) => `${prefix}${i + 1}` as T);

const fourTimes = <T extends Tile>(tile: T[]): T[] =>
  Array(4)
    .fill(tile)
    .flatMap((x) => x);

const makeNumberedTiles = <T extends Tile>(prefix: NumberedTilesType): T[] =>
  fourTimes(fromOneToNine(prefix));

export const manTiles: Man[] = makeNumberedTiles("Man");
export const pinTiles: Pin[] = makeNumberedTiles("Pin");
export const souTiles: Sou[] = makeNumberedTiles("Sou");

export const winds: Wind[] = fourTimes(["East", "South", "West", "North"]);
export const dragons: HonorTile[] = fourTimes(["Green", "Red", "White"]);

export const allTiles: Tile[] = [
  ...manTiles,
  ...pinTiles,
  ...souTiles,
  ...winds,
  ...dragons,
];
