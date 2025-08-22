import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import CustomHeader from "../components/CustomHeader";
import { menuOptions } from "../constants/DataBase";
import general from "../constants/General";
import { Images } from "../constants/Images";
import {
  Colors,
  FONTS,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  Sizes,
} from "../constants/Theme";

const Profile = () => {
  const user = useSelector((state: any) => state.auth.user);
  return (
    <ScrollView style={[general.container, { backgroundColor: "#f2f2f2" }]}>
      <CustomHeader title={"Profile"} />
      <View style={styles.card}>
        <Image source={Images.avatar2} style={styles.avatar} />
        <View style={{ padding: SCREEN_WIDTH * 0.01 }}>
          <Text style={styles.name}>
            {user.firstname} {user.lastname}
          </Text>
          <Text style={{ fontSize: SCREEN_WIDTH * 0.04, color: "#555" }}>
            {user.level} 400 Level
          </Text>
          {/* <Text style={{...FONTS .h4}}>{user.fieldOfStudy}</Text> */}
          <Text style={styles.university}>{user.university}</Text>
          <Text style={styles.premium}>
            Premium: {user.isPremium ? "Yes" : "No"}
          </Text>
          <Text style={styles.points}>{user.points} Points</Text>
        </View>
      </View>

      <View style={styles.box}>
        <FlatList
          data={menuOptions}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ alignSelf: "baseline" }}
          renderItem={({ item }) => {
            return (
              <View style={{ width: SCREEN_WIDTH * 0.9 }}>
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
                  <Text
                    style={{
                      ...FONTS.body3b,
                      textAlign: "left",
                      marginLeft: SCREEN_WIDTH * 0.01,
                    }}
                  >
                    {item.title}
                  </Text>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={SCREEN_WIDTH * 0.07}
                    color={Colors.black}
                    style={{ marginLeft: "auto" }}
                  />
                </View>
                <View
                  style={{
                    height: SCREEN_WIDTH * 0.002,
                    width: "100%",
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
    height: SCREEN_HEIGHT * 0.65,
    borderWidth: SCREEN_WIDTH * 0.002,
    borderColor: Colors.black,
  },
  card: {
    width: SCREEN_WIDTH * 0.9,
    padding: SCREEN_HEIGHT * 0.01,
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    elevation: 5,
    marginVertical: SCREEN_HEIGHT * 0.02,
    flexDirection: "row",
  },
  avatar: {
    width: SCREEN_WIDTH * 0.23,
    height: SCREEN_WIDTH * 0.23,
    borderRadius: SCREEN_WIDTH * 0.125,
    marginBottom: SCREEN_HEIGHT * 0.02,
  },
  name: {
    fontSize: SCREEN_WIDTH * 0.05,
    fontWeight: "bold",
    marginBottom: SCREEN_HEIGHT * 0.01,
  },

  university: {
    fontSize: SCREEN_WIDTH * 0.035,
    color: "#777",
    marginVertical: SCREEN_HEIGHT * 0.005,
  },
  premium: {
    fontSize: SCREEN_WIDTH * 0.035,
    color: Colors.orange,
  },
  points: {
    fontSize: SCREEN_WIDTH * 0.035,
    color: "#333",
  },
  text: {
    ...FONTS.body4,
    alignSelf: "center",
    fontWeight: "bold",
    marginTop: SCREEN_HEIGHT * 0.07,
  },
});
