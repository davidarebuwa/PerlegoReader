import React, {useState, useRef} from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import {WebView} from "react-native-webview";

import { BUTTON_TEXT } from "../constants/constants";
import RootComponent from "../components/RootComponent";

const ReaderArticleScreen = (props) => {
    const [article, setArticle] = useState('');  //(props.route.params.article);
    const webviewRef = useRef(null);

    const urlToTest = "https://en.wikipedia.org/wiki/Saturn";


    const jsToInject = `
			var current = 0;
			var headings = $('h2');

			document.addEventListener("message", function(data) {
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




  return (
    <RootComponent>
      <View style={styles.screen}>
        <WebView
            ref={webviewRef}
            source={{uri: urlToTest}}
            injectedJavaScript={jsToInject}
            javaScriptEnabled={true}
            style={{flex: 1}}
        />
        <View style={{flexDirection: "row", justifyContent: "space-between", margin: 10}}>
            <Button
                title={BUTTON_TEXT.PREVIOUS}
                onPress={() => webviewRef.current.injectJavaScript("window.ReactNativeWebView.postMessage('Previous');")}
            />
            <Button
                title={BUTTON_TEXT.NEXT}
                onPress={() => webviewRef.current.injectJavaScript("window.ReactNativeWebView.postMessage('Next');")}
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
