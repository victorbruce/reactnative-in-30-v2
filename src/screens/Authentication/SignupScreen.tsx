import React from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';

import AppButton from '../../components/AppButton';
import AppText from '../../components/AppText';
import Screen from '../../components/Screen';
import Separator from '../../components/Separator';
import theme from '../../config/theme';

const SignupScreen = ({navigation}) => {
  return (
    <Screen style={styles.container}>
      <AppText style={styles.title}>Sign up</AppText>
      <View style={styles.signupForm}>
        <TextInput
          autoCapitalize="none"
          style={styles.textInput}
          placeholder="email"
          placeholderTextColor={theme.colors.white}
          keyboardType="email-address"
          autoCorrect={false}
        />
        <TextInput
          autoCapitalize="none"
          style={styles.textInput}
          placeholder="username"
          placeholderTextColor={theme.colors.white}
          autoCorrect={false}
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="password"
          placeholderTextColor={theme.colors.white}
          style={styles.textInput}
          secureTextEntry
        />
        <Separator marginBottom={theme.spacing.medium} />
        <AppButton
          title="Sign up"
          btnTextColor={theme.colors.black}
          onPress={() => console.log('Logining')}
        />
        <View style={styles.signinOption}>
          <AppText>Already have an account?</AppText>
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <View>
              <AppText style={styles.signin}>Login</AppText>
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
    backgroundColor: theme.colors.black,
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'center',
    fontSize: theme.textVariants.large,
    fontWeight: 'bold',
  },
  signupForm: {
    padding: theme.spacing.large,
  },
  textInput: {
    borderWidth: 1,
    borderColor: theme.colors.white,
    padding: theme.spacing.medium,
    borderRadius: theme.borderRadii.medium,
    color: theme.colors.white,
    marginBottom: theme.spacing.medium,
  },
  signin: {
    fontWeight: 'bold',
    marginLeft: theme.spacing.small,
  },
  signinOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: theme.spacing.medium,
  },
});

export default SignupScreen;
