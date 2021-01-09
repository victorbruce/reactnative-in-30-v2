import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import Separator from '../components/Separator';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  passowrd: Yup.string().required().min(4).label('Password'),
});

const SignupScreen = () => {
  return (
    <Screen style={styles.container}>
      <View style={styles.screenWrapper}>
        <Text style={styles.title}>SignUp</Text>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}>
          {({handleSubmit, handleChange, errors}) => (
            <View>
              <TextInput
                autoCapitalize="none"
                onChangeText={handleChange('email')}
                placeholder="Enter your email address"
                placeholderTextColor="#777"
                style={styles.inputField}
                keyboardType="email-address"
              />
              <Separator marginBottom={8} />
              <Text style={{color: 'red'}}>{errors.email}</Text>
              <Separator marginBottom={16} />
              <TextInput
                onChangeText={handleChange('password')}
                placeholder="Enter your password"
                placeholderTextColor="#777"
                style={styles.inputField}
                secureTextEntry={true}
              />
              <Separator marginBottom={8} />
              <Text style={{color: 'red'}}>{errors.password}</Text>
              <Separator marginBottom={16} />
              <TouchableOpacity style={styles.signupBtn} onPress={handleSubmit}>
                <View>
                  <Text style={styles.btnLabel}>Sign up</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  screenWrapper: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    marginBottom: 38,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  btnLabel: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
  },
  inputField: {
    borderWidth: 1,
    borderRadius: 15,
    height: 50,
    borderColor: '#ccc',
    paddingLeft: 16,
  },
  signupBtn: {
    height: 50,
    backgroundColor: '#111',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignupScreen;
