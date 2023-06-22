import {createSlice} from '@reduxjs/toolkit';
import weatherState from '../states/weatherState';

import {getWeather, getWeatherForecast} from '../../api/webService';

const WeatherSlice = createSlice({
  name: 'weather',
  initialState: weatherState,
  reducers: {
    setWeatherLoading(state, action) {
      state.isLoadingWeather = action.payload;
    },
    setForecastLoading(state, action) {
      state.isLoadingForecast = action.payload;
    },
    updateCurrentWeather(state, action) {
      state.weather = action.payload;
    },
  },
});

// TODO cities slice
export const getCurrentWeather = () => {
  return async dispatch => {
    dispatch(WeatherActions.setWeatherLoading(true));

    try {
      const response = await getWeather(44.34, 10.99);
      console.log('redux', response);
      dispatch(WeatherActions.updateCurrentWeather(response));
      dispatch(WeatherActions.setWeatherLoading(false));
    } catch (error) {
      console.log(error);
    }
  };
};

export const WeatherActions = WeatherSlice.actions;

export default WeatherSlice;
