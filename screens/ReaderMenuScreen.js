import React from "react";
import {useDispatch} from "react-redux";
import { View, StyleSheet, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { setArticleIndex } from "../core/article/articleActions";
import { PLANETS, STRINGS } from "../constants/constants";

import RootComponent from "../components/RootComponent";

const ReaderMenuScreen = (props) => {
    const dispatch = useDispatch();

    const handlePress = (planet) => {
        const index = Object.values(PLANETS).indexOf(planet);
        dispatch(setArticleIndex(index));
        props.navigation.navigate("Article", { selectedPlanet: planet });
    }

  return (
    <RootComponent>
      <View style={styles.screen}>
        <Text style={{fontSize: 16, fontWeight: "bold", textAlign: "center", margin: 10}}>{STRINGS.MENU}</Text>
        <FlatList
            data={Object.values(PLANETS)}
            style={{flex: 1, margin: 10}}
            renderItem={({item}) => (
                <View style={{flex: 1, flexDirection: "row", justifyContent: "space-between", margin: 10}}
                key={`item-${item.id}-${item.title}`}
                >
                    <TouchableOpacity onPress={() => handlePress(item)}>
                    <Text style={{fontSize: 16, fontWeight: "bold"}}>{item}</Text>
                    </TouchableOpacity>
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
