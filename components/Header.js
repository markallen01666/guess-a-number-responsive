import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

import Colors from '../constants/colors';
import TextStyles from '../constants/textStyles';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 5
  },
  headerTitle: {
    color: Colors.headerText,
    fontSize: TextStyles.headerFontSize,
    fontFamily: 'open-sans-bold'
  }
});

export default Header;
