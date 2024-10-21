import { StyleSheet, Image, ImageRequireSource } from "react-native";
import { Tile } from "@/types";
import { assets } from "@/constants/all-assets";
import React from "react";

const getImageName = (tile: Tile): ImageRequireSource => {
  return assets[tile] ?? assets["Green"];
};

type Props = {
  tile: Tile;
};

export const MahjongTile = ({ tile }: Props) => {
  return <Image source={getImageName(tile)} style={styles.tile} />;
};

const styles = StyleSheet.create({
  tile: {
    width: 60,
    height: 80,
  },
});
