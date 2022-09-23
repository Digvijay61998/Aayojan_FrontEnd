import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SubEventDetails from "../screens/HomeScreen/InvitedEvents/SubEventDetails";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import SplashScreen from "../screens/Splash/Splash.js";
import AuthNavigator from "./AuthNavigator";
import HomeNavigator from "./HomeNavigator";

const stack = createStackNavigator();

const SplashStackScreen = (props) => {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="SplashScreen" component={SplashScreen} />
      <stack.Screen
        name="OnBoardingStackScreen"
        component={OnBoardingStackScreen}
      />
    </stack.Navigator>
  );
};

const OnBoardingStackScreen = (props) => {
  return (
    <stack.Navigator screenOptions={{ headerShown: false }}>
      <stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
    </stack.Navigator>
  );
};

const RootNavigator = (props) => (
  <stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="SplashStackScreen">
    <stack.Screen name="SplashStackScreen" component={SplashStackScreen} />
    <stack.Screen name="AuthStackScreen" component={AuthNavigator} />
    <stack.Screen name="HomeNavigator" component={HomeNavigator} />
  </stack.Navigator>
);

export default RootNavigator;
