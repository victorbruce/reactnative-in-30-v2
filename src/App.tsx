import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import StackNavigator from './navigation/Stack';
import TabBottomNavigator from './navigation/TabBottom';

function App() {
  return (
    <NavigationContainer>
      <TabBottomNavigator />
    </NavigationContainer>
  );
}

export default App;
