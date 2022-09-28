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
import { onError } from "@apollo/client/link/error";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
} from "@apollo/client";

enableScreens(true);
const Stack = createNativeStackNavigator();

export default function App() {
  const errorlink = onError(({ graphqlErrors, networkErrors }) => {
    if (graphqlErrors) {
      graphqlErrors.map(({ message, location, path }) => {
        console.log("message",message,location,path);
        alert(`graphql error ${message}`);
      });
    }
    if (networkErrors) {
      networkErrors.map(({ message, location, path }) => {
        console.log("message",message,location,path);
        alert(`graphql error ${message}`);
      });
    }
  });

  const link = from([
    errorlink,
    new HttpLink({ uri: "http://192.168.1.23:4500/graphql" }),
  ]);
  const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    // setupNotification();
    isMountedRef.current = true;
    return () => (isMountedRef.current = false);
  }, []);

  return (
    // <Provider store={store}>
      <ApolloProvider client={client}>
    <NavigationContainer ref={navigationRef}>
      <RootNavigator />
      </NavigationContainer>
    </ApolloProvider>
  // </Provider>
  );
}

