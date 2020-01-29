import React, { useState } from "react";
import {
  Alert,
  Button,
  Dimensions,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from "react-native";

import Card from "../components/Card";
import Colors from "../constants/colors";
import TextStyles from "../constants/textStyles";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import MainButton from "../components/MainButton";

// screen dimensions
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const StartGameScreen = props => {
  // state
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number",
        "Please enter a whole number between 1 and 99",
        [{ text: "OK", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <BodyText>You selected</BodyText>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton onPress={() => props.onStartGame(selectedNumber)}>
          START GAME
        </MainButton>
      </Card>
    );
  } else {
    confirmedOutput = <View></View>;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <TitleText style={styles.title}>Start A New Game!</TitleText>
        <Card style={styles.inputContainer}>
          <BodyText style={styles.instructions}>Select A Number</BodyText>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.buttonStyle}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.secondary}
              />
            </View>
            <View style={styles.buttonStyle}>
              <Button title="Confirm" onPress={confirmInputHandler} />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: "5%",
    alignItems: "center"
  },
  title: {
    color: Colors.primary,
    fontSize: TextStyles.screenTitle,
    marginVertical: "5%"
  },
  buttonContainer: {
    flexDirection: "row",
    width: screenWidth > 500 ? "70%" : "100%",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    borderRadius: 20
  },
  buttonStyle: {
    width: "40%"
  },
  inputContainer: {
    alignItems: "center",
    width: 300,
    maxWidth: "90%",
    minWidth: "70%",
    fontSize: TextStyles.screenInput
  },
  instructions: {
    fontSize: TextStyles.screenBody
  },
  input: {
    width: "50%",
    textAlign: "center",
    fontSize: screenHeight > 800 ? 24 : 16
  },
  summaryContainer: {
    marginTop: "5%",
    alignItems: "center"
  }
});

export default StartGameScreen;
