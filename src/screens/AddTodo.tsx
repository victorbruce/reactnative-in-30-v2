import React from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import * as Yup from 'yup';

import AppFormField from '../components/AppFormField';
import AppText from '../components/AppText';
import Formik from '../components/AppForm';
import Screen from '../components/Screen';
import theme from '../config/theme';
import SubmitButton from '../components/SubmitButton';

const validationSchema = Yup.object().shape({
  todo: Yup.string().required('Todo can not be empty'),
});

const AddTodo = () => {
  const addTodo = async (todo: any) => {
    try {
      await firestore().collection('todos').add({
        userId: auth().currentUser?.uid,
        createdAt: firestore.FieldValue.serverTimestamp(),
        lastModified: firestore.FieldValue.serverTimestamp(),
        title: todo,
        completed: false,
      });
      Alert.alert('Todo added');
    } catch (error) {
      return console.error('error todos', error);
    }
  };
  return (
    <Screen style={styles.container}>
      <View style={styles.todoForm}>
        <AppText style={styles.title}>Add Todo</AppText>
        <Formik
          initialValues={{todo: ''}}
          onSubmit={(values: any) => {
            addTodo(values.todo);
          }}
          validationSchema={validationSchema}>
          <AppFormField
            autoCapitalize="none"
            name="todo"
            placeholder="Write some tasks..."
          />
          <SubmitButton title="Add Todo" />
        </Formik>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.black,
    flex: 1,
  },
  title: {
    alignSelf: 'center',
    fontSize: theme.textVariants.medium,
    fontWeight: 'bold',
    padding: theme.spacing.large,
  },
  todoForm: {
    flex: 1,
    justifyContent: 'center',
    padding: theme.spacing.large,
  },
});

export default AddTodo;
