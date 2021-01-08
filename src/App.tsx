import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import StackNavigator from './navigation/Stack';
// import TabBottomNavigator from './navigation/TabBottom';
import DrawerNavigator from './navigation/Drawer';

function App() {
  return (
    <NavigationContainer>
      {/* <TabBottomNavigator /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default App;
