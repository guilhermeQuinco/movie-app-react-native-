import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import React from "react";
import { BASE_IMAGE_URL } from "../../../constants";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { MovieDetail } from "../../../services/movies/MovieDetailsApiModel";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const HeaderMovie = (movieDetail: MovieDetail) => {
  const navigation = useNavigation();

  const window = useWindowDimensions();

  const width = window.width;

  return (
    <View>
      <ImageBackground
        source={{ uri: `${BASE_IMAGE_URL}${movieDetail?.backdrop_path}` }}
        style={{
          width: width,
          height: 250,
        }}
        resizeMode="cover"
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={navigation.goBack}>
            <MaterialIcons name="arrow-back-ios-new" color={"#fff"} size={25} />
          </TouchableOpacity>
        </View>
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,1.0)"]}
          style={styles.background}
        />
      </ImageBackground>
    </View>
  );
};

export default HeaderMovie;

const styles = StyleSheet.create({
  header: {
    top: 0,
    left: 0,
    position: "absolute",
    padding: 10,
  },

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 200,
  },
});
