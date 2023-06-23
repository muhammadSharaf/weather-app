import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles/weatherPrev.style';
import {CustomIcon} from '../elements/custom-icon/CustomIcon';
import {getWeatherIcon} from '../../helpers/weatherHelper';

const WeatherPrev = ({weather, city}) => {
  const {temp} = weather.main || 0.0;
  const {main: condition, description} = weather.state || {};
  const {name, code} = city;

  return (
    <View style={styles.container}>
      <CustomIcon name={getWeatherIcon(condition)} style={styles.icon} />
      <Text style={styles.tmp}>{temp}</Text>
      <Text style={styles.cityName}>{`${name}, ${code}`}</Text>
    </View>
  );
};

export default WeatherPrev;
