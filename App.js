import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";
import { BarScreen } from "./src/features/bars/screens/bar.screen";

console.log(StatusBar.currentHeight);

export default function App() {
  return (
    <>
      <BarScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}