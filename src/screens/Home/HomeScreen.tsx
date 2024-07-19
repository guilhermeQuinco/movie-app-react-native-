import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
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
import { BASE_IMAGE_URL } from "../../constants";
import Pagiantion from "../../components/pagination";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = () => {
  const { data: nowPlaying } = useQuery({
    queryKey: ["now-playing"],
    queryFn: getNowPlayingMovies,
  });

  function renderItem({ item }: { item: Movie }) {
    const { width, height } = Dimensions.get("screen");

    return (
      <View style={{ alignItems: "flex-start", width, height }}>
        <ImageBackground
          source={{ uri: `${BASE_IMAGE_URL}${item.poster_path}` }}
          resizeMode="cover"
          style={{ width: "100%", flex: 0.7 }}
        >
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,1.0)"]}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: 200,
              padding: 10,
            }}
          />
        </ImageBackground>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <NavBar />

      <ScrollView>
        <View>
          <FlatList
            data={nowPlaying}
            renderItem={renderItem}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          />
          <Pagiantion data={nowPlaying} />
        </View>
        <View>
          <FlatList
            data={nowPlaying}
            renderItem={({ item }) => <CardMovie {...item} />}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
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
