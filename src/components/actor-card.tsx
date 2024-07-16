import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { BASE_IMAGE_URL } from "../constants";
import { CastMember } from "../services/movies/CreditsApiModels";

const ActorCard = (actor: CastMember) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{ uri: `${BASE_IMAGE_URL}/${actor.profile_path}` }}
        style={{ width: 100, height: 160, borderRadius: 20 }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    width: 100,
    height: 200,
  },
});

export default ActorCard;
