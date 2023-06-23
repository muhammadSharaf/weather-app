import {StyleSheet} from 'react-native';
import DIMENSIONS from '../../../../theme/dimensions';
import globalStyles from '../../../../theme/global.style';
import Theme from '../../../../theme/theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: DIMENSIONS.ELEMENT_PADDING,
  },
  dayInfoContainer: {
    marginVertical: 2 * DIMENSIONS.ELEMENT_PADDING,
    paddingHorizontal: DIMENSIONS.ELEMENT_PADDING,
  },
  today: {
    ...globalStyles.textH3B,
    color: Theme.colors.shade,
  },
  minMaxTmp: {
    ...globalStyles.textH5,
    color: Theme.colors.shade,
  },
});

export default styles;
