import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector, useStore} from 'react-redux';
import WeatherPrev from '../WeatherPrev';
import ConditionsContainer from './ConditionsContainer';
import {getCurrentWeather} from '../../../store/slices/weatherSlice';
import styles from './styles/currentWeatherContainer.style';
import {MONTHS} from '../../../constants/units';

const CurrentWeatherContainer = () => {
  const dispatch = useDispatch();
  const unit = useStore().getState().settingsReducer.unit;
  const isLoading = useSelector(state => state.weatherReducer.isLoadingWeather);
  const weather = useSelector(state => state.weatherReducer.weather);
  const currentLocation = useSelector(
    state => state.locationsReducer.currentLocation,
  );
  const conditions = useSelector(state => state.weatherReducer.conditions);

  const today = new Date();

  useEffect(() => {
    dispatch(getCurrentWeather());
  }, [dispatch, currentLocation]);

  return (
    <View style={styles.container}>
      <View style={styles.dayInfoContainer}>
        <Text style={styles.today}>{`Today, ${today.getDate()} ${
          MONTHS[today.getMonth()]
        }`}</Text>
        <Text style={styles.minMaxTmp}>
          {!isLoading
            ? `${weather?.main?.max}${unit.tempSymbol} / ${weather?.main?.min}${unit.tempSymbol} Feels like ${weather?.main?.feels}${unit.tempSymbol}`
            : '‎ '}
        </Text>
        <Text style={styles.minMaxTmp}>
          {!isLoading ? weather?.state?.description : '‎ '}
        </Text>
      </View>
      <WeatherPrev
        weather={weather}
        location={currentLocation}
        isLoading={isLoading}
      />
      <ConditionsContainer list={conditions} isLoading={isLoading} />
    </View>
  );
};

export default CurrentWeatherContainer;
