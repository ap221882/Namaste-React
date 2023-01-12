import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      {/* Limited features */}
      <Button
        title="Go to Components Screen"
        onPress={() => navigate("Components")}
      />
      <Button title="Go to List Screen" onPress={() => navigate("List")} />
      <Button
        title="Go to Image Screen"
        onPress={() => navigate("ImageScreen")}
      />
      <Button
        title="Go to CounterScreen Screen"
        onPress={() => navigate("CounterScreen")}
      />
      {/* Highly Customisable and can detect press on any kind of element */}
      {/* <TouchableOpacity onPress={() => navigate("List")}>
        <Text>Go to List screen</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
