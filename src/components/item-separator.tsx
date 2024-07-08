import { View, Text } from "react-native";
import React from "react";

type ItemSeparatorProps = {
  width: number;
  height: number;
};

const ItemSeparator = ({ width, height }: ItemSeparatorProps) => {
  return <View style={{ width, height }} />;
};

export default ItemSeparator;
