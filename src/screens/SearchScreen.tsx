import { View, Text, TextInput, StyleSheet, FlatList } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getGenres, getPopularMovies } from "../services/movies/MoviesServices";
import CardMovie from "../components/card-movie";
import { Movie } from "../services/movies/MovieApiModels";
import ItemSeparator from "../components/item-separator";

const SearchScreen = () => {
  const { data: popular } = useQuery({
    queryKey: ["popular"],
    queryFn: getPopularMovies,
  });

  const { data: genres } = useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
  });

  function renderItem({ item }: { item: Movie }) {
    return <CardMovie {...item} />;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#060809" }}>
      <TextInput style={styles.input} placeholder="Encontre filmes..." />

      <View style={{ gap: 10, paddingVertical: 30 }}>
        <Text style={{ color: "#fff", marginLeft: 10 }}>Genres</Text>
        <FlatList
          data={genres}
          ListHeaderComponent={<ItemSeparator width={2} height={0} />}
          renderItem={({ item }) => (
            <Text
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                backgroundColor: "#fff",
                borderRadius: 10,
              }}
            >
              {item.name}
            </Text>
          )}
          horizontal
          contentContainerStyle={{ gap: 10 }}
        />
      </View>

      <View style={{ gap: 10, paddingVertical: 30 }}>
        <Text style={{ color: "#fff", marginLeft: 10 }}>
          Recommended Movies
        </Text>
        <FlatList
          data={popular}
          renderItem={renderItem}
          horizontal
          contentContainerStyle={{ gap: 10 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 5,
    height: 50,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "gray",
    marginTop: 50,
    borderRadius: 10,
  },
});
export default SearchScreen;
