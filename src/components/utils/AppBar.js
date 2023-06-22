import React from 'react';
import styles from './styles/appBar.style';
import {View} from 'react-native';
import IconButton from '../elements/buttons/IconButton';

const AppBar = () => {
  return (
    <View style={styles.container}>
      <IconButton icon={'menu'} />
      <IconButton icon={'settings'} />
    </View>
  );
};

export default AppBar;
