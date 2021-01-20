import React from 'react';
import {StyleSheet} from 'react-native';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import theme from '../config/theme';

const TodosScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppText>Todos Screen</AppText>
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

export default TodosScreen;
