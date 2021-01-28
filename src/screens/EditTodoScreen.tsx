import React from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import * as Yup from 'yup';
import firestore from '@react-native-firebase/firestore';

import AppText from '../components/AppText';
import Screen from '../components/Screen';
import theme from '../config/theme';
import SubmitButton from '../components/SubmitButton';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(4).label('Title'),
});

const EditTodoScreen = ({navigation, route}) => {
  const {title, id} = route.params;

  const updateTodo = async (title: string) => {
    try {
      await firestore().collection('todos').doc(id).update({
        title: title,
      });
      console.log('successful update');
    } catch (error) {
      return error;
    }
  };

  if (!title) {
    return <ActivityIndicator animating={true} size={32} color="white" />;
  }

  return (
    <Screen style={styles.container}>
      <AppText>Edit Form</AppText>
      <AppForm
        initialValues={{title: title && title}}
        validationSchema={validationSchema}
        onSubmit={(values: any) => {
          updateTodo(values.title);
          navigation.navigate('Home');
        }}>
        <AppFormField name="title" defaultValue={title && title} />
        <SubmitButton title="Update todo" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    justifyContent: 'center',
  },
});

export default EditTodoScreen;
