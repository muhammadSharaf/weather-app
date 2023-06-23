import {StyleSheet} from 'react-native';
import Theme from './theme';
import DIMENSIONS from './dimensions';
import { FONTS } from "./fonts";

const globalStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  screen: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  container: {
    paddingHorizontal: DIMENSIONS.ELEMENT_PADDING,
  },
  textH1: {
    fontFamily: FONTS.pinyonMedium,
    fontSize: 48,
    lineHeight: 64,
    color: Theme.colors.primary,
  },
  textH2: {
    fontFamily: FONTS.pinyonRegular,
    fontSize: 22,
    color: Theme.colors.primary,
  },
  textH2B: {
    fontFamily: FONTS.pinyonMedium,
    fontSize: 22,
    color: Theme.colors.primary,
  },
  textH3: {
    fontFamily: FONTS.pinyonRegular,
    fontSize: 18,
    color: Theme.colors.primary,
  },
  textH3B: {
    fontFamily: FONTS.pinyonMedium,
    fontSize: 18,
    color: Theme.colors.primary,
  },
  textH4: {
    fontFamily: FONTS.pinyonRegular,
    fontSize: 16,
    color: Theme.colors.primary,
  },
  textH4B: {
    fontFamily: FONTS.pinyonMedium,
    fontSize: 16,
    color: Theme.colors.primary,
  },
  textH5: {
    fontFamily: FONTS.pinyonRegular,
    fontSize: 14,
    color: Theme.colors.primary,
  },
});

export default globalStyles;
