import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Movie } from "../../../services/movies/MovieApiModels";
import { BASE_IMAGE_URL } from "../../../constants";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamListHome } from "../../../router/Router";
import { StackNavigationProp } from "@react-navigation/stack";

const SearchCardList = (movie: Movie) => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamListHome>>();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.push("MovieDetails", { movie })}
    >
      <Image
        source={{ uri: `${BASE_IMAGE_URL}${movie.poster_path}` }}
        style={styles.image}
      />
      <View style={{ flexDirection: "column" }}>
        <Text
          style={{
            color: "#fff",
            maxWidth: 200,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          {movie.original_title}
        </Text>
        <Text
          style={{
            color: "#a7a7a7",
            maxWidth: 200,
            fontWeight: "bold",
            fontSize: 14,
          }}
        >
          {movie.release_date.split("-")[0]}
        </Text>
      </View>

      <TouchableOpacity style={{ top: 0, right: 0, position: "absolute" }}>
        <Entypo name="dots-three-vertical" color={"#fff"} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
  },

  image: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
});

export default SearchCardList;
