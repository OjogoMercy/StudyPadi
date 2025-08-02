import { Image, StyleSheet, Text, View, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react'
import { Colors ,FONTS, SCREEN_HEIGHT, SCREEN_WIDTH} from '../constants/Theme'
import { Images } from '../constants/Images'

const SplashScreen = () => {
const imageOpacity = useRef(new Animated.Value(0)).current;
const textOpacity = useRef(new Animated.Value(0)).current;
const textTranslateY = useRef(new Animated.Value(50)).current;

      useEffect(() => {
    // Fade in image
    Animated.timing(imageOpacity, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start(() => {
      // After image fades, slide in text
     Animated.parallel([
       Animated.timing(textTranslateY, {
         toValue: 0,
         duration: 3000,
         useNativeDriver: true,
       }),
       Animated.timing(textOpacity, {
         toValue: 1,
         duration: 3000,
         useNativeDriver: true,
       }),
     ]).start();
    });
  }, []);
  return (
    <View
      style={{
        backgroundColor: Colors.primary,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Animated.Image
          source={[Images.logo, { opacity: imageOpacity }]}
          style={styles.logo}
        />
        <Animated.Text
          style={[
            styles.header,
            { transform: [{ translateY: textTranslateY }] },
          ]}
        >
          tudyPadi
        </Animated.Text>
      </View>
    </View>
  );
}

export default SplashScreen

const styles = StyleSheet.create({
  header: {
    ...FONTS.h1,
    color: Colors.white,
    textAlign: "center",

  },
  logo: {
    width: SCREEN_WIDTH * 0.25,
    height: SCREEN_HEIGHT * 0.15,
    tintColor: Colors.white,
  },
});