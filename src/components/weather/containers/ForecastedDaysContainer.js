import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles/forecastedDaysContainer.style';
import ForecastedDay from '../forecastedDay';
import {useSelector, useStore} from 'react-redux';

const ForecastedDaysContainer = () => {
  const unit = useStore().getState().settingsReducer.unit;
  const forecast = useSelector(state => state.weatherReducer.forecast);
  const weekDay = new Date().getDay();

  const forecastData = forecast.map((day, index) => {
    return (
      <ForecastedDay
        key={index}
        dayIdx={(index + weekDay + 1) % 7}
        day={day}
        unit={unit}
      />
    );
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{`NEXT ${forecast.length} DAYS`}</Text>
      {forecastData}
    </View>
  );
};

export default ForecastedDaysContainer;
