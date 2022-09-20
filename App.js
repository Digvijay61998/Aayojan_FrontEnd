/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect,useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import {navigationRef,isMountedRef} from "./src/routes/rnnavigation"
import RootNavigator from './src/routes/RootNavigator';
import 'react-native-gesture-handler';


enableScreens(true);
const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    // setupNotification();
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);

  return (
    // <Provider store={store}>
    <NavigationContainer ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  // </Provider>
  );
}

