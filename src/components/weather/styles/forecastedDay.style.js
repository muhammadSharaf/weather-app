import {StyleSheet} from 'react-native';
import DIMENSIONS from '../../../theme/dimensions';
import globalStyles from '../../../theme/global.style';
import Theme from '../../../theme/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2 * DIMENSIONS.ELEMENT_PADDING,
  },
  weatherStateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    paddingTop: 4,
    ...globalStyles.textH4B,
    color: Theme.colors.shade,
  },
  icon: {
    color: Theme.colors.grey,
    marginEnd: DIMENSIONS.ELEMENT_PADDING,
  },
});

export default styles;
