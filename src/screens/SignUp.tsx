import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import general from '../constants/General'
import { Colors, Sizes, FONTS, SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Theme";

const SignUp = () => {
  return (
    <View style={general.container}>
      <Text style={styles.title}>Create an Account</Text>
      <View><TouchableOpacity></TouchableOpacity></View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  title: {
    ...FONTS.h1
  },
  
})