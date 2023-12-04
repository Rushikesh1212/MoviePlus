import {PixelRatio} from 'react-native';
import {useDimensions} from './DimensionProvider';

export const useResponsiveHelper = () => {
  const {width, height} = useDimensions();

  const widthPercentageToDP = (widthPercent) => {
    const screenWidth = width;
    const elemWidth =
      typeof widthPercent === 'string'
        ? parseFloat(widthPercent)
        : widthPercent;

    return PixelRatio.roundToNearestPixel(screenWidth * (elemWidth / 100));
  };

  const heightPercentageToDP = (heightPercent) => {
    const screenHeight = height;
    const elemHeight =
      typeof heightPercent === 'string'
        ? parseFloat(heightPercent)
        : heightPercent;

    return PixelRatio.roundToNearestPixel(screenHeight * (elemHeight / 100));
  };

  return {widthPercentageToDP, heightPercentageToDP};
};