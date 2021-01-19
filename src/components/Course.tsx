import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import Separator from '../components/Separator';
import colors from '../config/colors';

const {width} = Dimensions.get('screen');

interface CourseProps {
  level: string;
  lesson: string;
  lessonColor: string;
  completed: boolean;
}

const Course = ({
  level,
  lesson,
  lessonColor,
  completed,
}: CourseProps): JSX.Element => {
  return (
    <View style={styles.lessonContainer}>
      <View style={[styles.lessonCard, {backgroundColor: lessonColor}]}>
        <View style={styles.lessonCardAbout}>
          <Text style={styles.lessonLevel}>{level}</Text>
          <Separator marginBottom={8} />
          <Text numberOfLines={1} style={styles.lessonTitle}>
            {lesson}
          </Text>
        </View>
        <View>
          <Text style={styles.lessonCardStatus}>
            {completed ? 'Completed' : 'Take a lesson'}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Course;
