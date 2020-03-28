import React from "react";
import store from "@store";
import { Platform, StatusBar } from "react-native";
import { Provider } from "react-redux";
import FontProvider from "Lib/Core/FontProvider/native";
import Routes from "@Routes";
import { registerRootComponent } from "expo";

export default function App() {
  return (
    <FontProvider>
      <Provider store={store}>
        {Platform.OS === "ios" ? (
          <StatusBar barStyle="dark-content" />
        ) : (
          <StatusBar barStyle="light-content" />
        )}
        <Routes />
      </Provider>
    </FontProvider>
  );
}


registerRootComponent(App);
