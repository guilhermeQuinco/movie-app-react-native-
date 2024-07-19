import { View, Text } from "react-native";
import React from "react";
import { Movie } from "../services/movies/MovieApiModels";

const Pagiantion = ({ data }: { data: Movie[] }) => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 210,
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data.map((_, index) => {
        return (
          <View
            key={index.toString()}
            style={{
              width: 10,
              height: 10,
              borderRadius: 10,
              backgroundColor: "#CCC",
              marginHorizontal: 3,
            }}
          ></View>
        );
      })}
    </View>
  );
};
export default Pagiantion;
