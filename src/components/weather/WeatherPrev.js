import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles/weatherPrev.style';
import {CustomIcon} from '../elements/custom-icon/CustomIcon';
import {getWeatherIcon} from '../../helpers/weatherHelper';
import Loader from '../elements/custom/Loader';

const WeatherPrev = ({weather, city, isLoading}) => {
  const {temp} = weather.main || 0.0;
  const {main: condition, description} = weather.state || {};
  const {name, code} = city;

  return (
    <View style={styles.container}>
      <CustomIcon name={getWeatherIcon(condition)} style={styles.icon} />
      {isLoading ? <Loader /> : <Text style={styles.tmp}>{temp}</Text>}
      <Text style={styles.cityName}>{`${name}, ${code}`}</Text>
    </View>
  );
};

export default WeatherPrev;
