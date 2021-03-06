import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthRoutes} from './Routes';

import {
  WelcomeScreen,
  SigninScreen,
  SignupScreen,
} from '../screens/Authentication';

const AuthStack = createStackNavigator<AuthRoutes>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Signin"
        component={SigninScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Signup"
        component={SignupScreen}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
