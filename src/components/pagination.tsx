import { View, Text, Animated, Dimensions, StyleSheet } from "react-native";
import React from "react";
import { Movie } from "../services/movies/MovieApiModels";

type Props = {
  data: Movie[];
  scrollX: Animated.Value;
};

const { width } = Dimensions.get("screen");

const Pagiantion = ({ data, scrollX }: Props) => {
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
      {data?.map((_, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [12, 30, 12],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={index.toString()}
            style={[styles.dot, { width: dotWidth }]}
          />
        );
      })}
    </View>
  );
};
export default Pagiantion;

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#595252",
    marginHorizontal: 3,
  },
});
