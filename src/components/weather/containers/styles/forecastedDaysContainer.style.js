import {StyleSheet} from 'react-native';
import DIMENSIONS from '../../../../theme/dimensions';
import globalStyles from '../../../../theme/global.style';
import Theme from '../../../../theme/theme';

const styles = StyleSheet.create({
  container: {
    padding: 2 * DIMENSIONS.ELEMENT_PADDING,
  },
  header: {
    ...globalStyles.textH3B,
    color: Theme.colors.shade,
  },
});

export default styles;
