import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, Button } from "react-native";
import "./assets/App.css";
const App = () => {
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = "";
  if (timesPressed > 1) {
    textLog = timesPressed + "x onPress";
  } else if (timesPressed > 0) {
    textLog = "onPress";
  }

  return (
    <View style={styles.container}>
      {/* <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'white'
          },
          styles.wrapperCustom
        ]}>
        {({ pressed }) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'Press Me'}
          </Text>
        )}
      </Pressable>
      <View style={styles.logBox}>
        <Text testID="pressable_press_console">{textLog}</Text>    </View> */}
      {/* <h1 style={{color:"salmon"}}>Number Guessing Game</h1> */}
      {/* <Header fullname="Noor Rida" /> */}
      {/* <Text style={{ fontSize: 50 }}>Number: {getText}</Text> */}
      {/* <View style={{ flexDirection: "row", padding: "3rem" }}> */}
      {/* <Button title="Clear"  onPress={()=>setText(0)} />
         <Button title="Reset" onPress={()=>setText("")} /> */}
      {/* </View> */}
      <Text style={styles.playerText}>Player 1 : X</Text>
      <View style={styles.board}>
        <View style={styles.row}>
          <View style={styles.button}>
            <button title="" />
          </View>
          <View style={styles.button}>
            <button title="" />
          </View>
          <View style={styles.button}>
            <button title="" />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.button}>
            <button title="" />
          </View>
          <View style={styles.button}>
            <button title="" />
          </View>
          <View style={styles.button}>
            <button title="" />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.button}>
            <button title="" />
          </View>
          <View style={styles.button}>
            <button title="" />
          </View>
          <View style={styles.button}>
            <button title="" />
          </View>
        </View>
      </View>

      <Text style={styles.playerText}>Player 2 : O</Text>
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
  }
});

export default App;
