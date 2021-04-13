import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, Button } from "react-native";
import "./assets/App.css";
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.playerText}>Player 1 : X</Text>
      <View style={styles.board}>
        <View style={styles.row}>
          <View style={styles.button}>
            <Pressable
              onPress={() => {
                console.log("Clicked");
              }}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "pink" : "white"
                },
                styles.wrapperButton
              ]}
            />
          </View>
          <View style={styles.button}>
            <Pressable
              onPress={() => {
                console.log("Clicked");
              }}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "pink" : "white"
                },
                styles.wrapperButton
              ]}
            />
          </View>
          <View style={styles.button}>
            <Pressable
              onPress={() => {
                console.log("Clicked");
              }}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "pink" : "white"
                },
                styles.wrapperButton
              ]}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.button}>
            <Pressable
              onPress={() => {
                console.log("Clicked");
              }}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "pink" : "white"
                },
                styles.wrapperButton
              ]}
            />
          </View>
          <View style={styles.button}>
            <Pressable
              onPress={() => {
                console.log("Clicked");
              }}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "pink" : "white"
                },
                styles.wrapperButton
              ]}
            />
          </View>
          <View style={styles.button}>
            <Pressable
              onPress={() => {
                console.log("Clicked");
              }}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "pink" : "white"
                },
                styles.wrapperButton
              ]}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.button}>
            <Pressable
              onPress={() => {
                console.log("Clicked");
              }}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "pink" : "white"
                },
                styles.wrapperButton
              ]}
            />
          </View>
          <View style={styles.button}>
            <Pressable
              onPress={() => {
                console.log("Clicked");
              }}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "pink" : "white"
                },
                styles.wrapperButton
              ]}
            />
          </View>
          <View style={styles.button}>
            <Pressable
              onPress={() => {
                console.log("Clicked");
              }}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "pink" : "white"
                },
                styles.wrapperButton
              ]}
            />
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
  },
  wrapperButton: {
    width: "200px",
    height: "200px",
    backgroundColor: "transparent",
    cursor: "pointer"
  }
});

export default App;
