import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import StackNavigator from './Stack';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CoursesScreen from '../screens/CoursesScreen';

const TabBottom = createBottomTabNavigator();

const TabBottomNavigator = () => {
  return (
    <TabBottom.Navigator tabBarOptions={{showLabel: false}}>
      <TabBottom.Screen
        name="Home"
        component={StackNavigator}
        options={{
          tabBarIcon: () => <Ionicons name="home-outline" size={24} />,
        }}
      />
      <TabBottom.Screen
        name="Courses"
        component={CoursesScreen}
        options={{
          tabBarIcon: () => <Ionicons name="md-book-outline" size={24} />,
        }}
      />
      <TabBottom.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <Ionicons name="person-outline" size={24} />,
        }}
      />
      <TabBottom.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: () => <Ionicons name="settings-outline" size={24} />,
        }}
      />
    </TabBottom.Navigator>
  );
};

export default TabBottomNavigator;
