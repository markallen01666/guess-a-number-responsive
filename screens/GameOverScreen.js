import React from "react";
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View
} from "react-native";

import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

// screen dimensions
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText style={styles.titleText}>The Game is over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.png")}
          style={styles.image}
          resize="cover"
          fadeDuration={1000}
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed
          <Text style={styles.highlight}> {props.roundsNumber}</Text> rounds to
          guess the number
          <Text style={styles.lowlight}> {props.userChoice}</Text>
        </BodyText>
      </View>
      <View style={styles.buttonContainer}>
        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    marginTop: 20
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderWidth: 5,
    borderRadius: 300 / 2,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 20
  },
  image: {
    width: "100%",
    height: "100%"
  },
  resultContainer: {
    width: "80%"
  },
  titleText: {
    textAlign: "center",
    fontSize: screenHeight > 800 ? 24 : 16
  },
  resultText: {
    textAlign: "center",
    fontSize: 20
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold"
  },
  lowlight: {
    color: Colors.secondary,
    fontFamily: "open-sans-bold"
  }
});

export default GameOverScreen;
