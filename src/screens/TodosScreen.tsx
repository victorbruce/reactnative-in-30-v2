import React from 'react';
import {StyleSheet, View} from 'react-native';

import AppText from '../components/AppText';
import Screen from '../components/Screen';
import Separator from '../components/Separator';
import TodoCard from '../components/TodoCard';
import theme from '../config/theme';

const DATA = [
  {id: 1, completedTodo: 'Build todo home screen'},
  {id: 2, completedTodo: 'Refactor code'},
  {id: 3, completedTodo: 'Build a todo component'},
  {id: 4, completedTodo: 'Post day 19 on my social media'},
];

const TodosScreen = () => {
  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <AppText style={styles.headerTitle}>Completed Todos</AppText>
      </View>
      <Separator marginBottom={theme.spacing.medium} />
      <View style={styles.body}>
        {DATA.map((todo) => (
          <TodoCard completedTodo={todo.completedTodo} key={todo.id} />
        ))}
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: theme.spacing.large,
  },
  container: {
    backgroundColor: theme.colors.black,
    flex: 1,
  },
  header: {
    padding: theme.spacing.large,
  },
  headerTitle: {
    fontSize: theme.textVariants.medium,
  },
});

export default TodosScreen;
