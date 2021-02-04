import React from 'react';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface DeleteTodoProps {
  onPress: () => Event;
}

const DeleteTodoItem = ({onPress}: DeleteTodoProps) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.deleteTodo}>
        <Ionicons name="trash-outline" size={18} color="white" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  deleteTodo: {
    backgroundColor: 'red',
    width: 44,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default DeleteTodoItem;
