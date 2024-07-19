import {
  View,
  TextInput,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getSearch } from "../../services/movies/MoviesServices";
import useDebounce from "../../hooks/useDebounce";
import SearchMenu from "./components/SerachMenu";
import SearchList from "./components/SearchList";
import { Movie } from "../../services/movies/MovieApiModels";

const SearchScreen = () => {
  const [searchValue, setSearchValue] = useState("");

  const debouncedSearchValue = useDebounce(searchValue, 1000);

  const { data: search } = useQuery({
    queryKey: ["search", debouncedSearchValue],
    queryFn: () => getSearch(debouncedSearchValue),
  });

  return (
    <View style={{ flex: 1, backgroundColor: "#060809" }}>
      <StatusBar />

      <TextInput
        style={styles.input}
        placeholder="Encontre filmes..."
        onChangeText={setSearchValue}
        value={searchValue}
      />
      {search?.length === 0 ? (
        <SearchMenu />
      ) : (
        <SearchList search={search as Movie[]} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 10,
    height: 50,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "gray",
    marginTop: 50,
    marginHorizontal: 20,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
});
export default SearchScreen;
