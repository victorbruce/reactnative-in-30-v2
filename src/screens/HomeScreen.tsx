import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import AppText from '../components/AppText';
import Screen from '../components/Screen';
import Separator from '../components/Separator';

import theme from '../config/theme';

function HomeScreen() {
  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <AppText style={styles.welcomeMsg}>Hi!, John Doe!</AppText>
        <AppText style={styles.taskStatus}>You have 0 tasks available</AppText>
      </View>
      <View style={styles.body}>
        <Image
          source={require('../assets/empty-box.png')}
          resizeMode="contain"
        />
        <Separator marginBottom={16} />
        <AppText>No Todos Available</AppText>
        <View style={styles.addTask}>
          <AntDesign name="plussquareo" size={24} color={theme.colors.yellow} />
          <AppText style={styles.addTodo}>Add Todo</AppText>
        </View>
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
  },
  addTask: {
    flexDirection: 'row',
    marginTop: theme.spacing.small,
  },
  addTodo: {
    color: theme.colors.yellow,
    marginLeft: theme.spacing.small,
  },
});

export default HomeScreen;
