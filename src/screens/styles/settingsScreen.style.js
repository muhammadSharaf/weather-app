import {StyleSheet} from 'react-native';
import DIMENSIONS from '../../theme/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 3 * DIMENSIONS.ELEMENT_PADDING,
  },
  content: {
    marginTop: 4 * DIMENSIONS.ELEMENT_PADDING,
    padding: 2 * DIMENSIONS.ELEMENT_PADDING,
  },
});

export default styles;
