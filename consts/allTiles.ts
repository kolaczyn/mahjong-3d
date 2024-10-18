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

const manTiles: Man[] = fromOneToNine("Man");
const pinTiles: Pin[] = fromOneToNine("Pin");
const souTiles: Sou[] = fromOneToNine("Sou");

const winds: Wind[] = fourTimes(["East", "South", "West", "North"]);
const dragons: HonorTile[] = fourTimes(["Green", "Red", "White"]);

export const allTiles: Tile[] = [
  ...manTiles,
  ...pinTiles,
  ...souTiles,
  ...winds,
  ...dragons,
];