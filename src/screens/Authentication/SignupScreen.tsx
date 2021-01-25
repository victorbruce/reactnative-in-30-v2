import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import * as Yup from 'yup';

import AppText from '../../components/AppText';
import AppForm from '../../components/AppForm';
import AppFormField from '../../components/AppFormField';
import Screen from '../../components/Screen';
import SubmitButton from '../../components/SubmitButton';
import theme from '../../config/theme';

import {AuthRoutes} from '../../navigation/Routes';
import {StackNavigatorProps} from '../../navigation/NavInterfaces';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label('Email'),
  username: Yup.string().required().min(4).label('Username'),
  password: Yup.string().required().min(8).label('Password'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required()
    .label('Confirm Password'),
});

const SignupScreen = ({
  navigation,
}: StackNavigatorProps<AuthRoutes, 'Signup'>) => {
  const handleEmailAndPasswordSignIn = async (
    email: string,
    password: string,
    username: string,
  ) => {
    try {
      const cred = await auth().createUserWithEmailAndPassword(email, password);
      if (cred) {
        console.log(cred.user);
        await firestore().collection('users').doc(cred.user.uid).set({
          firstName: username,
          email: cred.user.email,
          createdAt: firestore.FieldValue.serverTimestamp(),
          lastLoginTime: firestore.FieldValue.serverTimestamp(),
        });
      }
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        return {error: 'That email address is already in use!'};
      }

      if (error.code === 'auth/invalid-email') {
        return {error: 'That email address is invalid!'};
      }

      return error;
    }
  };
  return (
    <Screen style={styles.container}>
      <AppText style={styles.title}>Sign up</AppText>
      <View style={styles.signupForm}>
        <AppForm
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
            username: '',
          }}
          validationSchema={validationSchema}
          onSubmit={async (values: any) => {
            handleEmailAndPasswordSignIn(
              values.email,
              values.password,
              values.username,
            );
          }}>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            name="email"
            placeholder="Email"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="username"
            name="username"
          />
          <AppFormField
            name="password"
            placeholder="Password"
            secureTextEntry
          />
          <AppFormField
            name="confirmPassword"
            placeholder="Confirm Password"
            secureTextEntry
          />
          <SubmitButton title="Sign up" />
        </AppForm>
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
