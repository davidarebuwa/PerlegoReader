import React from "react";
import {useDispatch} from "react-redux";
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { setArticleIndex } from "../core/article/articleActions";
import { PLANETS, STRINGS, IMG_URLS } from "../constants/constants";

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
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
            margin: 10,
          }}
        >
          {STRINGS.MENU}
        </Text>
        <FlatList
          data={Object.values(PLANETS)}
          style={{ flex: 1, margin: 10 }}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 10,
              }}
              key={`item-${item.id}-${item.title}`}
            >
              <TouchableOpacity onPress={() => handlePress(item)}>
                <View
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                        backgroundColor: "black",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Image
                        source={{ uri: Object.values(IMG_URLS)[Object.values(PLANETS).indexOf(item)] }}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 50,
                            resizeMode: "cover",
                        }}
                    />
                </View>

                <Text style={{ 
                    fontSize: 16, 
                    fontWeight: "bold",
                    textAlign: "center",
                    margin: 10,

             }}>{item}</Text>
              </TouchableOpacity>
            </View>
          )}
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
