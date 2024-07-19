import React from "react";
import { Movie } from "../services/movies/MovieApiModels";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home/HomeScreen";
import MovieScreen from "../screens/Movie/MovieScreen";
import Router from "./Router";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import SearchScreen from "../screens/Search/SearchScreen";
import FavoritesScreen from "../screens/Favorites/FavoritesScreen";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  const screenOptions = () => ({
    headerShown: false,
    tabBarStyle: { backgroundColor: "black", borderColor: "black" },
    tabBarActiveTintColor: "white",
  });
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="heart-o" color={color} size={size} />
          ),
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" color={color} size={size} />
          ),
          tabBarHideOnKeyboard: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
