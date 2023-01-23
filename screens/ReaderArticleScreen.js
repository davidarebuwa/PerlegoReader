import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  ActivityIndicator,
} from "react-native";
import { WebView } from "react-native-webview";
import { useDispatch, useSelector } from "react-redux";
import { setArticleIndex } from "../core/article/articleActions";
import { BUTTON_TEXT } from "../constants/constants";
import RootComponent from "../components/RootComponent";
import PLANETS from "../constants/planets";

const ReaderArticleScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { selectedPlanet } = route.params;
  const { articleIndex } = useSelector((state) => state.article);
  const [currentHeading, setCurrentHeading] = useState(1);
  const [currentPlanet, setCurrentPlanet] = useState(selectedPlanet);
  const [isLoading, setIsLoading] = useState(false);
  const webviewRef = useRef(null);

   const renderLoadingView = () => {
     return (
       <View
         style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
       >
         <ActivityIndicator size="large" />
       </View>
     );
   };

  const jsToInject = `
			var current = 0;
			var headings = $('h2');

			window.addEventListener("message", function(data) {
				if (data.data === 'Next'){
					if (headings.length > current) {
						++current;
						$("html, body").animate( { scrollTop: headings.eq(current).position().top }, 200);
					} else {
						alert('You have reached the end of the page');
					}
				} else {
					if (current > 0) {
						--current;
						$("html, body").animate( { scrollTop: headings.eq(current).position().top }, 200);
					}
				}

				event.preventDefault();
			});`;

  const getPlanet = () => {
    const planets = Object.values(PLANETS);
    const planet = planets[0].filter(
      (planet) => planet.title === selectedPlanet
    )[0];
    return planet;
  };

  const handleNext = () => {
    //Upon clicking on the Next button, the device should navigate to the next heading tag in the page. (This should trigger a scroll to occur inside the web view.)
    if (webviewRef.current) {
        webviewRef.current.injectJavaScript(
            `document.querySelector('h2').scrollIntoView(); 
            window.postMessage('Next');
            true;`
        );
    }
    setCurrentHeading(currentHeading + 1);
  };

  const handlePrev = () => {
    //Upon clicking on the Previous button, the device should navigate to the previous heading tag in the page. (This should trigger a scroll to occur inside the web view.)
    if (webviewRef.current) {
        webviewRef.current.injectJavaScript(
            `window.postMessage('Prev');`
        );
    }
    setCurrentHeading(currentHeading - 1);
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
          ref={webviewRef}
          source={{ uri: currentPlanet.url }}
          startInLoadingState={true}
          injectedJavaScript={jsToInject}
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
              handlePrev();
            }}
          />
          <Button
            title={BUTTON_TEXT.NEXT}
            onPress={() => {
              handleNext();
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
