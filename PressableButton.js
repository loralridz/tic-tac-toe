import React from "react";
import { Pressable, Text, View } from "react-native";

export const PressableButton = ({
  handlePress,
  btnStyle,
  wrapperStyle,
  btnValue,
  textStyle,
  index
}) => {
  return (
    <View style={btnStyle}>
      <Pressable
        onPress={() => handlePress(index)}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "pink" : "white"
          },
          wrapperStyle
        ]}
      >
        <Text style={textStyle}>{btnValue[index]}</Text>
      </Pressable>
    </View>
  );
};
