import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AuthScreen from '../screens/Auth/AuthScreen';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import UserLogin from '../screens/Auth/UserLogin';
import UserSignUp from '../screens/Auth/UserSignUp';

const stack = createStackNavigator();


const AuthNavigator = (props) => (
    <stack.Navigator screenOptions={{ headerShown: false }}  initialRouteName="AuthScreen">
    <stack.Screen name="AuthScreen" component={AuthScreen} />
     <stack.Screen name="UserLogin" component={UserLogin} />
    <stack.Screen name="UserSignUp" component={UserSignUp} />  
    <stack.Screen name="ForgotPassword" component={ForgotPassword} />  
    
  </stack.Navigator>
);

export default AuthNavigator;
