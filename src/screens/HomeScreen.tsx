import { StyleSheet, Text, TouchableOpacity, View ,Image} from "react-native";
import React, { useState } from "react";
import general from "../constants/General";
import { Colors, FONTS, SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Theme";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "expo-router";
import { Images } from "../constants/Images";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Icons } from "../constants/Icons";

const HomeScreen = () => {
  const rank = {
    rank: "1",
    score: "1000",
    streak: "10",
  }
  const categories = [
    { id: 1, icon: Icons.book2, text: "Create",navigate: "Create" ,color: Colors.primary2 },
    { id: 2, icon: Icons.book2, text: "Forum", navigate: "Forum", color: Colors.primary2 },
    { id: 3, icon: Icons.book2, text: "Past Question" , navigate: "PastQuestion" ,color: Colors.primary2 },
  ]
  return (
    <View style={general.container}>
      <View style={general.row}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={Images.avatar2} style={general.profile} />
          <Text style={{ ...FONTS.h3, marginLeft: SCREEN_WIDTH * 0.02 }}>
            Hi Mercy
          </Text>
        </View>
        <Ionicons name="notifications" size={24} color={Colors.primary} />
      </View>
      <View style={styles.dash}>
        <View>
          <Text style={styles.dashboardText}>Rank</Text>
          <Text style={styles.dashboardText}>{rank.rank}</Text>
        </View>
        <View style={{ height: "60%", backgroundColor: "white", width: 2 }} />
        <View>
          <Text style={styles.dashboardText}>Streak</Text>
          <Text style={styles.dashboardText}>{rank.streak}</Text>
        </View>
        <View style={{ height: "60%", backgroundColor: "white", width: 2 }} />
        <View>
          <Text style={styles.dashboardText}>Score</Text>
          <Text style={styles.dashboardText}>{rank.score}</Text>
        </View>
      </View>
      <Image source={Images.banner} style={styles.banner} />
      <Text style={{ ...FONTS.h3, marginTop: SCREEN_HEIGHT * 0.01 }}>Featured Categories</Text>
      {categories.map((id, index,item) => (
        <TouchableOpacity
          key={id.id}
          style={[general.row,{backgroundColor:id.color}]}
          onPress={() => useNavigation().navigate(id.navigate)}
        >
          <Ionicons name={id.icon} size={24} color={Colors.white} />
          <Text style={{ ...FONTS.h3, color: Colors.white, marginLeft: SCREEN_WIDTH * 0.02 }}>
            {id.text}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  dash: {
    width: "100%",
    height: SCREEN_HEIGHT * 0.13,
    backgroundColor: Colors.primary2,
    marginVertical: SCREEN_HEIGHT * 0.02,
    borderRadius: SCREEN_WIDTH * 0.03,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SCREEN_WIDTH * 0.05,
  },
  dashboardText: {
    ...FONTS.body2b,
    color: Colors.white,
    textAlign: "center",
  },
  banner: {
    width: "100%",
    height: SCREEN_HEIGHT * 0.13,
    borderRadius: SCREEN_WIDTH * 0.03,
    marginTop: SCREEN_HEIGHT * 0.02,
    resizeMode: "cover",
  },
});
