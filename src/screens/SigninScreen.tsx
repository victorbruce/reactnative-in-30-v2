import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import Screen from '../components/Screen';
import Separator from '../components/Separator';

import theme from '../config/theme';

const SigninScreen = ({navigation}) => {
  return (
    <Screen style={styles.container}>
      <AppText style={styles.title}>Sign in</AppText>
      <View style={styles.loginForm}>
        <AppButton
          title="Connect with Google"
          btnTextColor={theme.colors.black}
          onPress={() => console.log('connect with google')}
        />
        <AppText style={styles.textOption}>OR</AppText>
        <TextInput
          autoCapitalize="none"
          style={styles.textInput}
          placeholder="email"
          placeholderTextColor={theme.colors.white}
          keyboardType="email-address"
          autoCorrect={false}
        />
        <TextInput
          placeholder="password"
          placeholderTextColor={theme.colors.white}
          secureTextEntry
          style={styles.textInput}
        />
        <Separator marginBottom={theme.spacing.medium} />
        <AppButton
          title="Login"
          btnTextColor={theme.colors.black}
          onPress={() => console.log('Logining')}
        />
        <View style={styles.signupOption}>
          <AppText>Don't have an account?</AppText>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <View>
              <AppText style={styles.signup}>Sign up</AppText>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.black,
  },
  title: {
    fontSize: theme.textVariants.large,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  textOption: {
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: theme.spacing.medium,
  },
  textInput: {
    borderWidth: 1,
    borderColor: theme.colors.white,
    padding: theme.spacing.medium,
    borderRadius: theme.borderRadii.medium,
    color: theme.colors.white,
    marginBottom: theme.spacing.medium,
  },
  loginForm: {
    padding: theme.spacing.large,
  },
  signup: {
    fontWeight: 'bold',
    marginLeft: theme.spacing.small,
  },
  signupOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: theme.spacing.medium,
  },
});

export default SigninScreen;
