// rnfes
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ComponentsScreen = () => {
  const name = "Ajay";
  return (
    <View>
      <Text style={styles.textStyle}> This is Components Screen</Text>
      <Text style={styles.customTextStyle}>
        {name} is a mobile app developer
      </Text>
    </View>
  );
};

export default ComponentsScreen;

/**
 * * Stylesheet used for giving error messages when you mess up
 */
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
  },
  customTextStyle: {
    fontSize: 20,
  },
});
