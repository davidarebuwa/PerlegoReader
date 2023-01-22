import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

import RootComponent from "../components/RootComponent";

const ReaderMenuScreen = (props) => {
  return (
    <RootComponent>
      <View style={styles.screen}>
        <Text>Menu Screen</Text>
        <Button
            title="Go to Article"
            onPress={() => props.navigation.navigate("Article")}
            />
      </View>
    </RootComponent>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default ReaderMenuScreen;
