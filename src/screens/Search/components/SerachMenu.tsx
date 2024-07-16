import { View, Text, FlatList } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  getGenres,
  getPopularMovies,
  getTopRatedMovies,
} from "../../../services/movies/MoviesServices";
import CardMovie from "../../../components/card-movie";
import { Movie } from "../../../services/movies/MovieApiModels";
import ItemSeparator from "../../../components/item-separator";

const SearchMenu = () => {
  const { data: popular } = useQuery({
    queryKey: ["popular"],
    queryFn: getPopularMovies,
  });

  const { data: genres } = useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
  });

  const { data: topRated } = useQuery({
    queryKey: ["topRated"],
    queryFn: getTopRatedMovies,
  });

  function renderItem({ item }: { item: Movie }) {
    return <CardMovie {...item} />;
  }

  return (
    <View>
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
          showsHorizontalScrollIndicator={false}
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
      <View style={{ gap: 10, paddingVertical: 30 }}>
        <Text style={{ color: "#fff", marginLeft: 10 }}>Top Rated Movies</Text>
        <FlatList
          data={topRated}
          renderItem={renderItem}
          horizontal
          contentContainerStyle={{ gap: 10 }}
        />
      </View>
    </View>
  );
};

export default SearchMenu;
