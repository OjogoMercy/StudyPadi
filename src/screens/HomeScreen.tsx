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
      <View style={{ flexDirection: "row", padding: 10, alignItems: "center",justifyContent:'space-between' }}>
        <View style={{ flexDirection: "row" }}>
          <Image source={Images.avatar2} style={general.profile} />
          <Text style={{ ...FONTS.h3 }}>Hi Mercy</Text>
        </View>
        <Ionicons name="notifications" size={24} color={Colors.primary} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
