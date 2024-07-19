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
import SearchCardList from "./SearchCardList";
import { size } from "lodash";

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
    <View style={{ flex: 1 }}>
      <View style={{ gap: 10, paddingVertical: 30 }}>
        <FlatList
          data={popular}
          numColumns={2}
          renderItem={renderItem}
          columnWrapperStyle={{ gap: 10, paddingHorizontal: 20 }}
          contentContainerStyle={{ gap: 10 }}
          ListHeaderComponent={() => (
            <View>
              <Text
                style={{
                  color: "#fff",
                  marginLeft: 20,
                  marginBottom: 10,
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Genres
              </Text>

              <FlatList
                data={genres}
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
                contentContainerStyle={{
                  gap: 10,
                  paddingHorizontal: 20,
                }}
                showsHorizontalScrollIndicator={false}
              />

              <Text
                style={{
                  color: "#fff",
                  marginLeft: 20,
                  marginTop: 20,
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Popular Movies
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default SearchMenu;
