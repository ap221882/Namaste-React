import React from "react";
import { StyleSheet, View, Text } from "react-native";

import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail />
      <ImageDetail />
      <ImageDetail />
    </View>
  );
};
export default ImageScreen;

const styles = StyleSheet.create({});
