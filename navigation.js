import React from "react";

import Main from "./components/Main";
import InfoProduct from "./components/InfoProduct";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: "Главная" }}
        />
        <Stack.Screen
          name="InfoProduct"
          component={InfoProduct}
          options={{ title: "InfoProduct" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
