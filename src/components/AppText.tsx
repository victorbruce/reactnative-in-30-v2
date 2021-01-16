import React from 'react';
import {StyleSheet, Text} from 'react-native';
import theme from '../config/theme';

interface AppTextProps {
  children: React.ReactNode;
  style?: any;
}

const AppText = ({children, style}: AppTextProps) => {
  return <Text style={[styles.text, {...style}]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: theme.colors.white,
  },
});

export default AppText;
