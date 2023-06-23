import React, {useEffect} from 'react';
import {View} from 'react-native';
import HourlyConditionsContainer from './HourlyConditionsContainer';
import {useDispatch, useSelector} from 'react-redux';
import {getForecast} from '../../../store/slices/weatherSlice';

const ForecastContainer = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(
    state => state.weatherReducer.isLoadingForecast,
  );

  useEffect(() => {
    dispatch(getForecast());
  }, [dispatch]);

  return (
    <View>
      <HourlyConditionsContainer />
    </View>
  );
};

export default ForecastContainer;
