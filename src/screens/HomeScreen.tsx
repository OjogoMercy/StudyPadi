import { StyleSheet, Text, TouchableOpacity, View ,Image} from "react-native";
import React, { useState } from "react";
import general from "../constants/General";
import { Colors, FONTS, SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Theme";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "expo-router";
import { Images } from "../constants/Images";

const HomeScreen = () => {
  return (
    <View style={general.container}>
      <View style={{ flexDirection: 'row', padding: 10 }}>
        <Image source={Images.avatar} style={general.profile} />
</View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
