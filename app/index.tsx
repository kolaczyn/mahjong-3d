import { ScrollView, Text, View } from "react-native";
import { allTiles } from "@/constants/all-tiles";
import { MahjongTile } from "@/components/mahjong-tile";

const HomeScreen = () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <ScrollView>
      <View>
        {allTiles.map((tile) => (
          <MahjongTile tile={tile} key={tile} />
        ))}
      </View>
    </ScrollView>
  </View>
);

export default HomeScreen;
