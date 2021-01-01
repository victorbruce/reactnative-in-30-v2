import React from 'react';
import {StatusBar, Platform, StyleSheet, SafeAreaView} from 'react-native';

interface ScreenProps {
  children: React.ReactNode;
}

const Screen = (props: ScreenProps): JSX.Element => {
  return <SafeAreaView style={styles.screen}>{props.children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default Screen;
