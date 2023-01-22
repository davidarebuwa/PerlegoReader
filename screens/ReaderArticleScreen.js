import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

import RootComponent from "../components/RootComponent";

const ReaderArticleScreen = (props) => {
  return (
    <RootComponent>
      <View style={styles.screen}>
        <Text>Article Screen</Text>
      </View>
    </RootComponent>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default ReaderArticleScreen;
