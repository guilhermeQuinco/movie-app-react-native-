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
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ color: "#fff" }}>Test</Text>
    </SafeAreaView>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "transparent",
    paddingHorizontal: 10,
    paddingVertical: 20,
    gap: 10,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
  },
});
