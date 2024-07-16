import { View, Text, FlatList } from "react-native";
import React from "react";
import { Movie } from "../../../services/movies/MovieApiModels";
import SearchCardList from "./SearchCardList";

const SearchList = ({ search }: { search: Movie[] }) => {
  function renderItem({ item }: { item: Movie }) {
    return <SearchCardList {...item} />;
  }
  return (
    <FlatList
      data={search}
      renderItem={renderItem}
      contentContainerStyle={{ paddingHorizontal: 10, gap: 20, marginTop: 20 }}
    />
  );
};

export default SearchList;
