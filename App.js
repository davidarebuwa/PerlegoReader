import React from 'react';
import { Provider } from "react-redux";
import configureStore from './core/store';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

import ReaderHomeScreen from './screens/ReaderHomeScreen';
import ReaderMenuScreen from './screens/ReaderMenuScreen';
import ReaderArticleScreen from './screens/ReaderArticleScreen';

const store = configureStore();

const Stack = createNativeStackNavigator();


export default function App() {
  return (
  <Provider store={store}>
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={ReaderHomeScreen} />
        <Stack.Screen name="Menu" component={ReaderMenuScreen} />
        <Stack.Screen name="Article" component={ReaderArticleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
    </Provider>
  );
}


