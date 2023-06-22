import {createSlice} from '@reduxjs/toolkit';
import weatherState from '../states/weather';

import {getWeather, getWeatherForecast} from '../../api/webService';

const WeatherSlice = createSlice({
  name: 'weather',
  initialState: weatherState,
  reducers: {
    getCurrentWeather(state) {

    },
  },
});

export const WeatherActions = WeatherSlice.actions;

export default WeatherSlice;
