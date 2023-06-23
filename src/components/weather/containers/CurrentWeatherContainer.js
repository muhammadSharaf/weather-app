import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import WeatherPrev from '../WeatherPrev';
import ConditionsContainer from './ConditionsContainer';
import {getCurrentWeather} from '../../../store/slices/weatherSlice';
import styles from './styles/currentWeatherContainer.style';
import {MONTHS} from '../../../constants/units';

const CurrentWeatherContainer = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.weatherReducer.isLoadingWeather);
  const weather = useSelector(state => state.weatherReducer.weather);
  const city = useSelector(state => state.citiesReducer.currentCity);
  const conditions = useSelector(state => state.weatherReducer.conditions);

  const today = new Date();

  useEffect(() => {
    dispatch(getCurrentWeather());
  }, [dispatch]);

  console.log('weather', weather);

  return (
    <View style={styles.container}>
      <View style={styles.dayInfoContainer}>
        <Text style={styles.today}>{`Today, ${today.getDate()} ${
          MONTHS[today.getMonth()]
        }`}</Text>
        <Text style={styles.minMaxTmp}>
          {!isLoading
            ? `${weather?.main?.max} / ${weather?.main?.min} Feels like ${weather?.main?.feels}`
            : '‎ '}
        </Text>
        <Text style={styles.minMaxTmp}>
          {!isLoading ? weather?.state?.description : '‎ '}
        </Text>
      </View>
      <WeatherPrev weather={weather} city={city} isLoading={isLoading} />
      <ConditionsContainer list={conditions} isLoading={isLoading} />
    </View>
  );
};

export default CurrentWeatherContainer;
