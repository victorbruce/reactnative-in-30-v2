import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import WelcomeScreen from './screens/WelcomeScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';

const AuthStack = createStackNavigator();

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
      <AuthStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {backgroundColor: '#000'},
          headerTintColor: '#fff',
        }}
      />
    </AuthStack.Navigator>
  );
};
function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

export default App;
