import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import CustomHeader from "../components/CustomHeader";
import { menuOptions } from "../constants/DataBase";
import general from "../constants/General";
import {
  Colors,
  FONTS,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  Sizes,
} from "../constants/Theme";

const Profile = () => {
  return (
    <ScrollView style={[general.container, { backgroundColor: "#f2f2f2" }]}>
      <CustomHeader title={"Profile"} />
      <View style={styles.box}>
        <FlatList
          data={menuOptions}
          contentContainerStyle={{ alignSelf: "baseline" }}
          renderItem={({ item }) => {
            return (
              <View style={{ width: SCREEN_WIDTH * 0.9}}>
                <View
                  style={{
                    flexDirection: "row",
                    paddingVertical: Sizes.h3,
                    paddingHorizontal: Sizes.h5,
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name={item.icon as keyof typeof Ionicons.glyphMap}
                    size={Sizes.h2}
                  />
                  <Text style={{ ...FONTS.body3b, textAlign: "left" }}>
                    {item.title}
                  </Text>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={24}
                    color={Colors.black}
                    style={{ marginLeft: "auto" }}
                  />
                </View>
                <View
                  style={{
                    height: SCREEN_WIDTH * 0.002,
                    width: "90%",
                    backgroundColor: Colors.black,
                  }}
                />
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};
export default Profile;
const styles = StyleSheet.create({
  box: {
    backgroundColor: Colors.white,
    borderRadius: Sizes.radius,
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.5,
    borderWidth: SCREEN_WIDTH * 0.002,
    borderColor: Colors.black,
  },
});
