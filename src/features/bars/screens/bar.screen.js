import React from "react";
import { Searchbar } from "react-native-paper";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  ScrollViewBase,
} from "react-native";
import { BarInfo } from "../components/bar.info";


export const BarScreen = () => (
  <SafeAreaView style={styles.container}>
    {/* <View style={styles.search}>
      <Searchbar placeholder="Search" />
    </View> */}
    <ScrollView style={styles.list}>
      <BarInfo/>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  
  list: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: "grey",
  },
});