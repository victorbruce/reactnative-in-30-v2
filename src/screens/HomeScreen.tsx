import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Switch,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import AppText from '../components/AppText';
import Screen from '../components/Screen';
import Separator from '../components/Separator';

import theme from '../config/theme';

function HomeScreen() {
  const [todos, setTodos] = useState<any>();
  const [user, setUser] = useState<any>();

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

  const getTodos = async () => {
    try {
      firestore()
        .collection('todos')
        .where('userId', '==', auth().currentUser?.uid)
        .onSnapshot((querySnapshot) => {
          let data: any = [];
          querySnapshot.forEach((doc) => {
            const todoData = doc.data();
            todoData.id = doc.id;

            data.push(todoData);
          });
          setTodos(data);
        });
    } catch (error) {}
  };

  const deleteTodo = async (id: string) => {
    try {
      await firestore().collection('todos').doc(id).delete();
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    getTodos();
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
          You have {todos && todos.length} tasks available
        </AppText>
      </View>
      <View style={styles.body}>
        {todos ? (
          todos &&
          todos.map((todo: any) => (
            <View style={styles.todoContainer} key={todo.id}>
              {console.log(todo)}
              <View style={{flexDirection: 'row'}}>
                <Switch />
                <AppText>{todo.title}</AppText>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => console.log('deleting')}>
                  <AntDesign name="edit" size={22} color="yellow" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
                  <AntDesign
                    name="delete"
                    size={22}
                    color="pink"
                    style={{marginLeft: 16}}
                  />
                </TouchableOpacity>
              </View>
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
    justifyContent: 'space-between',
  },
  loadingIndicator: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default HomeScreen;
