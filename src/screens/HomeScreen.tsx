import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, Switch, ActivityIndicator} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import AppText from '../components/AppText';
import Screen from '../components/Screen';
import Separator from '../components/Separator';

import theme from '../config/theme';

function HomeScreen() {
  const [user, setUser] = useState<any>();
  const [todos, setTodos] = useState([
    {id: 1, todo: 'Build todo home screen'},
    {id: 2, todo: 'Refactor code'},
    {id: 3, todo: 'Build a todo component'},
    {id: 4, todo: 'Post day 19 on my social media'},
  ]);

  const getUser = async () => {
    try {
      const user = await firestore()
        .collection('users')
        .doc(auth().currentUser?.uid)
        .get();

      if (user.exists) {
        setUser(user.data());
      } else {
        console.log('user not found');
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return (
      <ActivityIndicator
        animating={true}
        size={24}
        color="black"
        style={styles.loadingIndicator}
      />
    );
  }

  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <AppText style={styles.welcomeMsg}>Hi!, {user.username}</AppText>
        <AppText style={styles.taskStatus}>
          You have {todos.length} tasks available
        </AppText>
      </View>
      <View style={styles.body}>
        {todos ? (
          todos.map((todo: any) => (
            <View style={styles.todoContainer} key={todo.id}>
              <Switch />
              <AppText numberOfLines={1}>{todo.todo}</AppText>
            </View>
          ))
        ) : (
          <>
            <Image
              source={require('../assets/empty-box.png')}
              resizeMode="contain"
            />
            <Separator marginBottom={16} />
            <AppText>No Todos Available</AppText>
            <View style={styles.addTask}>
              <AntDesign
                name="plussquareo"
                size={24}
                color={theme.colors.yellow}
              />
              <AppText style={styles.addTodo}>Add Todo</AppText>
            </View>
          </>
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  header: {
    padding: theme.spacing.large,
  },
  welcomeMsg: {
    fontSize: theme.textVariants.medium,
    color: theme.colors.white,
  },
  taskStatus: {
    marginTop: theme.spacing.small,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.large,
  },
  addTask: {
    flexDirection: 'row',
    marginTop: theme.spacing.small,
  },
  addTodo: {
    color: theme.colors.yellow,
    marginLeft: theme.spacing.small,
  },
  todoContainer: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.yellow,
    borderRadius: theme.borderRadii.medium,
    flexDirection: 'row',
    padding: theme.spacing.medium,
    width: '100%',
    marginBottom: theme.spacing.medium,
  },
  loadingIndicator: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default HomeScreen;
