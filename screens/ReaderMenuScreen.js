import React from "react";
import { View, StyleSheet, Text, Button, FlatList } from "react-native";

import { PLANETS, STRINGS } from "../constants/constants";

import RootComponent from "../components/RootComponent";


const ReaderMenuScreen = (props) => {
  return (
    <RootComponent>
      <View style={styles.screen}>
        <Text style={{fontSize: 16, fontWeight: "bold", textAlign: "center", margin: 10}}>{STRINGS.MENU}</Text>
        <FlatList
            data={Object.values(PLANETS)}
            style={{flex: 1, margin: 10}}
            renderItem={({item}) => (
                <View style={{flex: 1, flexDirection: "row", justifyContent: "space-between", margin: 10}}>
                    <Text style={{fontSize: 16, fontWeight: "bold"}}>{item}</Text>
                    </View>
            )}
            keyExtractor={item => item.id}
        />

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
