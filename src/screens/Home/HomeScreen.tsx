import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

import { getNowPlayingMovies } from "../../services/movies/MoviesServices";
import { useQuery } from "@tanstack/react-query";
import NavBar from "../../components/nav-bar";
import { Movie } from "../../services/movies/MovieApiModels";
import CardMovie from "../../components/card-movie";
import ItemSeparator from "../../components/item-separator";

const HomeScreen = () => {
  const { data: nowPlaying } = useQuery({
    queryKey: ["now-playing"],
    queryFn: getNowPlayingMovies,
  });

  function renderItem({ item }: { item: Movie }) {
    return <CardMovie {...item} />;
  }

  return (
    <View style={styles.container}>
      <NavBar />

      <View style={{ gap: 20, paddingVertical: 40 }}>
        <Text style={{ color: "#fff", marginLeft: 10 }}>
          Now playing Movies
        </Text>
        <FlatList
          data={nowPlaying}
          renderItem={renderItem}
          horizontal
          contentContainerStyle={{ gap: 10 }}
          ListHeaderComponent={<ItemSeparator width={2} height={0} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#060809",
  },
});
