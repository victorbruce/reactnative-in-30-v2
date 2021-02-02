import React, {useEffect, useState, useContext} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {UserContext} from '../contexts/user';

import AppText from '../components/AppText';
import {HomeRoutes} from '../navigation/Routes';
import Screen from '../components/Screen';
import Separator from '../components/Separator';
import {StackNavigatorProps} from '../navigation/NavInterfaces';
import LoadingIndicator from '../components/LoadingIndicator';
import TodoItem from '../components/TodoItem';
import {profileIconLetter} from '../utils';

import theme from '../config/theme';

const HomeScreen = ({navigation}: StackNavigatorProps<HomeRoutes, 'Home'>) => {
  const [todos, setTodos] = useState<any>();
  const [completedTodos, setCompletedTodos] = useState<any>();
  const {user} = useContext(UserContext);
  const [loading, setLoading] = useState<boolean>(false);

  const getTodos = async () => {
    try {
      setLoading(true);
      await firestore()
        .collection('todos')
        .where('userId', '==', auth().currentUser?.uid)
        .where('completed', '==', false)
        .onSnapshot((querySnapshot) => {
          let data: any = [];
          querySnapshot.forEach((doc) => {
            const todoData = doc.data();
            todoData.id = doc.id;

            data.push(todoData);
          });
          setTodos(data);
        });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('error todos', error);
    }
  };

  const getCompletedTodos = async () => {
    try {
      setLoading(true);
      await firestore()
        .collection('todos')
        .where('completed', '==', true)
        .onSnapshot((querySnapshot) => {
          let data: any = [];
          querySnapshot.forEach((doc) => {
            const completedData = doc.data();
            completedData.id = doc.id;
            data.push(completedData);
          });
          setCompletedTodos(data);
        });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('error completed todos', error);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      await firestore().collection('todos').doc(id).delete();
    } catch (error) {
      return error;
    }
  };

  const toggleCompleted = (todo: any, id: string) => {
    firestore().collection('todos').doc(id).update({
      completed: !todo.completed,
    });
  };

  useEffect(() => {
    getTodos();

    return () => setTodos([]);
  }, []);

  useEffect(() => {
    getCompletedTodos();

    return () => setCompletedTodos([]);
  }, []);

  if (loading || !user) {
    return <LoadingIndicator color="white" size={32} />;
  }

  return (
    <Screen style={styles.container}>
      <View style={styles.titleBar}>
        <View>
          <AppText style={styles.greeting}>Hello,</AppText>
          <AppText style={styles.username}>{user && user.username}</AppText>
        </View>
        <View style={styles.profileIcon}>
          {user && (
            <AppText style={styles.profileText}>
              {profileIconLetter(user.username)}
            </AppText>
          )}
        </View>
      </View>
      <Separator marginBottom={32} />
      <View style={styles.body}>
        <View>
          {todos && todos.length ? (
            <AppText style={styles.subtitle}>Tasks</AppText>
          ) : null}
          {todos && todos.length ? (
            todos.map((todo: any) => (
              <TodoItem
                key={todo.id}
                title={todo.title}
                isComplete={todo.completed}
                onPress={() => toggleCompleted(todo, todo.id)}
              />
            ))
          ) : (
            <View style={styles.noTodos}>
              <Image
                source={require('../assets/empty-box.png')}
                resizeMode="contain"
                style={styles.noTodoImage}
              />
              <AppText style={styles.noTodoText}>No todos</AppText>
              <Separator marginBottom={24} />
            </View>
          )}
        </View>
        <Separator marginBottom={32} />

        <View>
          {completedTodos && completedTodos.length ? (
            <AppText>Completed</AppText>
          ) : null}
          {completedTodos.length
            ? completedTodos.map((completedTodo: any) => (
                <TodoItem
                  key={completedTodo.id}
                  title={completedTodo.title}
                  isComplete={completedTodo.completed}
                  onPress={() =>
                    toggleCompleted(completedTodo, completedTodo.id)
                  }
                />
              ))
            : null}
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: theme.spacing.medium,
  },
  container: {
    flex: 1,
  },
  titleBar: {
    paddingHorizontal: theme.spacing.medium,
    paddingVertical: theme.spacing.medium,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  greeting: {
    fontSize: theme.textVariants.medium,
    marginBottom: theme.spacing.small,
    color: theme.colors.grey,
    fontWeight: '600',
  },
  username: {
    fontSize: theme.spacing.large,
  },
  profileIcon: {
    width: 44,
    height: 44,
    backgroundColor: theme.colors.yellow,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    color: theme.colors.black,
    fontSize: theme.textVariants.small,
    fontWeight: 'bold',
  },
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
  },
  subtitle: {
    marginBottom: theme.spacing.medium,
  },
  noTodos: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  noTodoImage: {
    width: 150,
    height: 150,
  },
  noTodoText: {
    marginTop: theme.spacing.small,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
