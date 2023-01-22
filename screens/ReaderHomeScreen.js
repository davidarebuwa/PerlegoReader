import React from "react";
import { View, StyleSheet, Text, Button} from "react-native";

import RootComponent from "../components/RootComponent";

const ReaderHomeScreen = (props) => {
  return (
    <RootComponent>
      <View style={styles.screen}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Menu"
          onPress={() => props.navigation.navigate("Menu")}
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

export default ReaderHomeScreen;
