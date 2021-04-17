import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  Alert,
  TouchableHighlight
} from "react-native";
import "./assets/App.css";
import { calculateWinner } from "./helper";
import { PressableButton } from "./PressableButton";

const App = () => {
  const [currentUser, setCurrentUser] = useState(false);
  const [buttonValue, setButtonValue] = useState([]);
  const [winner, setWinner] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const handlePlayAgain = () => {
    setButtonValue([]);
    setCurrentUser(!currentUser);
    setWinner(null);
  };
  const handlePress = (index) => {
    const sq = buttonValue;
    // return if value's already set
    if (sq[index] !== undefined) return;

    sq[index] = currentUser ? "X" : "O";
    setButtonValue(sq);
    setCurrentUser(!currentUser);
    // see if theres a win, pop up a modal
    if (calculateWinner(buttonValue, setWinner)) {
      setModalVisible(true);
      return;
    }
  };
  return (
    <View style={styles.container}>
      <Modal visible={false}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {winner === "X" ? (
              <Text style={styles.modalText}>Player 1 Won</Text>
            ) : (
              <Text style={styles.modalText}>Player 2 Won</Text>
            )}

            <Button style={styles.playAgainButton} onPress={handlePlayAgain}>
              Play Again
            </Button>
          </View>
        </View>
      </Modal>
      <Text style={styles.playerText}>Player 1 : X</Text>
      <View style={styles.board}>
        <View style={styles.row}>
          <PressableButton
            btnStyle={styles.button}
            btnValue={buttonValue}
            handlePress={handlePress}
            textStyle={styles.textStyle}
            wrapperStyle={styles.wrapperButton}
            index={0}
          />
          <PressableButton
            btnStyle={styles.button}
            btnValue={buttonValue}
            handlePress={handlePress}
            textStyle={styles.textStyle}
            wrapperStyle={styles.wrapperButton}
            index={1}
          />
          <PressableButton
            btnStyle={styles.button}
            btnValue={buttonValue}
            handlePress={handlePress}
            textStyle={styles.textStyle}
            wrapperStyle={styles.wrapperButton}
            index={2}
          />
        </View>
        <View style={styles.row}>
          <PressableButton
            btnStyle={styles.button}
            btnValue={buttonValue}
            handlePress={handlePress}
            textStyle={styles.textStyle}
            wrapperStyle={styles.wrapperButton}
            index={3}
          />
          <PressableButton
            btnStyle={styles.button}
            btnValue={buttonValue}
            handlePress={handlePress}
            textStyle={styles.textStyle}
            wrapperStyle={styles.wrapperButton}
            index={4}
          />
          <PressableButton
            btnStyle={styles.button}
            btnValue={buttonValue}
            handlePress={handlePress}
            textStyle={styles.textStyle}
            wrapperStyle={styles.wrapperButton}
            index={5}
          />
        </View>
        <View style={styles.row}>
          <PressableButton
            btnStyle={styles.button}
            btnValue={buttonValue}
            handlePress={handlePress}
            textStyle={styles.textStyle}
            wrapperStyle={styles.wrapperButton}
            index={6}
          />
          <PressableButton
            btnStyle={styles.button}
            btnValue={buttonValue}
            handlePress={handlePress}
            textStyle={styles.textStyle}
            wrapperStyle={styles.wrapperButton}
            index={7}
          />
          <PressableButton
            btnStyle={styles.button}
            btnValue={buttonValue}
            handlePress={handlePress}
            textStyle={styles.textStyle}
            wrapperStyle={styles.wrapperButton}
            index={8}
          />
        </View>
      </View>

      <Text style={styles.playerText}>Player 2 : O</Text>
      {winner ? <Text style={styles.winner}>Winner: {winner}</Text> : ""}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  row: {
    flexDirection: "row"
  },
  board: {
    width: 600,
    height: 600,
    overflow: "hidden"
  },
  button: {
    backgroundColor: "grey",
    borderWidth: 3,
    borderColor: "#000",
    width: 200,
    height: 200
  },
  playAgainButton: {
    backgroundColor: "darkgrey",
    color: "white",
    padding: "1rem"
  },
  playerText: {
    padding: "3rem",
    fontSize: "26px",
    fontFamily: "monospace"
  },
  wrapperButton: {
    width: "200px",
    height: "200px",
    backgroundColor: "transparent",
    cursor: "pointer"
  },
  textStyle: {
    fontSize: "6rem",
    textAlign: "center",
    justifyContent: "center",
    margin: "auto"
  },
  winner: {
    fontSize: "3rem"
  }
});

export default App;
