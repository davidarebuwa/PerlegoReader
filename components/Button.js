import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import common from "../constants/styles";

export default function Button(props) {
  const { onPress, title = "Menu" } = props;
  return (
    <Pressable style={common.button} onPress={onPress}>
      <Text style={common.text}>{title}</Text>
    </Pressable>
  );
}
 


