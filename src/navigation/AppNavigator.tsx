import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AddTodo from '../screens/AddTodo';
import SettingsScreen from '../screens/SettingsScreen';
import HomeNavigator from './HomeNavigator';

import theme from '../config/theme';

const TabBottom = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <TabBottom.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: theme.colors.yellow,
        inactiveTintColor: theme.colors.white,
        style: {backgroundColor: theme.colors.black},
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'AddTodo') {
            iconName = focused ? 'add-sharp' : 'add-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <TabBottom.Screen name="Home" component={HomeNavigator} />
      <TabBottom.Screen
        name="AddTodo"
        component={AddTodo}
        listeners={({navigation}) => ({
          tabPress: (event) => {
            event.preventDefault();
            navigation.navigate('AddTodo');
          },
        })}
      />
      <TabBottom.Screen name="Settings" component={SettingsScreen} />
    </TabBottom.Navigator>
  );
};

export default AppNavigator;
