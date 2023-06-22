import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles/weatherPrev.style';
import {CustomIcon} from '../elements/custom-icon/CustomIcon';
import {getCurrentWeather} from '../../store/slices/weatherSlice';
import {getWeatherIcon} from '../../helpers/weatherHelper';

const WeatherPrev = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.weatherReducer.isLoadingWeather);
  const weather = useSelector(state => state.weatherReducer.weather);
  const city = useSelector(state => state.citiesReducer.currentCity);

  const {temp} = weather.main || 0.0;
  const {main: condition, description} = weather.state || {};
  const {name, code} = city;

  useEffect(() => {
    dispatch(getCurrentWeather());
  }, [dispatch]);

  console.log('currentWeather', weather);
  if (isLoading) {
    return <Text>Loading</Text>;
  }

  return (
    <View style={styles.container}>
      <CustomIcon name={getWeatherIcon(condition)} style={styles.icon} />
      <Text style={styles.tmp}>{temp}</Text>
      <Text style={styles.cityName}>{`${name}, ${code}`}</Text>
    </View>
  );
};

export default WeatherPrev;
