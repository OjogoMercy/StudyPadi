import { Stack } from "expo-router";
import RootNavigator from "@/src/Navigator/RootNavigator";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import * as Font from "expo-font";
import { useFonts } from "expo-font";
import React from "react";

React.useEffect(() => { 
  const loadFonts = async () => {
  await Font.loadAsync({
    "Montserrat-Regular": require("../src/assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("../src/assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Medium": require("../src/assets/fonts/Montserrat-Medium.ttf"),
    "Poppins-SemiBold": require("../src/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../src/assets/fonts/Poppins-Bold.ttf"),
  });
  }
  loadFonts()
}, []);

export default function RootLayout() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
