import {StyleSheet} from 'react-native';
import globalStyles from '../../../theme/global.style';

const WIDTH = 40;

const styles = StyleSheet.create({
  container: {
    flexBasis: `${WIDTH}%`,
    flexDirection: 'row',
    marginVertical: 8,
    marginHorizontal: `${(50 - WIDTH) / 2}%`,
  },
  dataContainer: {
    flexDirection: 'column',
    marginStart: 16,
  },
  title: {
    ...globalStyles.textH5,
  },
  value: {
    ...globalStyles.textH2B,
  },
});

export default styles;
