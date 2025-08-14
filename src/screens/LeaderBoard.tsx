import {StyleSheet, Text, TouchableOpacity, View, Image,  FlatList,} from "react-native";
import React, { useState } from "react";
import general from "../constants/General";
import { Colors, FONTS,SCREEN_HEIGHT,SCREEN_WIDTH,Sizes} from "../constants/Theme";
import { useNavigation } from "expo-router";
import { Images } from "../constants/Images";
import Ionicons from "@expo/vector-icons/Ionicons";
import { categories, courses, rank } from "../constants/DataBase";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const LeaderBoard = () => {
  const navigation = useNavigation()
  return (
    <View style={general.container}>
      <View style={{ flexDirection: "row" ,backgroundColor:Colors.primary}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="arrow-circle-left"
            size={SCREEN_HEIGHT * 0.03}
            color={Colors.white}/>
        </TouchableOpacity>
        <Text style={{ ...FONTS.h2, marginLeft: SCREEN_WIDTH * 0.23 }}>LeaderBoard</Text>
      </View>
    </View>
  );
};

export default LeaderBoard;

const styles = StyleSheet.create({});
