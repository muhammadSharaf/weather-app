import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import HourlyConditionsContainer from './HourlyConditionsContainer';
import {getForecast} from '../../../store/slices/weatherSlice';
import ForecastedDaysContainer from './ForecastedDaysContainer';

const ForecastContainer = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    state => state.weatherReducer.isLoadingForecast,
  );
  const currentLocation = useSelector(
    state => state.locationsReducer.currentLocation,
  );

  useEffect(() => {
    dispatch(getForecast());
  }, [dispatch, currentLocation]);

  return (
    <View>
      <HourlyConditionsContainer isLoading={isLoading} />
      <ForecastedDaysContainer isLoading={isLoading} />
    </View>
  );
};

export default ForecastContainer;
