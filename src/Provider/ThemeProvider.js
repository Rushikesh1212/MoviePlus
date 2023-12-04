import React from 'react';
import {ThemeProvider as ElementsThemeProvider} from 'react-native-elements';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {base, large, small, tiny, xLarge, xTiny} from '../constants/Theme';
import {useResponsiveHelper} from '../hooks/responsive';

export const ThemeProvider = ({theme, children}) => {
  const {widthPercentageToDP} = useResponsiveHelper();

  if (theme.styled && theme.styled.spacing) {
    theme.styled.spacing = {
      xTiny: widthPercentageToDP(xTiny),
      tiny: widthPercentageToDP(tiny),
      small: widthPercentageToDP(small),
      base: widthPercentageToDP(base),
      large: widthPercentageToDP(large),
      xLarge: widthPercentageToDP(xLarge),
    };
  }
  if (theme.styled && theme.styled.padding) {
    theme.styled.padding = {
      xsmall: widthPercentageToDP(theme.styled.padding.xsmall),
      small: widthPercentageToDP(theme.styled.padding.small),
      xmedium: widthPercentageToDP(theme.styled.padding.xmedium),
      medium: widthPercentageToDP(theme.styled.padding.medium),
      xlarge: widthPercentageToDP(theme.styled.padding.xlarge),
      large: widthPercentageToDP(theme.styled.padding.large),
    };
  }

  theme.fontSizes = {
    base: widthPercentageToDP(theme.fontSizes.base),
    header: widthPercentageToDP(theme.fontSizes.header),
    large: widthPercentageToDP(theme.fontSizes.large),
    error: widthPercentageToDP(theme.fontSizes.error),
    small: widthPercentageToDP(theme.fontSizes.small),
  };

  theme.styled.iconSize = {
    smallIconSize: widthPercentageToDP(theme.styled.iconSize.smallIconSize),
    normalIconSize: widthPercentageToDP(theme.styled.iconSize.normalIconSize),
    largeIconSize: widthPercentageToDP(theme.styled.iconSize.largeIconSize),
  };
  return (
    <ElementsThemeProvider
      theme={{
        ...theme.elements,
        ...theme.fontSizes,
        colors: {...theme.colors},
      }}>
      <StyledThemeProvider
        theme={{
          colors: {...theme.colors},
          styled: {
            ...theme.styled,
            fontSizes: theme.fontSizes,
            iconSize: theme.styled.iconSize,
          },
        }}>
        {children}
      </StyledThemeProvider>
    </ElementsThemeProvider>
  );
};
