import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Image } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import LeaderBoard from "../screens/LeaderBoard";
import PastQuestion from "../screens/PastQuestion";
import Profile from "../screens/Profile";
import LoginScreen from "../screens/LoginScreen";
import SplashScreen from "../screens/SplashScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
          <Stack.Screen name="HomeTab" component={BottomTab} />
          <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Splash" component={SplashScreen} />
    </Stack.Navigator>
  );
}

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === "Home") iconName = Icons.home;
          else if (route.name === "Services") iconName = Icons.shop;
          else if (route.name === "Transactions") iconName = Icons.walletIcon;
          else if (route.name === "Profile") iconName = Icons.user;
          return (
            <Image
              source={iconName}
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? "#007AFF" : "#8e8e93",
              }}
            />
          );
        },
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Services" component={LeaderBoard} />
      <Tab.Screen name="Transactions" component={PastQuestion} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
