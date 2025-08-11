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
import CustomInput from "../components/CustomInput";
import { Images } from "../constants/Images";
import CustomHeader from "../components/CustomHeader";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "expo-router";
import { verifyEmail } from "../api/Auth";

const Verification = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState('')
  
  const handleSubmit = async () => { 
    try {
      if (otp.length !== 4) {
        alert("Please enter a valid OTP");
      } else {
        const response = await verifyEmail(otp);
        console.log(response)
      }
    }
  }
  return (
    <View style={general.container}>
<CustomHeader title={'Verification'}/>
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
      <CustomButton title="Verify" onPress={handlesubmit}/>
      <Text
        style={{
          alignSelf: "center",
          marginTop: SCREEN_HEIGHT * 0.03,
        }}
      >
        Or
      </Text>
      <CustomButton title="Verify Later" onPress={() => navigation.navigate('HomeTab')}/>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({});
