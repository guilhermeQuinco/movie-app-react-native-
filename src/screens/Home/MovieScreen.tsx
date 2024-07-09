import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { View, Text } from "react-native";
import { RootStackParamList } from "./HomeStackScreen";
import { useQuery } from "@tanstack/react-query";
import { getMovieDetails } from "../../services/movies/MoviesServices";

type ScreenProps = StackScreenProps<RootStackParamList, "MovieDetails">;
const MovieScreen = ({ route }: ScreenProps) => {
  const { movie } = route.params;

  const { data: movieDetail } = useQuery({
    queryKey: ["details"],
    queryFn: () => getMovieDetails(movie.id),
  });

  console.log(movieDetail);

  return (
    <View style={{ marginTop: 40 }}>
      <Text>movie: {movieDetail?.title}</Text>
    </View>
  );
};

export default MovieScreen;
