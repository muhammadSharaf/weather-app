import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './styles/loader';
import Theme from '../../../theme/theme';

const Loader = ({
  size = 'large',
  color = Theme.colors.secondary,
  centered = false,
}) => {
  return (
    <View style={centered ? styles.centered : styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loader;
