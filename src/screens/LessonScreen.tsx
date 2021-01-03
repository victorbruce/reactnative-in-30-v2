import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  RefreshControl,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Screen from '../components/Screen';
import Separator from '../components/Separator';
import Course from '../components/Course';

import colors from '../config/colors';
import text from '../config/text';

const courses = [
  {
    id: 1,
    level: 'Step 1',
    lesson: 'Intro to Mobile Development',
    lessonColor: '#FEE9DD',
    completed: true,
  },
  {
    id: 2,
    level: 'Step 2',
    lesson: 'Why React Native',
    lessonColor: '#EDDDFE',
    completed: true,
  },
  {
    id: 3,
    level: 'Step 3',
    lesson: 'Environment Setup',
    lessonColor: '#F6F7FC',
    completed: false,
  },
  {
    id: 4,
    level: 'Step 4',
    lesson: 'Hello World',
    lessonColor: '#F6F7FC',
    completed: false,
  },
  {
    id: 5,
    level: 'Step 5',
    lesson: 'Basic Components',
    lessonColor: '#F6F7FC',
    completed: false,
  },
  {
    id: 6,
    level: 'Step 5',
    lesson: 'Styling',
    lessonColor: '#F6F7FC',
    completed: false,
  },
  {
    id: 7,
    level: 'Step 7',
    lesson: 'Wrap Up',
    lessonColor: '#F6F7FC',
    completed: false,
  },
];

// fake asynchronous function

const wait = (timeout: any) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const LessonScreen = (): JSX.Element => {
  const [refreshing, setRefreshing] = React.useState<boolean>(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  const renderItem = ({item}: any) => {
    return (
      <Course
        level={item.level}
        lesson={item.lesson}
        lessonColor={item.lessonColor}
        completed={item.completed}
      />
    );
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.navContainer}>
        <MaterialCommunityIcons name="chevron-left" size={28} />
        <MaterialCommunityIcons name="dots-vertical" size={28} />
      </View>
      <View style={styles.portfolioContainer}>
        <Image source={require('../assets/profile.png')} />
        <Separator marginBottom={24} />
        <Text style={styles.profileName}>John Doe</Text>
        <Separator marginBottom={8} />
        <Text style={styles.coursePath}>Mobile Web Development</Text>
      </View>
      <Separator marginBottom={32} />
      <FlatList
        data={courses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
  },
  portfolioContainer: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  profileName: {
    fontSize: text.m,
    fontWeight: 'bold',
    color: colors.black,
  },
  coursePath: {
    fontSize: text.s,
    color: colors.grey,
  },
});

export default LessonScreen;
