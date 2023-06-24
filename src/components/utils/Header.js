import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles/header.style';

const Header = ({title, subHeader}) => {
  return (
    <View style={styles.container}>
      <Text style={subHeader ? styles.subHeader : styles.header}>{title}</Text>
    </View>
  );
};

export default Header;
