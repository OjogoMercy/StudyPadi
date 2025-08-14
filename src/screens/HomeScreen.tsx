import { StyleSheet, Text, TouchableOpacity, View ,Image,FlatList} from "react-native";
import React, { useState } from "react";
import general from "../constants/General";
import { Colors, FONTS, SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Theme";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "expo-router";
import { Images } from "../constants/Images";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Icons } from "../constants/Icons";

const HomeScreen = () => {
  const navigation = useNavigation();
  const rank = {
    rank: "1",
    score: "1000",
    streak: "10",
  }
  const categories = [
    { id: 1, icon: Icons.create, text: "Create",navigate: "Create" ,color: Colors.green2 },
    { id: 2, icon: Icons.chat, text: "Forum", navigate: "Forum", color: Colors.primary },
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
      <Text style={general.boldText}>Featured Categories</Text>
      <View style={[general.row, { marginTop: SCREEN_HEIGHT * 0.02 }]}>
        {categories.map((id, index, item) => (
          <TouchableOpacity
            key={id.id}
            style={[styles.box, { backgroundColor: id.color }]}
            onPress={() => navigation.navigate(id.navigate)}
          >
            <Image
              source={id.icon}
              style={{
                height: SCREEN_HEIGHT * 0.05,
                width: SCREEN_WIDTH * 0.05,
                resizeMode: "contain",
                tintColor: "white",
              }}
            />
            <Text
              style={{
                ...FONTS.body4,
                color: Colors.white,
                marginLeft: SCREEN_WIDTH * 0.02,
                textAlign: "center",
              }}
            >
              {id.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={general.boldText}>Recommended test for you</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.}>
                <Text></Text>
            </View>
          )
        }}
      />
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
  box: {
    alignItems: "center",
    justifyContent: "center",
    width: SCREEN_WIDTH * 0.27,
    height: SCREEN_HEIGHT * 0.1,
    borderRadius: SCREEN_WIDTH * 0.02,
    // marginRight: SCREEN_WIDTH * 0.02,
  },
});
