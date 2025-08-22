import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginSuccess } from "@/src/Redux/AuthSlice";
import * as Font from "expo-font";

export default function Initializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    const restoreSession = async () => {
      try {
        await Font.loadAsync({
          "Montserrat-Regular": require("../src/assets/fonts/Montserrat-Regular.ttf"),
          "Montserrat-Bold": require("../src/assets/fonts/Montserrat-Bold.ttf"),
          "Montserrat-Medium": require("../src/assets/fonts/Montserrat-Medium.ttf"),
          "Poppins-SemiBold": require("../src/assets/fonts/Poppins-SemiBold.ttf"),
          "Poppins-Bold": require("../src/assets/fonts/Poppins-Bold.ttf"),
        });

        const accessToken = await AsyncStorage.getItem("accessToken");
        const user = await AsyncStorage.getItem("user");

        if (accessToken && user) {
          dispatch(loginSuccess({ user: JSON.parse(user), accessToken }));
        }

        console.log("Session restored");
      } catch (error) {
        console.error("Failed to restore session:", error);
      }
    };

    restoreSession();
  }, [dispatch]);

  return null;
}
