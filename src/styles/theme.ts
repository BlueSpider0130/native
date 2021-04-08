import {DefaultTheme, DarkTheme} from '@react-navigation/native';
export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3963A2',
    secondary: '#9b9b9b',
    text: '#000000',
    border: '#ededed',
  },
};
export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#3963A2',
    secondary: '#ccc',
    card: '#282828',
    background: '#121212',
    border: '#333333',
  },
};
