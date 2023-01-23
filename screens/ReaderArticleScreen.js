import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
} from "react-native";
import { WebView } from "react-native-webview";
import { useDispatch, useSelector } from "react-redux";
import { BUTTON_TEXT } from "../constants/constants";
import Button from "../components/Button";
import RootComponent from "../components/RootComponent";
import PLANETS from "../constants/planets";

const ReaderArticleScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { selectedPlanet } = route.params;
  const { articleIndex } = useSelector((state) => state.article);
  const [currentPlanet, setCurrentPlanet] = useState(selectedPlanet);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);

  const webViewRef = useRef(null);

   const onMessage = (event) => {
     console.log(event.nativeEvent.data);
   };

  

  const getPlanet = () => {
    const planets = Object.values(PLANETS);
    const planet = planets[0].filter(
      (planet) => planet.title === selectedPlanet
    )[0];
    return planet;
  };

  const showPrevSection = () => {
    setCurrentSectionIndex(Math.max(-1, currentSectionIndex - 1));
    console.log(currentSectionIndex);

    webViewRef.current.injectJavaScript(`
            try {
                if (${currentSectionIndex} < 0) {  
                    window.scrollTo(0, 0);
                } else {
                    var sections = document.getElementsByClassName('mw-headline');
                    if (sections && sections[${currentSectionIndex}]) { sections[${currentSectionIndex}].scrollIntoView(); }
                }
            } catch (error) {
                window.webkit.messageHandlers.ReactNativeWebView.postMessage("Error: " + error.message);
            }
            true;
        `);
  };

  const showNextSection = () => {
    setCurrentSectionIndex(currentSectionIndex + 1);
    console.log(currentSectionIndex);

    webViewRef.current.injectJavaScript(`
            try {
                if (${currentSectionIndex} < 0) {  
                    window.scrollTo(0, 0);
                } else {
                    var sections = document.getElementsByClassName('mw-headline');
                    if (sections && sections[${currentSectionIndex}]) { sections[${currentSectionIndex}].scrollIntoView(); }
                }
            } catch (error) {
                window.webkit.messageHandlers.ReactNativeWebView.postMessage("Error: " + error.message);
            }
            true;
        `);
  };

  useEffect(() => {
    const planet = getPlanet();
    setCurrentPlanet(planet);
  }, [selectedPlanet]);

  useEffect(() => {
    const planet = Object.values(PLANETS)[0][articleIndex];
    setCurrentPlanet(planet);
  }, [articleIndex]);

  if (isLoading) {
    return (
      <RootComponent>
        <View style={styles.screen}>
          <ActivityIndicator size="large" />
        </View>
      </RootComponent>
    );
  }

  return (
    <RootComponent>
      <View style={styles.screen}>
        <WebView
          ref={webViewRef}
          source={{ uri: currentPlanet.url }}
          startInLoadingState={true}
          onMessage={onMessage}
          renderLoading={() => (
            <ActivityIndicator
              color="black"
              size="large"
              style={styles.flexContainer}
            />
          )}
          javaScriptEnabled={true}
          style={{ flex: 1 }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <Button
            title={BUTTON_TEXT.PREVIOUS}
            onPress={() => {
                showPrevSection();
            }}
          />
          <Button
            title={BUTTON_TEXT.NEXT}
            onPress={() => {
                showNextSection();
            }}
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

export default ReaderArticleScreen;
