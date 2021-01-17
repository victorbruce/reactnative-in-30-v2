import React from 'react';
import {StyleSheet} from 'react-native';

import AppText from '../components/AppText';

import theme from '../config/theme';

interface ErrorMessageProps {
  error: any;
  visible: boolean | undefined;
}

const ErrorMessage = ({error, visible}: ErrorMessageProps) => {
  if (!error || !visible) {
    return null;
  }

  return <AppText style={styles.error}>{error}</AppText>;
};

const styles = StyleSheet.create({
  error: {
    color: theme.colors.red,
    marginBottom: theme.spacing.medium,
  },
});

export default ErrorMessage;
