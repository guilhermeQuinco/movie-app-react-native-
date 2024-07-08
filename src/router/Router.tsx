import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { IoHomeOutline } from "react-icons/io5";
import SearchScreen from "../screens/SearchScreen";

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
