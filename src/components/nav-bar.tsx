import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import React from "react";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 20
  : 64;

const NavBar = () => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    paddingTop: statusBarHeight,
    paddingHorizontal: 10,
    paddingVertical: 20,
    gap: 10,
  },
});
