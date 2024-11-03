import {
  Animated,
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
import React, { useRef } from "react";

import {
  getNowPlayingMovies,
  getTopRatedMovies,
} from "../../services/movies/MoviesServices";
import { useQuery } from "@tanstack/react-query";
import NavBar from "../../components/nav-bar";
import { Movie } from "../../services/movies/MovieApiModels";
import CardMovie from "../../components/card-movie";
import { BASE_IMAGE_URL } from "../../constants";
import Pagiantion from "../../components/pagination";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const { data: nowPlaying } = useQuery({
    queryKey: ["now-playing"],
    queryFn: getNowPlayingMovies,
  });

  const { data: topRated } = useQuery({
    queryKey: ["topRated"],
    queryFn: getTopRatedMovies,
  });

  const bannerMovies = nowPlaying?.slice(0, 5);

  const handleOnScroll = (event: any) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <NavBar />

      <ScrollView>
        <View>
          <FlatList
            data={bannerMovies}
            renderItem={renderItem}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleOnScroll}
          />
          <Pagiantion data={bannerMovies!} scrollX={scrollX} />
        </View>
      </ScrollView>
    </View>
  );
};

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

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#060809",
  },
});
