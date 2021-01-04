import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  RefreshControl,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Screen from '../components/Screen';
import Separator from '../components/Separator';
import Course from '../components/Course';

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

const LessonScreen = (): JSX.Element => {
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  // Render items in FlatList
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

  // Set Modal
  const openModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.navContainer}>
        <MaterialCommunityIcons name="chevron-left" size={28} />
        <TouchableOpacity onPress={openModal}>
          <MaterialCommunityIcons name="dots-vertical" size={28} />
          <Modal animationType="fade" transparent={true} visible={modalVisible}>
            <TouchableOpacity
              style={styles.modalBackground}
              onPress={hideModal}>
              <Screen>
                <View style={styles.modalView}>
                  <View style={styles.modalTextWrapper}>
                    <MaterialCommunityIcons name="face-profile" size={24} />
                    <Text style={styles.modalText}>Profile</Text>
                  </View>
                  <View style={styles.modalTextWrapper}>
                    <MaterialCommunityIcons name="power-settings" size={24} />
                    <Text style={styles.modalText}>Settings</Text>
                  </View>
                  <View style={styles.modalTextWrapper}>
                    <MaterialCommunityIcons name="logout" size={24} />
                    <Text style={styles.modalText}>Logout</Text>
                  </View>
                </View>
              </Screen>
            </TouchableOpacity>
          </Modal>
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
  modalBackground: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    alignItems: 'flex-end',
  },

  modalView: {
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
  modalText: {
    marginBottom: 8,
    fontSize: 16,
    marginLeft: 8,
    lineHeight: 24,
    paddingTop: 8,
  },
  modalTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default LessonScreen;
