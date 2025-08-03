import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import general from "../constants/General";
import { Colors, FONTS, SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Theme";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "expo-router";
import CustomInput from "../components/CustomInput";

const LoginScreen = () => {
  return (
    <View style={general.container}>
      <Text style={{...FONTS.h1}}>Login to your account</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
