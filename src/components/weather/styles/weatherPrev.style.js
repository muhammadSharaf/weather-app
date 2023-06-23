import {StyleSheet} from 'react-native';
import Theme from '../../../theme/theme';
import globalStyles from '../../../theme/global.style';
import DIMENSIONS from '../../../theme/dimensions';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: DIMENSIONS.ELEMENT_PADDING,
  },
  icon: {
    fontSize: 48,
    color: Theme.colors.secondary,
    marginBottom: 8,
  },
  tmp: {
    ...globalStyles.textH1,
  },
  unit: {
    ...globalStyles.textH3,
  },
  cityName: {
    ...globalStyles.textH3B,
  },
});

export default styles;
