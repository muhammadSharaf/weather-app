import {StyleSheet} from 'react-native';
import globalStyles from '../../../theme/global.style';
import Theme from '../../../theme/theme';
import DIMENSIONS from '../../../theme/dimensions';

const styles = StyleSheet.create({
  container: {
    padding: 2 * DIMENSIONS.ELEMENT_PADDING,
    borderRadius: DIMENSIONS.RADIUS_L,
    backgroundColor: Theme.colors.white,
  },
  dataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    ...globalStyles.textH4,
  },
  temp: {
    ...globalStyles.textH4B,
    color: Theme.colors.secondary,
  },
});

export default styles;
