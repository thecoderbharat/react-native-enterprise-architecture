/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import { StatusBar, useColorScheme } from "react-native";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { store } from "./src/store/store";
import AppNavigator from "./src/app/AppNavigator";

function App() {

  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaProvider>

      <Provider store={store}>

        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />

        <AppNavigator />

      </Provider>

    </SafeAreaProvider>
  );
}

export default App;
