import React from 'react';
import styles from './styles/appBar.style';
import {View} from 'react-native';

const AppBar = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default AppBar;
