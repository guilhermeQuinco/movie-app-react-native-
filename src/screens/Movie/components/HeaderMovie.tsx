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
          height: 200,
        }}
        resizeMode="cover"
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={navigation.goBack}>
            <MaterialIcons name="arrow-back-ios-new" color={"#fff"} size={25} />
          </TouchableOpacity>
        </View>
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
});
