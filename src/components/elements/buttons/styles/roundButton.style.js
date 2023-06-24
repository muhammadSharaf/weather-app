import {StyleSheet} from 'react-native';
import Theme from '../../../../theme/theme';
import DIMENSIONS from '../../../../theme/dimensions';
import globalStyles from '../../../../theme/global.style';

const styles = StyleSheet.create({
  container: {
    margin: 2 * DIMENSIONS.ELEMENT_PADDING,
    paddingVertical: DIMENSIONS.ELEMENT_PADDING,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    backgroundColor: Theme.colors.primary,
  },
  inactive: {
    backgroundColor: Theme.colors.grey,
  },
  title: {
    ...globalStyles.textH3,
    color: Theme.colors.white,
  },
});

export default styles;
