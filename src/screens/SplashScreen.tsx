import { Image, StyleSheet, Text, View, Animated } from 'react-native';
import React, { useEffect, useRef } from 'react'
import { Colors ,FONTS, SCREEN_HEIGHT, SCREEN_WIDTH} from '../constants/Theme'
import { Images } from '../constants/Images'
import { useNavigation } from 'expo-router';

const SplashScreen = ({navigation}) => {
  // const navigation = useNavigation()
const imageOpacity = useRef(new Animated.Value(0)).current;
const textOpacity = useRef(new Animated.Value(0)).current;
const textTranslateY = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.timing(imageOpacity, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      Animated.parallel([
        Animated.timing(textTranslateY, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    });

    const timer = setTimeout(() => {
      navigation.replace("IntroScreen");
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigation]);

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
          source={Images.logo}
          style={[styles.logo, { opacity: imageOpacity }]}
        />
        <Animated.Text
          style={[
            styles.header,{ opacity: textOpacity },
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