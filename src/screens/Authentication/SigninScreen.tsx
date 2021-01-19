import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import * as Yup from 'yup';

import AppButton from '../../components/AppButton';
import AppForm from '../../components/AppForm';
import AppText from '../../components/AppText';
import AppFormField from '../../components/AppFormField';
import Screen from '../../components/Screen';
import Separator from '../../components/Separator';
import SubmitButton from '../../components/SubmitButton';

import theme from '../../config/theme';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label('Email'),
  password: Yup.string().required().min(6).label('Password'),
});

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
        <AppForm
          initialValues={{email: '', password: ''}}
          onSubmit={(values: any) => {
            navigation.navigate('Home');
            console.log(values);
          }}
          validationSchema={validationSchema}>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            placeholder="email"
            name="email"
          />

          <AppFormField
            autoCapitalize="none"
            placeholder="password"
            name="password"
            secureTextEntry
          />

          <Separator marginBottom={theme.spacing.medium} />
          <SubmitButton title="Login" />
        </AppForm>
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
