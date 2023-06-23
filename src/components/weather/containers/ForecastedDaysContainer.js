import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles/forecastedDaysContainer.style';
import ForecastedDay from '../forecastedDay';
import {useSelector} from 'react-redux';

const ForecastedDaysContainer = () => {
  const forecast = useSelector(state => state.weatherReducer.forecast);
  const weekDay = new Date().getDay();

  const forecastData = forecast.map((day, index) => {
    return (
      <ForecastedDay key={index} dayIdx={(index + weekDay + 1) % 7} day={day} />
    );
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{'NEXT 5 DAYS'}</Text>
      {forecastData}
    </View>
  );
};

export default ForecastedDaysContainer;
