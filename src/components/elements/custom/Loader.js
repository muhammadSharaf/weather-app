import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './styles/loader';
import Theme from '../../../theme/theme';

const Loader = ({size = 'large', centered = false}) => {
  return (
    <View style={centered ? styles.centered : styles.container}>
      <ActivityIndicator size={size} color={Theme.colors.secondary} />
    </View>
  );
};

export default Loader;
