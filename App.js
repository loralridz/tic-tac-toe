import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, Button } from "react-native";
import "./assets/App.css";
import { calculateWinner } from "./helper";
import { PressableButton } from "./PressableButton";

const App = () => {
  const [currentUser, setCurrentUser] = useState(false);
  const [buttonValue, setButtonValue] = useState([]);
  const [winner, setWinner] = useState(null);

  const handlePress = (index) => {
    const sq = buttonValue;
    if (sq[index] !== undefined) return;
    if (calculateWinner(buttonValue, setWinner)) return;
    sq[index] = currentUser ? "X" : "O";
    setButtonValue(sq);
    setCurrentUser(!currentUser);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.playerText}>Player 1 : X</Text>
      <View style={styles.board}>
        <View style={styles.row}>
          <View style={styles.button}>
            <PressableButton
              btnStyle={styles.button}
              btnValue={buttonValue}
              handlePress={handlePress}
              textStyle={styles.textStyle}
              wrapperStyle={styles.wrapperButton}
              index={0}
            />
          </View>
          <View style={styles.button}>
            <PressableButton
              btnStyle={styles.button}
              btnValue={buttonValue}
              handlePress={handlePress}
              textStyle={styles.textStyle}
              wrapperStyle={styles.wrapperButton}
              index={1}
            />
          </View>
          <View style={styles.button}>
            <PressableButton
              btnStyle={styles.button}
              btnValue={buttonValue}
              handlePress={handlePress}
              textStyle={styles.textStyle}
              wrapperStyle={styles.wrapperButton}
              index={2}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.button}>
            <PressableButton
              btnStyle={styles.button}
              btnValue={buttonValue}
              handlePress={handlePress}
              textStyle={styles.textStyle}
              wrapperStyle={styles.wrapperButton}
              index={3}
            />
          </View>
          <View style={styles.button}>
            <PressableButton
              btnStyle={styles.button}
              btnValue={buttonValue}
              handlePress={handlePress}
              textStyle={styles.textStyle}
              wrapperStyle={styles.wrapperButton}
              index={4}
            />
          </View>
          <View style={styles.button}>
            <PressableButton
              btnStyle={styles.button}
              btnValue={buttonValue}
              handlePress={handlePress}
              textStyle={styles.textStyle}
              wrapperStyle={styles.wrapperButton}
              index={5}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.button}>
            <PressableButton
              btnStyle={styles.button}
              btnValue={buttonValue}
              handlePress={handlePress}
              textStyle={styles.textStyle}
              wrapperStyle={styles.wrapperButton}
              index={6}
            />
          </View>
          <View style={styles.button}>
            <PressableButton
              btnStyle={styles.button}
              btnValue={buttonValue}
              handlePress={handlePress}
              textStyle={styles.textStyle}
              wrapperStyle={styles.wrapperButton}
              index={7}
            />
          </View>
          <View style={styles.button}>
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
