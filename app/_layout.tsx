import { Stack } from "expo-router";
import RootNavigator from "@/src/Navigator/RootNavigator";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import * as Font from "expo-font";
import { useFonts } from "expo-font";
import React from "react";
import { store } from '../src/Redux/Store'
import { Provider, useDispatch } from 'react-redux';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginSuccess } from "@/src/Redux/AuthSlice";

React.useEffect(() => { 
  const restoreSession = async () => {
    const loadFonts = async () => {
  await Font.loadAsync({
    "Montserrat-Regular": require("../src/assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("../src/assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Medium": require("../src/assets/fonts/Montserrat-Medium.ttf"),
    "Poppins-SemiBold": require("../src/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../src/assets/fonts/Poppins-Bold.ttf"),
  });
  }
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      const user = await AsyncStorage.getItem('user');
      if (accessToken && user) {
        const parsedUser = JSON.parse(user);
        dispatch(loginSuccess({user:parsedUser, accessToken:accessToken}))
      }
  }catch (error) {
        console.error('Failed to restore session:', error);
  }
   
restoreSession(), loadFonts()
  }
}, [],);
const dispatch = useDispatch()
export default function RootLayout() {
  return (
    <Provider store={store} >
      <NavigationIndependentTree>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </NavigationIndependentTree>
    </Provider>
  );
}
