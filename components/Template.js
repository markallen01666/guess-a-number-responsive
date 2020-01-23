// React native functional component template

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ComponentName = props => {
  return (
    <View style={styles.componentContainer}>
      <Text style={styles.componentText}>Text goes here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    flex: 1,
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  componentText: {
    color: "black",
    fontSize: 20
  }
});

export default ComponentName;
