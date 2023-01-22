import React from "react";
import { View, StyleSheet, Text, Button, Image} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { BUTTON_TEXT, STRINGS } from "../constants/constants";
import RootComponent from "../components/RootComponent";

const ReaderHomeScreen = (props) => {
  return (
    <RootComponent>
      <View style={styles.screen}>
        <View style={{flex: 1, justifyContent: "center"}}>
        <Icon 
          name="book-reader"
          size={200}
          color="#000"
          style={{alignSelf: "center"}}
        />
        <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          textAlign: "center",
          margin: 10,
        }}
        >{STRINGS.WELCOME}</Text>

        <Button
          title="Go to Menu"
          style={{margin: 10}}
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
