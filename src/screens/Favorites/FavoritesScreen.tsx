import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { getTopRatedMovies } from "../../services/movies/MoviesServices";
import { useQuery } from "@tanstack/react-query";
import CardMovie from "../../components/card-movie";
import { BASE_IMAGE_URL } from "../../constants";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamListHome } from "../../router/Router";

const FavoritesScreen = () => {
  const { data: topRated } = useQuery({
    queryKey: ["topRated"],
    queryFn: getTopRatedMovies,
  });

  const navigation =
    useNavigation<StackNavigationProp<RootStackParamListHome>>();

  return (
    <View style={{ backgroundColor: "#060809", flex: 1 }}>
      <Text style={{ color: "#fff", padding: 10 }}>FavoritesScreen</Text>
      <View>
        <FlatList
          data={topRated}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Image
                source={{ uri: `${BASE_IMAGE_URL}/${item.poster_path}}` }}
                style={{
                  width: 140,
                  height: 210,
                  borderRadius: 20,
                  objectFit: "cover",
                }}
              />
            </TouchableOpacity>
          )}
          horizontal
          contentContainerStyle={{ gap: 10, paddingHorizontal: 10 }}
        />
      </View>
    </View>
  );
};

export default FavoritesScreen;
