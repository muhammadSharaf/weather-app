import {StyleSheet} from 'react-native';
import DIMENSIONS from '../../../theme/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginTop: 2 * DIMENSIONS.ELEMENT_PADDING,
    paddingHorizontal: 2 * DIMENSIONS.ELEMENT_PADDING,
  },
});

export default styles;
