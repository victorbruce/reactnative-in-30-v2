import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import AppText from './AppTextInput';
import theme from '../config/theme';

interface TodoItemProps {
  title: string;
  isComplete: boolean;
  onPress: () => void;
}

const TodoItem = ({title, isComplete, onPress}: TodoItemProps) => {
  return (
    <View style={styles.todoItem}>
      <TouchableOpacity onPress={onPress}>
        {isComplete ? (
          <FeatherIcon
            name="check-circle"
            color={theme.colors.yellow}
            size={18}
          />
        ) : (
          <FeatherIcon name="circle" color={theme.colors.yellow} size={18} />
        )}
      </TouchableOpacity>
      <AppText style={[styles.todo, isComplete ? styles.completeTodo : null]}>
        {title}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    backgroundColor: '#121212',
    height: 50,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.medium,
    marginBottom: theme.spacing.medium,
  },
  todo: {
    marginLeft: theme.spacing.medium,
    color: 'white',
  },
  completeTodo: {
    textDecorationLine: 'line-through',
  },
});

export default TodoItem;
