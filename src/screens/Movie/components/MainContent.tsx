import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import CardMovie from "../../../components/card-movie";
import ActorCard from "../../../components/actor-card";
import { Movie } from "../../../services/movies/MovieApiModels";
import { CastMember } from "../../../services/movies/CreditsApiModels";
import { useQuery } from "@tanstack/react-query";
import {
  getCast,
  getSimilarMovies,
} from "../../../services/movies/MoviesServices";
import { MovieDetail } from "../../../services/movies/MovieDetailsApiModel";
import ItemSeparator from "../../../components/item-separator";

const MainContent = (movieDetail: MovieDetail) => {
  const { data: similarMovies } = useQuery({
    queryKey: ["similar"],
    queryFn: () => getSimilarMovies(movieDetail.id),
  });

  const { data: cast } = useQuery({
    queryKey: ["cast"],
    queryFn: () => getCast(movieDetail.id),
  });

  console.log(cast);

  function renderItemMovie({ item }: { item: Movie }) {
    return <CardMovie {...item} />;
  }

  function renderItemCast({ item }: { item: CastMember }) {
    return <ActorCard {...item} />;
  }

  return (
    <>
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
    </>
  );
};

export default MainContent;
