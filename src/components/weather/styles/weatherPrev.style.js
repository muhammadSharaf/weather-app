import {StyleSheet} from 'react-native';
import Theme from '../../../theme/theme';
import globalStyles from '../../../theme/global.style';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 48,
    color: Theme.colors.secondary,
  },
  tmp: {
    ...globalStyles.textH1,
  },
  cityName: {
    ...globalStyles.textH3B,
  },
});

export default styles;
