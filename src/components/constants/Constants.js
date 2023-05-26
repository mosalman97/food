import {Dimensions} from 'react-native';

// package
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// to get actual device height and width of that screen
const {width, height} = Dimensions.get('window');
export const deviceWidth = width;
export const deviceHeight = height;

// size
export const SIZES = {
  wp: wp,
  hp: hp,
};

// fontfamily
export const Fonts = {
  regular: 'segoe-ui',
  light: 'segoeuil',
  semiBold: 'seguisb',
  bold: 'segoe-ui-bold',
  shuriken: 'ShurikenStd',
};
