import {StyleSheet} from 'react-native';
import Theme from '../../../../theme/theme';
import DIMENSIONS from '../../../../theme/dimensions';
import globalStyles from '../../../../theme/global.style';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 2 * DIMENSIONS.ELEMENT_PADDING,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: Theme.colors.shade,
  },
  buttonContainer: {
    flex: 1,
    paddingTop: DIMENSIONS.ELEMENT_PADDING / 2 + 2,
    paddingBottom: DIMENSIONS.ELEMENT_PADDING / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.white,
    // ...Theme.shadows.light,
  },
  inactive: {
    backgroundColor: Theme.colors.grey,
  },
  title: {
    ...globalStyles.textH5,
  },
  selected: {
    backgroundColor: Theme.colors.primary,
  },
  selectedTitle: {
    color: Theme.colors.white,
  },
  left: {
    borderTopStartRadius: 100,
    borderBottomStartRadius: 100,
  },
  right: {
    borderTopEndRadius: 100,
    borderBottomEndRadius: 100,
  },
});

export default styles;
