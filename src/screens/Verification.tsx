import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import general from "../constants/General";
import {
  Colors,
  Sizes,
  FONTS,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from "../constants/Theme";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "expo-router";
import CustomInput from "../components/CustomInput";

const Verification = () => {
  return (
    <View style={general.container}>
      <Text>Verification</Text>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({});
