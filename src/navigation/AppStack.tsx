import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import AddTodo from '../screens/AddTodo';
import SettingsScreen from '../screens/SettingsScreen';
import TodosScreen from '../screens/TodosScreen';

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
          } else if (route.name === 'Todos') {
            iconName = focused ? 'trending-up' : 'trending-up-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <TabBottom.Screen name="Home" component={HomeScreen} />
      <TabBottom.Screen name="AddTodo" component={AddTodo} />
      <TabBottom.Screen name="Todos" component={TodosScreen} />
      <TabBottom.Screen name="Settings" component={SettingsScreen} />
    </TabBottom.Navigator>
  );
};

{
  /* <TabBottom.Navigator>
      <TabBottom.Navigator tabBarOptions={{showLabel: false}}>
        <TabBottom.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <Ionicons name="home-outline" size={24} />,
          }}
        />
      </TabBottom.Navigator>
    </TabBottom.Navigator> */
}

export default AppNavigator;
