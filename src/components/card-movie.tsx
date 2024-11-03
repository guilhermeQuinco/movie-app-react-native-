import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Movie } from "../services/movies/MovieApiModels";
import { BASE_IMAGE_URL } from "../constants";
import { useNavigation } from "@react-navigation/native";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamListHome } from "../router/Router";

const CardMovie = (movie: Movie) => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamListHome>>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.push("MovieDetails", { movie })}
    >
      <Image
        source={{ uri: `${BASE_IMAGE_URL}/${movie.poster_path}` }}
        style={{ width: 170, height: 250, borderRadius: 20 }}
      />
    </TouchableOpacity>
  );
};

export default CardMovie;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    borderRadius: 20,
    height: 250,
  },
});
