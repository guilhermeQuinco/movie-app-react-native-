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
import { LinearGradient } from "expo-linear-gradient";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 20
  : 64;

const nav = ["All", "Movies", "Tv Shows"];

const NavBar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["rgba(0,0,0,1.0)", "transparent"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 100,
          justifyContent: "center",
        }}
      />
      <FlatList
        data={nav}
        renderItem={({ item }) => (
          <Text
            style={{
              color: "#f8f8f8",
              textAlign: "center",
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            {item}
          </Text>
        )}
        horizontal
        contentContainerStyle={{ gap: 50 }}
      />
    </SafeAreaView>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "transparent",
    paddingHorizontal: 10,
    paddingVertical: 30,
    gap: 10,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
