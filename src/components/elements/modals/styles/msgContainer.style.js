import {StyleSheet} from 'react-native';
import DIMENSIONS from '../../../../theme/dimensions';
import Theme from '../../../../theme/theme';
import globalStyles from '../../../../theme/global.style';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
  },
  modal: {
    margin: DIMENSIONS.ELEMENT_PADDING,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  content: {
    width: '100%',
    justifyContent: 'space-between',
    padding: 2 * DIMENSIONS.ELEMENT_PADDING,
    borderRadius: DIMENSIONS.RADIUS_L,
    backgroundColor: Theme.colors.white,
    ...Theme.shadows.heavy,
  },
  msg: {
    ...globalStyles.textH5,
    color: Theme.colors.grey,
  },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 8 * DIMENSIONS.ELEMENT_PADDING,
  },
  activeControl: {
    ...globalStyles.textH4B,
    color: Theme.colors.shade,

  },
  passiveControl: {
    ...globalStyles.textH4B,
    color: Theme.colors.shade,
  },
});

export default styles;
