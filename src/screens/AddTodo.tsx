import React from 'react';
import {StyleSheet} from 'react-native';

import Screen from '../components/Screen';
import AppText from '../components/AppText';

import theme from '../config/theme';

const AddTodo = () => {
  return (
    <Screen style={styles.container}>
      <AppText>Add Todo</AppText>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.black,
  },
});

export default AddTodo;
