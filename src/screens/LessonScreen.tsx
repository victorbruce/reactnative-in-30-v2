import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Screen from '../components/Screen';
import Separator from '../components/Separator';
import Course from '../components/Course';
import AppModal from '../components/AppModal';

import colors from '../config/colors';
import text from '../config/text';

const {width} = Dimensions.get('window');

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

const LessonScreen = ({navigation}: any): JSX.Element => {
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  const [courseModal, setCourseModal] = React.useState<boolean>(false);
  const [selectedItem, setSelectedItem] = React.useState<any>('');

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  // Render items in FlatList
  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity onPress={() => openCourse(item)}>
        <Course
          level={item.level}
          lesson={item.lesson}
          lessonColor={item.lessonColor}
          completed={item.completed}
        />
      </TouchableOpacity>
    );
  };

  // Set Modal
  const openDropDown = () => {
    setModalVisible(true);
  };

  const hideDropDown = () => {
    setModalVisible(false);
  };

  const openCourse = (item: any) => {
    setSelectedItem(item);
    setCourseModal(true);
  };

  const closeCourse = () => {
    setCourseModal(false);
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.navContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          {/* <MaterialCommunityIcons name="chevron-left" size={28} /> */}
          <View>
            <Text>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={openDropDown}>
          <MaterialCommunityIcons name="dots-vertical" size={28} />
          <AppModal
            visible={modalVisible}
            hideModal={hideDropDown}
            animationType="fade">
            <View style={styles.dropDownMenu}>
              <View style={styles.dropDownTextWrapper}>
                <MaterialCommunityIcons name="face-profile" size={24} />
                <Text style={styles.dropDownText}>Profile</Text>
              </View>
              <View style={styles.dropDownTextWrapper}>
                <MaterialCommunityIcons name="power-settings" size={24} />
                <Text style={styles.dropDownText}>Settings</Text>
              </View>
              <View style={styles.dropDownTextWrapper}>
                <MaterialCommunityIcons name="logout" size={24} />
                <Text style={styles.dropDownText}>Logout</Text>
              </View>
            </View>
          </AppModal>
        </TouchableOpacity>
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

      <AppModal
        visible={courseModal}
        animationType="slide"
        hideModal={closeCourse}>
        <View
          style={[
            styles.courseModal,
            {backgroundColor: selectedItem.lessonColor},
          ]}>
          <View>
            <Text style={{fontSize: 28, marginBottom: 16}}>
              {selectedItem.level}
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 18, marginBottom: 16}}>
              {selectedItem.lesson}
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              {selectedItem.completed ? 'Completed' : 'Take a lesson'}
            </Text>
          </View>
        </View>
      </AppModal>
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
  dropDownMenu: {
    width: width * 0.5,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dropDownText: {
    marginBottom: 8,
    fontSize: 16,
    marginLeft: 8,
    lineHeight: 24,
    paddingTop: 8,
  },
  dropDownTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  courseModal: {
    width: width * 0.9,
    margin: 20,
    // backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default LessonScreen;
