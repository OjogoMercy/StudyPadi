import { StyleSheet, Text, TouchableOpacity, View ,Image} from "react-native";
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
import { Images } from "../constants/Images";

const Verification = () => {
  const [otp,setOtp] = useState('')
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
          marginTop: SCREEN_HEIGHT * 0.03,
        }}
      />
      <Text
        style={{
          ...FONTS.h2,
          alignSelf: "center",
          marginTop: SCREEN_HEIGHT * 0.03,
        }}
      >
        Verification Code
      </Text>
      <Text style={{ alignSelf: "center", ...FONTS.body5 }}>
        Enter the six digit code sent to me@example.com
      </Text>
      <Image
        source={Images.shield}
        style={{
          width: SCREEN_WIDTH * 0.6,
          height: SCREEN_HEIGHT * 0.3,
          alignSelf: "center",
        }}
      />
      <CustomInput
        value={otp}
        onChangeText={setOtp}
        iconName="mail-outline"
        placeholder="Enter OTP"
      />
      <CustomButton title="Verify" />
      <Text
        style={{
          alignSelf: "center",
          marginTop: SCREEN_HEIGHT * 0.03,
        }}
      >
        Or
      </Text>
      <CustomButton title="Verify Later" />
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({});
