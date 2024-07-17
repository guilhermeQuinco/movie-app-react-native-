import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import {
  View,
  Text,
  useWindowDimensions,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Button,
  FlatList,
  ListRenderItem,
  ScrollView,
  ImageBackground,
} from "react-native";

import { useQuery } from "@tanstack/react-query";
import {
  getCast,
  getMovieDetails,
  getSimilarMovies,
} from "../../services/movies/MoviesServices";
import { Image } from "react-native";
import { BASE_IMAGE_URL } from "../../constants";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CardMovie from "../../components/card-movie";
import { Movie } from "../../services/movies/MovieApiModels";
import ActorCard from "../../components/actor-card";
import { CastMember } from "../../services/movies/CreditsApiModels";
import ItemSeparator from "../../components/item-separator";
import { LinearGradient } from "expo-linear-gradient";
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

  console.log(movieDetail);

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
