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
import { useQuery } from "@tanstack/react-query";
import { getGenres } from "../services/movies/MoviesServices";
import { Genre } from "../services/movies/MovieApiModels";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 20
  : 64;

const NavBar = () => {
  const { data: genres } = useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
  });

  function renderItem({ item }: ListRenderItemInfo<Genre>) {
    return (
      <Text
        style={{
          paddingVertical: 10,
          paddingHorizontal: 20,
          backgroundColor: "#fff",
          borderRadius: 30,
        }}
      >
        {item.name}
      </Text>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ gap: 10 }}>
        <Text>Logo</Text>
        <FlatList
          data={genres}
          renderItem={renderItem}
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
