import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";
import React from "react";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 20
  : 64;

const Genres = ["All", "Action", "Sci-fi", "Horror"];

const NavBar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ gap: 10 }}>
        <Text>Logo</Text>
        <FlatList
          data={Genres}
          renderItem={({ item }) => (
            <Text
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                backgroundColor: "#fff",
                borderRadius: 30,
              }}
            >
              {item}
            </Text>
          )}
          horizontal
          contentContainerStyle={{ gap: 10 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1cbae9",
    paddingTop: statusBarHeight,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
