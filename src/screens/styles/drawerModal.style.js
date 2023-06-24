import {StyleSheet} from 'react-native';
import Theme from '../../theme/theme';
import DIMENSIONS from '../../theme/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    margin: 0,
    width: '80%',
  },
  content: {
    flex: 1,
    padding: 2 * DIMENSIONS.ELEMENT_PADDING,
    backgroundColor: Theme.colors.white,
  },
});

export default styles;
