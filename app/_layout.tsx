import { Stack } from "expo-router";
import RootNavigator from "@/src/Navigator/RootNavigator";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";

export default function RootLayout() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
