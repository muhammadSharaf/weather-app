import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles/weatherPrev.style';
import {CustomIcon} from '../elements/custom-icon/CustomIcon';
import {getCurrentWeather} from '../../store/slices/weatherSlice';

const WeatherPrev = () => {
  const dispatch = useDispatch();
  const weather = useSelector(state => state.weatherReducer.weather);
  const city = useSelector(state => state.citiesReducer.currentCity);

  const {temp} = weather.main;
  const {name, code} = city;

  useEffect(() => {
    dispatch(getCurrentWeather());
  }, [dispatch]);

  console.log('currentWeather', weather);

  return (
    <View style={styles.container}>
      <CustomIcon name={'rainy'} style={styles.icon} />
      <Text style={styles.tmp}>{temp}</Text>
      <Text style={styles.cityName}>{`${name}, ${code}`}</Text>
    </View>
  );
};

export default WeatherPrev;
