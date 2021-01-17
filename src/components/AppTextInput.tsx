import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

import theme from '../config/theme';

const AppTextInput = ({...otherProps}) => {
  return <TextInput style={styles.textInput} {...otherProps} />;
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: theme.colors.white,
    padding: theme.spacing.medium,
    borderRadius: theme.borderRadii.medium,
    color: theme.colors.white,
    marginBottom: theme.spacing.medium,
  },
});

export default AppTextInput;
