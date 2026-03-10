import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthScreen from "../modules/auth/AuthScreen";
import ProductScreen from "../modules/products/ProductScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{ title: "Login" }}
        />

        <Stack.Screen
          name="Products"
          component={ProductScreen}
          options={{ title: "Products" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}