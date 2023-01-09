import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

import studentData from "../../assets/data.json";

const ListScreen = () => {
  return (
    <View>
      <Text>ListScreen</Text>
      <FlatList
        // horizontal // having horizontal scroll
        // showsHorizontalScrollIndicator={false} // hiding horizontal scroll indicator
        data={studentData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={styles.textStyle}>
              <Text>Name: {item.first_name}</Text>
              <Text>Gender:{item.gender}</Text>
              <Text>Email: {item.email}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20,
  },
});
