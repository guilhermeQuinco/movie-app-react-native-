import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { BASE_IMAGE_URL } from "../constants";
import { CastMember } from "../services/movies/CreditsApiModels";
import { ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ActorCard = (actor: CastMember) => {
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground
        source={{ uri: `${BASE_IMAGE_URL}/${actor.profile_path}` }}
        style={{ width: 100, height: 160, borderRadius: 20 }}
      >
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,1.0)"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: 100,
            justifyContent: "flex-end",
            padding: 10,
          }}
        >
          <Text style={{ color: "#fff", textAlign: "center" }}>
            {actor.name}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    width: 100,
    height: 160,
    overflow: "hidden",
  },
});

export default ActorCard;
