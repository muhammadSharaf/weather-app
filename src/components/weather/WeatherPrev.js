import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles/weatherPrev.style';
import {CustomIcon} from '../elements/custom-icon/CustomIcon';

const WeatherPrev = () => {
  return (
    <View style={styles.container}>
      <CustomIcon name={'rainy'} style={styles.icon} />
      <Text style={styles.tmp}>26,9</Text>
      <Text style={styles.cityName}>New yourk, USA</Text>
    </View>
  );
};

export default WeatherPrev;
