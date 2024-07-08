import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { Movie } from "../services/movies/MovieApiModels";
import { BASE_IMAGE_URL } from "../constants";

const CardMovie = ({ poster_path }: Movie) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `${BASE_IMAGE_URL}/${poster_path}` }}
        style={{ width: 200, height: 300, borderRadius: 20 }}
      />
    </View>
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
