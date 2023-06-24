import React from 'react';
import styles from './styles/appBar.style';
import {View} from 'react-native';

const AppBar = ({left, middle, right}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.block, styles.left]}>{left}</View>
      <View style={[styles.block, styles.middle]}>{middle}</View>
      <View style={[styles.block, styles.right]}>{right}</View>
    </View>
  );
};

export default AppBar;
