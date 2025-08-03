import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import general from '../constants/General'
import { Images } from '../constants/Images'
import { Colors, FONTS, SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Theme";
import CustomButton from '../components/CustomButton';
import { useNavigation } from 'expo-router';

const IntroScreen = () => {
    const navigation = useNavigation()
  return (
    <View style={general.container}>
      <Text style={{ alignSelf: "center" }}>English (NG)</Text>
      <Image
        source={Images.onboard1}
        style={{
          width: SCREEN_WIDTH * 0.8,
          height: SCREEN_HEIGHT * 0.4,
          borderRadius: SCREEN_WIDTH * 0.5,
          alignSelf: "center",
        }}
      />
      <View>
        <CustomButton
          title="Log into your account"
          onPress={() => navigation.navigate("Login")}
        />
        <CustomButton
          title="Create new account"
          onPress={() => navigation.navigate("SignUp")}
        />
      </View>
    </View>
  );
}

export default IntroScreen

const styles = StyleSheet.create({})