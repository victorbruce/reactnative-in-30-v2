import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';

import AppButton from '../components/AppButton';
import Separator from '../components/Separator';

import theme from '../config/theme';

const WelcomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/welcome-bg.png')}
      style={styles.background}>
      <View style={styles.btnGroup}>
        <AppButton
          title="Sign in"
          onPress={() => navigation.navigate('Signin')}
          btnTextColor={theme.colors.black}
        />
        <Separator marginBottom={theme.spacing.medium} />
        <AppButton
          title="Sign up"
          onPress={() => navigation.navigate('Signup')}
          outline={true}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'contain',
  },
  btnGroup: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
    marginHorizontal: 24,
  },
});

export default WelcomeScreen;
