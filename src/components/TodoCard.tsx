import React from 'react';
import {StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppText from './AppText';
import theme from '../config/theme';

interface TodoCardProps {
  completedTodo: string;
}

const TodoCard = ({completedTodo}: TodoCardProps) => {
  return (
    <View style={styles.card}>
      <Ionicons name="checkmark-circle" size={24} color={theme.colors.yellow} />
      <AppText style={styles.completedTodo}>{completedTodo}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: theme.colors.darkGrey,
    borderRadius: theme.borderRadii.small,
    flexDirection: 'row',
    height: 60,
    marginBottom: theme.spacing.medium,
    paddingHorizontal: theme.spacing.large,
    paddingVertical: theme.spacing.medium,
    width: '100%',
  },
  completedTodo: {
    marginLeft: theme.spacing.small,
    textDecorationLine: 'line-through',
  },
});

export default TodoCard;
