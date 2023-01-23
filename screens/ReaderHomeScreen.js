import React from "react";
import { View, StyleSheet, Text} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { BUTTON_TEXT, STRINGS } from "../constants/constants";
import RootComponent from "../components/RootComponent";
import Button from "../components/Button";

const ReaderHomeScreen = (props) => {
  return (
    <RootComponent>
      <View style={styles.screen}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Icon
            name="rocket"
            size={200}
            color="#000"
            style={{ alignSelf: "center" }}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "center",
              margin: 10,
            }}
          >
            {STRINGS.WELCOME}
          </Text>
          <Text
            style={{
              fontSize: 12,
              textAlign: "center",
              margin: 10,
            }}
          >
            {STRINGS.DESCRIPTION}
          </Text>

        <Button
          title="Go to Menu"
          onPress={() => props.navigation.navigate("Menu")}
        />
        </View>
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
