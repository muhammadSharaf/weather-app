import {StyleSheet} from 'react-native';
import DIMENSIONS from '../../../theme/dimensions';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginTop: 2 * DIMENSIONS.ELEMENT_PADDING,
    paddingHorizontal: 2 * DIMENSIONS.ELEMENT_PADDING,
  },
  block: {
    flex: 1,
    flexDirection: 'row',
  },
  left: {
    justifyContent: 'flex-start',
  },
  middle: {
    justifyContent: 'center',
  },
  right: {
    justifyContent: 'flex-end',
  },
});

export default styles;
