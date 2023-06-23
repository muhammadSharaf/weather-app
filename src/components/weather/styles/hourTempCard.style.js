import {StyleSheet} from 'react-native';
import DIMENSIONS from '../../../theme/dimensions';
import Theme from '../../../theme/theme';
import globalStyles from '../../../theme/global.style';

const styles = StyleSheet.create({
  container: {
    width: DIMENSIONS.HOURLY_CARD_W,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4 * DIMENSIONS.ELEMENT_PADDING,
    marginHorizontal: DIMENSIONS.ELEMENT_PADDING / 2,
    ...Theme.shadows.heavy,
    borderRadius: DIMENSIONS.RADIUS_L,
    overflow: 'hidden',
  },
  time: {
    ...globalStyles.textH4,
    color: Theme.colors.white,
    marginBottom: 2 * DIMENSIONS.ELEMENT_PADDING,
  },
  tmp: {
    marginTop: 6 * DIMENSIONS.ELEMENT_PADDING,
    ...globalStyles.textH2B,
    color: Theme.colors.white,
  },
  icon: {
    fontSize: 64,
    color: Theme.colors.white,
  },
});

export default styles;
