import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import MovieScreen from "./MovieScreen";
import { Movie } from "../../services/movies/MovieApiModels";

export type RootStackParamList = {
  Home: undefined;
  MovieDetails: { movie: Movie };
};

const Stack = createStackNavigator<RootStackParamList>();

const HomeStackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MovieDetails" component={MovieScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackScreen;
