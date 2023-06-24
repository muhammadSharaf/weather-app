import {StyleSheet} from 'react-native';
import Theme from '../../theme/theme';
import DIMENSIONS from '../../theme/dimensions';
import globalStyles from '../../theme/global.style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2 * DIMENSIONS.ELEMENT_PADDING,
    backgroundColor: Theme.colors.white,
  },
  section: {
    marginVertical: 2 * DIMENSIONS.ELEMENT_PADDING,
  },
  currentLocation: {
    marginTop: DIMENSIONS.ELEMENT_PADDING,
  },
  emptyRecent: {
    ...globalStyles.textH5,
    marginTop: 2 * DIMENSIONS.ELEMENT_PADDING,
    marginStart: 2 * DIMENSIONS.ELEMENT_PADDING,
  },
});

export default styles;
