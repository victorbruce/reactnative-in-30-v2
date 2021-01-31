import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import EditTodoScreen from '../screens/EditTodoScreen';
import {HomeRoutes} from './Routes';

const Stack = createStackNavigator<HomeRoutes>();

const HomeNavigator = () => {
  return (
    <Stack.Navigator headerMode="none" mode="modal">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="EditTodo" component={EditTodoScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
