import {StyleSheet} from 'react-native';
import globalStyles from '../../../theme/global.style';
import Theme from '../../../theme/theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
  },
  header: {
    ...globalStyles.textH2B,
  },
  subHeader: {
    ...globalStyles.textH3B,
    color: Theme.colors.shade,
  },
});

export default styles;
