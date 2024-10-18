import { Image, StyleSheet, Text } from "react-native";
import {
  Dragon,
  DRAGONS,
  NumberedTile,
  Tile,
  Wind,
  WINDS,
  ImageName,
} from "@/types";

const getImageName = (tile: Tile): ImageName => {
  if (DRAGONS.some((x) => x === tile)) return `Dragons/${tile as Dragon}`;
  if (WINDS.some((x) => x === tile)) {
    return `Winds/${tile as Wind}`;
  }
  return `${tile as NumberedTile}`;
};

type Props = {
  tile: Tile;
};

export const MahjongTile = ({ tile }: Props) => {
  // const source = `@/assets/images/tiles/Man2.png`;
  const source = `@/assets/images/tiles/${getImageName(tile)}.png`;
  return (
    <Image
      // source={require(`@/assets/images/tiles/${getImageName(tile)}.png`)}
      source={require(source)}
      style={styles.tile}
    />
  );
};

const styles = StyleSheet.create({
  tile: {
    width: 60,
    height: 80,
  },
});
