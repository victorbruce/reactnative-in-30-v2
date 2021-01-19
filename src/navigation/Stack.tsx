import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LessonScreen from '../screens/LessonScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Lesson" component={LessonScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
