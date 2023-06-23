import {StyleSheet} from 'react-native';
import DIMENSIONS from '../../../theme/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 2 * DIMENSIONS.ELEMENT_PADDING,
  },
  listContainer: {
    paddingBottom: 12,
    paddingHorizontal: DIMENSIONS.ELEMENT_PADDING,
  },
});

export default styles;
