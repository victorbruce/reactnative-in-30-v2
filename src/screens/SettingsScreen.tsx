import React, {useContext} from 'react';
import auth from '@react-native-firebase/auth';
import {StyleSheet, View, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import Screen from '../components/Screen';
import Separator from '../components/Separator';
import {profileIconLetter} from '../utils';
import {UserContext} from '../contexts/user';

import theme from '../config/theme';

const SettingsScreen = () => {
  const {user} = useContext(UserContext);

  const handleSignOut = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      return error;
    }
  };
  return (
    <Screen style={styles.container}>
      <View style={styles.titleBar}>
        {/* <Image
          source={{
            uri:
              'https://lh4.googleusercontent.com/-R2RT0PlPq7s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnxNmDOdHFrYBbg7ZzuLvOrZPqjSA/s96-c/photo.jpg',
          }}
          style={styles.avatar}
        /> */}
        <View style={styles.profileIcon}>
          {user && (
            <AppText style={styles.profileText}>
              {profileIconLetter(user.username)}
            </AppText>
          )}
        </View>
        <View style={styles.userDetails}>
          <AppText style={styles.name}>John Doe</AppText>
          <AppText style={styles.email}>johndoe@gmail.com</AppText>
        </View>
      </View>
      <Separator marginBottom={theme.spacing.large} />
      <View style={styles.body}>
        <View style={styles.account}>
          <AppText style={styles.settingsTitle}>Account</AppText>
          <View style={styles.settingsBackground}>
            <AppText>Manage Account</AppText>
            <Ionicons
              name="arrow-forward"
              color={theme.colors.white}
              size={16}
            />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <AppButton
          title="Sign out"
          btnTextColor={theme.colors.black}
          onPress={handleSignOut}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  account: {
    paddingHorizontal: theme.spacing.large,
  },
  avatar: {
    height: 44,
    width: 44,
    borderRadius: 100,
  },
  body: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
  },
  email: {
    color: theme.colors.lightGrey,
    fontSize: 14,
  },
  footer: {
    padding: theme.spacing.large,
  },
  name: {
    fontWeight: '500',
  },
  settingsTitle: {
    fontSize: 18,
    marginBottom: theme.spacing.medium,
  },
  settingsBackground: {
    alignItems: 'center',
    backgroundColor: theme.colors.darkGrey,
    borderRadius: theme.borderRadii.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing.medium,
  },
  titleBar: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: theme.spacing.large,
  },
  userDetails: {
    marginLeft: theme.spacing.small,
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
});

export default SettingsScreen;
