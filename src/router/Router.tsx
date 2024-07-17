import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "../screens/Search/SearchScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import StackNavigation from "./TabNavigator";
import HomeScreen from "../screens/Home/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { Movie } from "../services/movies/MovieApiModels";
import MovieScreen from "../screens/Movie/MovieScreen";
import TabNavigation from "./TabNavigator";

export type RootStackParamListHome = {
  Tab: undefined;
  MovieDetails: { movie: Movie };
};

const Stack = createStackNavigator<RootStackParamListHome>();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tab" component={TabNavigation} />
        <Stack.Screen name="MovieDetails" component={MovieScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
