import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import mountain from "../../assets/images/mountain.jpg";

const ImageDetail = () => {
  return (
    <View>
      <Image source={mountain} />
      <Text>ImageDetail</Text>
    </View>
  );
};

export default ImageDetail;

const styles = StyleSheet.create({});
