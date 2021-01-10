import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>todo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
