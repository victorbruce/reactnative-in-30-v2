import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

import theme from '../config/theme';

interface AppButtonProps {
  title: string;
  onPress: () => void;
  outline?: boolean;
  btnTextColor?: string;
  bgColor?: string;
}

const AppButton = ({
  title,
  onPress,
  outline,
  btnTextColor,
  bgColor,
}: AppButtonProps) => {
  const backgroundColor = outline
    ? {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: bgColor ? bgColor : theme.colors.yellow,
        padding: 16,
      }
    : {
        padding: 16,
        backgroundColor: bgColor ? bgColor : theme.colors.yellow,
      };

  const textColor = {color: btnTextColor ? btnTextColor : theme.colors.white};

  return (
    <TouchableOpacity
      style={[styles.btn, {...backgroundColor}]}
      onPress={onPress}>
      <View>
        <Text style={[styles.btnText, {...textColor}]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 16,
    width: '100%',
    borderRadius: theme.borderRadii.medium,
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AppButton;
