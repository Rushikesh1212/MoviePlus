import {colors} from './colors';
// margin spacing
export const xTiny = 1;
export const tiny = 2;
export const small = 3;
export const base = 5;
export const large = 7;
export const xLarge = 10;
//padding spacing
export const padding = {
  xsmall: 5,
  small: 10,
  xmedium: 15,
  medium: 20,
  xlarge: 25,
  large: 30,
};
// font
export const fontSizes = {
  base: 16,
  small: 14,
  header: 22,
  large: 18,
  error: 12,
};

//specification
export const buttonHeight = 48;
export const headerHeight = 55;
export const borderRadius = 6;
export const InputBoxHeight = 50;
export const InputBoxHeightPr = 5;
export const bottomTabHeight = 55;
export const dropdownHeight = 20;
export const borderBottom = 0.8;
// TODO: add Theme types
const elements = {
  Input: {
    inputContainerStyle: {
      overflow: 'hidden',
      margin: xTiny,
      borderBottomWidth: 0.6,
      minHeight: InputBoxHeight,
      borderColor: colors.grey2,
    },
    inputStyle: {
      marginLeft: 10,
      fontSize: 16,
      //   ...getFontStyleObject({family: 'Lato', weight: 'Regular'}),
    },
    leftIconContainerStyle: {
      marginLeft: `${small}%`,
      marginRight: `${small}%`,
    },
    containerStyle: {
      marginVertical: `${xTiny}%`,
      paddingHorizontal: `${base}%`,
      backgroundColor: 'transparent',
      // borderWidth: 0.6,
      // padding: `${base}%`,
    },
    labelStyle: {
      color: colors.grey0,
      paddingLeft: '2%',
      fontSize: 16,
      //   ...getFontStyleObject({family: 'Lato', weight: 'Bold'}),
    },
    errorStyle: {
      // ...getFontStyleObject(),
    },
    placeholderTextColor: colors.grey3,
  },
  Button: {
    buttonStyle: {
      minHeight: buttonHeight,
      borderRadius: 0,
      backgroundColor: '#f00',
    },
    disabledStyle: {backgroundColor: '#fff'},
    titleStyle: {
      //   ...getFontStyleObject({family: 'Lato', weight: 'Bold'}),
    },
  },
  SearchBar: {
    containerStyle: {
      backgroundColor: '#FFF',
      borderTopWidth: 0,
      borderBottomWidth: 0,
      padding: 0,
    },
    inputContainerStyle: {
      borderRadius,
      borderWidth: 0,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
      alignItems: 'flex-start',
    },
    searchIcon: null,
  },
  CheckBox: {
    iconType: 'material-community',
    checkedIcon: 'checkbox-marked',
    uncheckedIcon: 'checkbox-blank-outline',
    checkedColor: '#FA6801',
    containerStyle: {
      alignSelf: 'flex-start',
      backgroundColor: 'transparent',
      borderWidth: 0,
    },
    // textStyle: {...getFontStyleObject(), fontWeight: 'normal'},
  },
  fontSizes,
};

const iconSize = {
  smallIconSize: 20,
  normalIconSize: 24,
  largeIconSize: 40,
};

export const Theme = {
  colors,
  fontSizes,
  styled: {
    spacing: {
      xTiny,
      tiny,
      small,
      base,
      large,
      xLarge,
    },
    padding,
    iconSize,
    fontSizes,
  },
  elements,
};