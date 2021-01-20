import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthNavigator from './navigation/AuthStack';
import AppNavigator from './navigation/AppStack';

function App() {
  const [user, setUser] = useState<boolean>(true);

  return (
    <NavigationContainer>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default App;
