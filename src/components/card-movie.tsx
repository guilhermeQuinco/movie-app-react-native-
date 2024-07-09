import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Movie } from "../services/movies/MovieApiModels";
import { BASE_IMAGE_URL } from "../constants";
import { useNavigation } from "@react-navigation/native";

const CardMovie = (movie: Movie) => {
  const navigation = useNavigation();

  function navigateToMovie() {
    navigation.navigate("MovieDetails", { movie });
  }

  return (
    <TouchableOpacity style={styles.container} onPress={navigateToMovie}>
      <Image
        source={{ uri: `${BASE_IMAGE_URL}/${movie.poster_path}` }}
        style={{ width: 200, height: 300, borderRadius: 20 }}
      />
    </TouchableOpacity>
  );
};

export default CardMovie;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    width: 200,
    height: 300,
  },
});
