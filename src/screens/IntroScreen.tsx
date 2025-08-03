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
    <View style={[general.container, { backgroundColor: Colors.sky }]}>
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
      <View style={{marginTop:SCREEN_HEIGHT*0.1}}>
        <CustomButton
          title="Log into your account"
          onPress={() => navigation.navigate("Login")}
          buttonStyle={{
            backgroundColor: Colors.sky,
            borderColor: Colors.black,
            borderWidth: SCREEN_HEIGHT * 0.001,borderRadius:SCREEN_WIDTH*0.1
          }}
          textStyle={{ color: Colors.black }}
        />
        <CustomButton
          title="Create new account"
          onPress={() => navigation.navigate("SignUp")}
          buttonStyle={{
            backgroundColor: Colors.sky,
            borderColor: Colors.primary,
            borderWidth: SCREEN_HEIGHT * 0.001,borderRadius:SCREEN_WIDTH*0.1
          }}
          textStyle={{ color: Colors.primary }}
        />
      </View>
    </View>
  );
}

export default IntroScreen

const styles = StyleSheet.create({})