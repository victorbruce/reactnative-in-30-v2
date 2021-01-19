import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Screen from '../components/Screen';
import colors from '../config/colors';
import text from '../config/text';
import Separator from '../components/Separator';

const LoginScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Screen>
          <Text style={styles.headerTitle}>Welcome back!</Text>
          <Text style={styles.headerContent}>
            Sign in to your acount and let’s continue from where you left off!
          </Text>
        </Screen>
      </View>

      <View style={styles.body}>
        <Text style={styles.loginText}>Let's sign you in.</Text>
        <Separator marginBottom={24} />
        <View>
          <TextInput
            placeholder="Enter your email address"
            placeholderTextColor={colors.lightGrey}
            style={styles.inputField}
          />
          <Separator marginBottom={16} />
          <TouchableOpacity style={styles.signinBtn}>
            <View>
              <Text style={styles.btnLabel}>Sign up with your email</Text>
            </View>
          </TouchableOpacity>
          <Separator marginBottom={16} />
          <View style={styles.signupContainer}>
            <Text style={styles.text}>Already have an account?</Text>
            <Text style={styles.signinText}>Sign in</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: colors.black,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingLeft: 32,
    justifyContent: 'center',
  },
  headerTitle: {
    color: colors.white,
    fontSize: text.l,
    marginVertical: 24,
  },
  headerContent: {
    color: colors.white,
    fontSize: text.s,
    width: '70%',
  },
  body: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    padding: 32,
    fontWeight: '500',
  },
  loginText: {
    fontSize: text.m,
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 15,
    height: 50,
    borderColor: colors.lightGrey,
    paddingLeft: 16,
  },
  signinBtn: {
    height: 50,
    backgroundColor: colors.black,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLabel: {
    color: colors.white,
    fontSize: text.s,
    fontWeight: '500',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: text.s,
    color: colors.black,
    marginRight: 8,
  },
  signinText: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default LoginScreen;
