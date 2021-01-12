import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/welcome-bg.png')}
      style={styles.background}>
      <View style={styles.btnGroup}>
        <TouchableOpacity style={styles.btn}>
          <View>
            <Text style={styles.btnText}>Sign in</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnOutline}>
          <View>
            <Text style={styles.btnOutlineText}>Sign up</Text>
          </View>
        </TouchableOpacity>
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
  },
  btn: {
    padding: 16,
    backgroundColor: '#FFC100',
    marginHorizontal: 24,
    marginVertical: 16,
  },
  btnText: {
    fontSize: 16,
    color: '#111',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnOutline: {
    borderWidth: 1,
    borderColor: '#ffc100',
    padding: 16,
    marginHorizontal: 24,
  },
  btnOutlineText: {
    color: '#ffc100',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
