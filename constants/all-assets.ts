import { Tile } from "@/types";
import { ImageRequireSource } from "react-native";

// React Native makes it very hard to load the images dynamically
export const assets: Record<Tile, ImageRequireSource> = {
  Green: require("@/assets/images/tiles/Dragons/Green.png"),
  Red: require("@/assets/images/tiles/Dragons/Red.png"),
  White: require("@/assets/images/tiles/Dragons/White.png"),
  //
  East: require("@/assets/images/tiles/Winds/East.png"),
  South: require("@/assets/images/tiles/Winds/South.png"),
  West: require("@/assets/images/tiles/Winds/West.png"),
  North: require("@/assets/images/tiles/Winds/North.png"),
  //
  Man1: require("@/assets/images/tiles/Man1.png"),
  Man2: require("@/assets/images/tiles/Man2.png"),
  Man3: require("@/assets/images/tiles/Man3.png"),
  Man4: require("@/assets/images/tiles/Man4.png"),
  Man5: require("@/assets/images/tiles/Man5.png"),
  Man6: require("@/assets/images/tiles/Man6.png"),
  Man7: require("@/assets/images/tiles/Man7.png"),
  Man8: require("@/assets/images/tiles/Man8.png"),
  Man9: require("@/assets/images/tiles/Man9.png"),
  //
  Pin1: require("@/assets/images/tiles/Pin1.png"),
  Pin2: require("@/assets/images/tiles/Pin2.png"),
  Pin3: require("@/assets/images/tiles/Pin3.png"),
  Pin4: require("@/assets/images/tiles/Pin4.png"),
  Pin5: require("@/assets/images/tiles/Pin5.png"),
  Pin6: require("@/assets/images/tiles/Pin6.png"),
  Pin7: require("@/assets/images/tiles/Pin7.png"),
  Pin8: require("@/assets/images/tiles/Pin8.png"),
  Pin9: require("@/assets/images/tiles/Pin9.png"),
  //
  Sou1: require("@/assets/images/tiles/Sou1.png"),
  Sou2: require("@/assets/images/tiles/Sou2.png"),
  Sou3: require("@/assets/images/tiles/Sou3.png"),
  Sou4: require("@/assets/images/tiles/Sou4.png"),
  Sou5: require("@/assets/images/tiles/Sou5.png"),
  Sou6: require("@/assets/images/tiles/Sou6.png"),
  Sou7: require("@/assets/images/tiles/Sou7.png"),
  Sou8: require("@/assets/images/tiles/Sou8.png"),
  Sou9: require("@/assets/images/tiles/Sou9.png"),
};
