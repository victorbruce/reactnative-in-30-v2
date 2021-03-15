import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
