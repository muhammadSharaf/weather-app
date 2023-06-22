import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles/weatherPrev.style';
import {CustomIcon} from '../elements/custom-icon/CustomIcon';
import {getCurrentWeather} from '../../store/slices/weatherSlice';

const WeatherPrev = () => {
  const dispatch = useDispatch();
  const currentWeather = useSelector(state => state.weatherReducer.weather);

  useEffect(() => {
    dispatch(getCurrentWeather());
  }, [dispatch]);

  console.log('currentWeather', currentWeather);

  return (
    <View style={styles.container}>
      <CustomIcon name={'rainy'} style={styles.icon} />
      <Text style={styles.tmp}>26,9</Text>
      <Text style={styles.cityName}>New yourk, USA</Text>
    </View>
  );
};

export default WeatherPrev;
