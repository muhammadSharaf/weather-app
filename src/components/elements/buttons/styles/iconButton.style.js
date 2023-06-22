import {StyleSheet} from 'react-native';
import DIMENSIONS from '../../../../theme/dimensions';
import Theme from '../../../../theme/theme';

const styles = StyleSheet.create({
  container: {
    width: DIMENSIONS.SQUARE_BTN,
    height: DIMENSIONS.SQUARE_BTN,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: Theme.colors.white,
    borderRadius: DIMENSIONS.RADIUS_SM,
    ...Theme.shadows.light,
  },
  icon: {
    color: Theme.colors.primary
  },
});

export default styles;
