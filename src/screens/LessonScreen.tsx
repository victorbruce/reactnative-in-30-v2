import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Screen from '../components/Screen';
import Separator from '../components/Separator';

import colors from '../config/colors';
import text from '../config/text';

const {width} = Dimensions.get('screen');

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

const LessonScreen = (): JSX.Element => {
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
      <ScrollView>
        {courses.map((course, index) => (
          <View style={styles.lessonContainer} key={index}>
            <View
              style={[
                styles.lessonCard,
                {backgroundColor: course.lessonColor},
              ]}>
              <View style={styles.lessonCardAbout}>
                <Text style={styles.lessonLevel}>{course.level}</Text>
                <Separator marginBottom={8} />
                <Text numberOfLines={1} style={styles.lessonTitle}>
                  {course.lesson}
                </Text>
              </View>
              <View>
                <Text style={styles.lessonCardStatus}>
                  {course.completed ? 'Completed' : 'Take a lesson'}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
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
  lessonContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },
  lessonCard: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - 64,
    alignItems: 'center',
    marginBottom: 16,
  },
  lessonCardAbout: {
    marginRight: 8,
  },
  lessonCardStatus: {
    color: colors.grey,
  },
  lessonTitle: {
    color: colors.grey,
  },
  lessonLevel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
});

export default LessonScreen;
