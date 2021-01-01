import React from 'react';
import {View} from 'react-native';

interface SeparatorProps {
  marginBottom: number;
}

const Separator = ({marginBottom}: SeparatorProps): JSX.Element => {
  return <View style={{marginBottom}} />;
};

export default Separator;
