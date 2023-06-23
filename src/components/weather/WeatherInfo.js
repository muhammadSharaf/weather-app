import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import WeatherPrev from './WeatherPrev';
import ConditionsContainer from './ConditionsContainer';
import {getCurrentWeather} from '../../store/slices/weatherSlice';

const WeatherInfo = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.weatherReducer.isLoadingWeather);
  const weather = useSelector(state => state.weatherReducer.weather);
  const city = useSelector(state => state.citiesReducer.currentCity);
  const conditions = useSelector(state => state.weatherReducer.conditions);

  useEffect(() => {
    dispatch(getCurrentWeather());
  }, [dispatch]);

  console.log('currentWeather', weather);

  return (
    <View>
      <WeatherPrev weather={weather} city={city} isLoading={isLoading} />
      <ConditionsContainer list={conditions} isLoading={isLoading} />
    </View>
  );
};

export default WeatherInfo;
