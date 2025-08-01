import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors ,FONTS, SCREEN_HEIGHT} from '../constants/Theme'

const SplashScreen = () => {
  return (
    <View style={{backgroundColor:Colors.primary,flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={styles.header}>StudyPadi</Text>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  header: {
    ...FONTS.h1,
    color: Colors.white,
    textAlign: 'center',
    marginTop: SCREEN_HEIGHT* 0.1,
  }
})