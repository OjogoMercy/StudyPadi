import {StyleSheet, Text, TouchableOpacity, View, Image,  FlatList,} from "react-native";
import React, { useState } from "react";
import general from "../constants/General";
import { Colors, FONTS,SCREEN_HEIGHT,SCREEN_WIDTH,Sizes} from "../constants/Theme";
import { useNavigation } from "expo-router";
import { Images } from "../constants/Images";
import Ionicons from "@expo/vector-icons/Ionicons";
import { categories, courses, rank } from "../constants/DataBase";
const LeaderBoard = () => {
  const navigate = useNavigation()
  return (
    <View style={general.container}>
      <Text>LeaderBoard</Text>
    </View>
  );
};

export default LeaderBoard;

const styles = StyleSheet.create({});
