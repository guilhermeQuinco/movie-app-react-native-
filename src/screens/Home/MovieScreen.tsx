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

type ScreenProps = StackScreenProps<RootStackParamListHome, "MovieDetails">;
const MovieScreen = ({ route, navigation }: ScreenProps) => {
  const { movie } = route.params;

  const window = useWindowDimensions();

  const width = window.width;

  const { data: movieDetail } = useQuery({
    queryKey: ["details"],
    queryFn: () => getMovieDetails(movie.id),
  });

  const { data: similarMovies } = useQuery({
    queryKey: ["similar"],
    queryFn: () => getSimilarMovies(movie.id),
  });

  const { data: cast } = useQuery({
    queryKey: ["cast"],
    queryFn: () => getCast(movie.id),
  });

  function renderItemMovie({ item }: { item: Movie }) {
    return <CardMovie {...item} />;
  }

  function renderItemCast({ item }: { item: CastMember }) {
    return <ActorCard {...item} />;
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar />
      <ImageBackground
        source={{ uri: `${BASE_IMAGE_URL}${movieDetail?.backdrop_path}` }}
        style={{
          width: width,
          height: 200,
        }}
        resizeMode="cover"
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={navigation.goBack}>
            <MaterialIcons name="arrow-back-ios-new" color={"#fff"} size={25} />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <Text
          style={{
            color: "#fff",
            fontSize: 30,
            fontWeight: "bold",
            paddingHorizontal: 10,
          }}
        >
          {movieDetail?.title}
        </Text>

        <TouchableOpacity style={{ gap: 5, paddingHorizontal: 10 }}>
          <AntDesign name="plus" color={"#fff"} size={30} />
          <Text
            style={{
              color: "#fff",
              flexDirection: "column",
            }}
          >
            My list
          </Text>
        </TouchableOpacity>

        <Text style={{ color: "#f1f1f1", paddingHorizontal: 10 }}>
          {movieDetail?.overview}
        </Text>

        <FlatList
          data={movieDetail?.genres}
          horizontal
          contentContainerStyle={{ gap: 10 }}
          renderItem={({ item }) => (
            <Text style={{ color: "#949494", paddingHorizontal: 10 }}>
              {item.name}
            </Text>
          )}
          keyExtractor={(item) => item.id.toString()}
        />

        <View style={{ gap: 10, marginTop: 40 }}>
          <Text
            style={{
              color: "#f1f1f1",

              fontWeight: "bold",
              paddingHorizontal: 10,
            }}
          >
            Cast & Crew
          </Text>
          <FlatList
            data={cast}
            renderItem={renderItemCast}
            horizontal
            contentContainerStyle={{ gap: 20 }}
            ListHeaderComponent={<ItemSeparator width={2} height={0} />}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>

        <View style={{ gap: 10, marginTop: 40 }}>
          <Text style={{ color: "#f1f1f1", paddingHorizontal: 10 }}>
            You also like{" "}
          </Text>
          <FlatList
            data={similarMovies}
            renderItem={renderItemMovie}
            horizontal
            contentContainerStyle={{ gap: 10 }}
            ListHeaderComponent={<ItemSeparator width={2} height={0} />}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
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
