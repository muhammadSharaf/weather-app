import {StyleSheet} from 'react-native';
import Theme from './theme';
import DIMENSIONS from './dimensions';
import { FONTS } from "./fonts";

const globalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Theme.colors.background,
    padding: DIMENSIONS.SCREEN_PADDING,
  },

  textH1: {
    fontFamily: FONTS.pinyonMedium,
    fontSize: 64,
    lineHeight: 84,
    color: Theme.colors.primary,
  },
  textH2: {
    fontFamily: FONTS.pinyonRegular,
    fontSize: 18,
    color: Theme.colors.primary,
  },
  textH2B: {
    fontFamily: FONTS.pinyonMedium,
    fontSize: 18,
    color: Theme.colors.primary,
  },
  textH3: {
    fontFamily: FONTS.pinyonRegular,
    fontSize: 16,
    color: Theme.colors.primary,
  },
  textH3B: {
    fontFamily: FONTS.pinyonMedium,
    fontSize: 16,
    color: Theme.colors.primary,
  },
});

export default globalStyles;
