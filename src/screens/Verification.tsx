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
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Verification = () => {
  return (
    <View style={general.container}>
      <View style={{ flexDirection: "row" }}>
        <MaterialIcons
          name="arrow-circle-left"
          size={30}
          color={Colors.primary}
        />
        <Text style={{ ...FONTS.h2, marginLeft: SCREEN_WIDTH * 0.23 }}>
          Verification
        </Text>
      </View>
      <View
        style={{
          height: 1,
          width: SCREEN_WIDTH * 0.9,
          backgroundColor: Colors.black,
          marginTop:SCREEN_HEIGHT*0.03
        }}
      />
      <Text style={{ ...FONTS.h2, alignSelf: 'center' }}>Verification Code</Text>
      <Text style={{alignSelf:'center'}}>Enter the six digit code sent to meExample@gmail.com</Text>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({});
