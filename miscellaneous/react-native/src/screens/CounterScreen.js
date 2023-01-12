import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

const CounterScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Button onPress={() => setCount(count + 1)} title="Increase" />
      <Button onPress={() => setCount(count - 1)} title="Decrease" />
      <Text>Count: {count}</Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
