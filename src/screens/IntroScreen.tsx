import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import general from '../constants/General'
import { Images } from '../constants/Images'
import { Colors, FONTS, SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Theme";

const IntroScreen = () => {
  return (
    <View style={general.container}>
      <Text style={{alignSelf:'center'}}>English (NG)</Text>
    </View>
  )
}

export default IntroScreen

const styles = StyleSheet.create({})