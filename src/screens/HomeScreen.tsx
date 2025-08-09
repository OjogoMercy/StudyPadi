import { StyleSheet, Text, TouchableOpacity, View ,Image} from "react-native";
import React, { useState } from "react";
import general from "../constants/General";
import { Colors, FONTS, SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Theme";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "expo-router";
import { Images } from "../constants/Images";
import Ionicons from "@expo/vector-icons/Ionicons";

const HomeScreen = () => {
  return (
    <View style={general.container}>
      <View style={general.row}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={Images.avatar2} style={general.profile} />
          <Text style={{ ...FONTS.h3 ,marginLeft:SCREEN_WIDTH*0.02}}>Hi Mercy</Text>
        </View>
        <Ionicons name="notifications" size={24} color={Colors.primary} />
      </View>
      <View style={styles.dash}></View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  dash: {
    width: "100%",
    height: SCREEN_HEIGHT * 0.1,
    backgroundColor: Colors.lightGray,
    marginVertical: SCREEN_HEIGHT * 0.02,
  },
});
