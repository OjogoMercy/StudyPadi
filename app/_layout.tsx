import { Stack } from "expo-router";
import RootNavigator from "@/src/Navigator/RootNavigator";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";

import React from "react";
import { store } from '../src/Redux/Store'
import { Provider, useDispatch } from 'react-redux';
import Initializer from "./Initializer";
export default function RootLayout() {

  return (
    <Provider store={store} >
      <NavigationIndependentTree>
        <NavigationContainer>
          <Initializer/>
          <RootNavigator />
        </NavigationContainer>
      </NavigationIndependentTree>
    </Provider>
  );
}
