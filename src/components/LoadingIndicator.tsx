import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

interface LoadingIndicatorProps {
  size: number;
  color: string;
}

const LoadingIndicator = ({size, color}: LoadingIndicatorProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingIndicator;
