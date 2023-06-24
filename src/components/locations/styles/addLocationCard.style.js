import {StyleSheet} from 'react-native';
import DIMENSIONS from '../../../theme/dimensions';
import globalStyles from '../../../theme/global.style';
import Theme from '../../../theme/theme';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginEnd: DIMENSIONS.ELEMENT_PADDING,
    marginTop: DIMENSIONS.ELEMENT_PADDING,
  },
  input: {
    flex: 1,
    height: DIMENSIONS.SQUARE_BTN,
    marginEnd: DIMENSIONS.ELEMENT_PADDING,
    paddingBottom: DIMENSIONS.ELEMENT_PADDING - 2,
    paddingHorizontal: DIMENSIONS.ELEMENT_PADDING,
    ...globalStyles.textH5,
    backgroundColor: Theme.colors.border,
    borderRadius: DIMENSIONS.RADIUS_SM,
  },
  addBtn: {
    marginStart: 0,
    marginEnd: DIMENSIONS.ELEMENT_PADDING,
  },
});

export default styles;
