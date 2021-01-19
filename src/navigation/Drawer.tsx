import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import AboutScreen from '../screens/About';
import TabBottomNavigator from './TabBottom';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabBottomNavigator} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
