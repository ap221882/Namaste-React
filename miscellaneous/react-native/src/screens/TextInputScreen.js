import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";

const TextInputScreen = () => {
  const [text, setText] = useState("");
  return (
    <View>
      <Text>Enter name: {text}</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={text}
        onChangeText={(value) => setText(value)}
      />
    </View>
  );
};

export default TextInputScreen;

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: black,
    borderWidth: 1,
  },
});
