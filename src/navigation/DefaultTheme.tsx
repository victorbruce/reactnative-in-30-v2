import {DefaultTheme} from '@react-navigation/native';

export default {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: 'yellow',
    background: 'black',
    border: 'transparent',
    text: 'white',
  },
};
