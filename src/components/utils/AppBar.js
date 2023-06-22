import React from 'react';
import styles from './styles/appBar.style';
import {View} from 'react-native';
import IconButton from '../elements/buttons/IconButton';

const AppBar = () => {
  return (
    <View style={styles.container}>
      <IconButton icon={'rainy'} />
      <IconButton icon={'rainy'} />
    </View>
  );
};

export default AppBar;
