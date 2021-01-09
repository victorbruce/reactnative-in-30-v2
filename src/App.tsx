import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './navigation/Drawer';

function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default App;
