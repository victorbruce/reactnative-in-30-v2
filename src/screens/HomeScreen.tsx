import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}: any): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Lesson')}>
        <View>Go Back</View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
