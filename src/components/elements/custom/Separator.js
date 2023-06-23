import React from 'react';
import {View} from 'react-native';
import Theme from '../../../theme/theme';

const Separator = ({
  horizontal = false,
  thickness = 1,
  length = 36,
  color = Theme.colors.secondary,
  margin = 0,
}) => {
  const styles = horizontal
    ? {
        width: length,
        height: thickness,
        marginHorizontal: margin,
        backgroundColor: color,
      }
    : {
        width: thickness,
        height: length,
        marginVertical: margin,
        backgroundColor: color,
      };

  return <View style={styles} />;
};

export default Separator;
