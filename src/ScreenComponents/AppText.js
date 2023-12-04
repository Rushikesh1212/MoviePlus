import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, withTheme} from 'react-native-elements';

const getType = (type, theme) => {
  return styles[type]
    ? typeof styles[type] === 'function'
      ? styles[type](theme)
      : styles[type]
    : {};
};

export const AppText = withTheme(props => {
  const {children, style, type = [], theme, noTranslate = false} = props;
  const textStyles = [
    //to comply with styled components style all styles must be array
    StyleSheet.flatten([
      styles.text(theme),
      style,
      type.map(e => getType(e, theme)),
    ]),
  ];
  return (
    <Text {...props} style={textStyles}>
      {children}
    </Text>
  );
});
const styles = {
  text: theme => ({
    fontSize: theme.fontSizes.base,
    color: '#363537',
    // ...getFontStyleObject({family: 'Lato', weight: 'Regular'}),
  }),
  bold: theme => ({
    // ...getFontStyleObject({family: 'Lato', weight: 'Bold'}),
    fontWeight: 'bold',
  }),
  primary: theme => ({
    color: theme.colors.blue,
  }),
  theme: theme => ({
    color: theme.colors.theme,
  }),
  secondary: theme => ({
    color: theme.colors.secondary,
  }),
  white: theme => ({
    color: theme.colors.white,
  }),
  small: theme => ({
    fontSize: theme.fontSizes.small,
  }),
  large: theme => ({
    fontSize: theme.fontSizes.large,
  }),
  center: {
    textAlign: 'center',
  },
  muted: theme => ({
    color: theme.colors.grey2,
  }),
  header: theme => ({
    textAlign: 'center',
    fontSize: theme.fontSizes.header,
    // ...getFontStyleObject({family: 'Lato', weight: 'Bold'}),
  }),
  error: theme => ({
    color: theme.colors.error,
  }),
  validationError: theme => ({
    color: theme.colors.error,
    fontSize: theme.fontSizes.error,
    marginTop: 5,
    padding: '1%',
  }),
  label: {
    color: '#121212',
    // ...getFontStyleObject({family: 'Lato', weight: 'Bold'}),
  },
};
