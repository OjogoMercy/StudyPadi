import { Stack } from "expo-router";
import RootNavigator from "@/src/Navigator/RootNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function RootLayout() {
  return (
    <NavigationContainer>
      <RootNavigator/>
    </NavigationContainer>
  )
}
