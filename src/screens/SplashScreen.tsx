import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors ,Sizes} from '../constants/Theme'

const SplashScreen = () => {
  return (
    <View style={{backgroundColor:Colors.primary,flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize}}>StudyPadi</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})