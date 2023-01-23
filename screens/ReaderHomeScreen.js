import React from "react";
import {
  View,
  StyleSheet,
  Text,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { BUTTON_TEXT, STRINGS, IMG_URLS } from "../constants/constants";
import RootComponent from "../components/RootComponent";
import Button from "../components/Button";
import common from "../constants/styles";

const ReaderHomeScreen = (props) => {
  return (
    <RootComponent>
      <View style={styles.screen}>
        <View style={{ flex: 1, justifyContent: "center" }}> 
          <Icon
            name="book-reader"
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

          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Button
              title={BUTTON_TEXT.MENU}
              onPress={() => {
                props.navigation.navigate("Menu");
              }}
            />
          </View>
        </View>
      </View>
    </RootComponent>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
  },
});

export default ReaderHomeScreen;
