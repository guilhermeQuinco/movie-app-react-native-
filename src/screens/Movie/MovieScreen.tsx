import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { View, StatusBar, StyleSheet, ScrollView } from "react-native";

import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../../services/movies/MoviesServices";

import { RootStackParamListHome } from "../../router/Router";
import HeaderMovie from "./components/HeaderMovie";
import MainContent from "./components/MainContent";
import { MovieDetail } from "../../services/movies/MovieDetailsApiModel";

type ScreenProps = StackScreenProps<RootStackParamListHome, "MovieDetails">;
const MovieScreen = ({ route }: ScreenProps) => {
  const { movie } = route.params;

  const { data: movieDetail } = useQuery({
    queryKey: ["details"],
    queryFn: () => getMovieDetails(movie.id),
  });

  return (
    <ScrollView style={styles.container}>
      <StatusBar />
      <HeaderMovie {...(movieDetail as MovieDetail)} />

      <View style={styles.content}>
        <MainContent {...(movieDetail as MovieDetail)} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  content: {
    marginTop: 20,
    gap: 20,
  },

  header: {
    top: 0,
    left: 0,
    position: "absolute",
    padding: 10,
  },
});

export default MovieScreen;
