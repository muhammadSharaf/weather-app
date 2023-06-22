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
    setTempUnit(state, action) {
      state.unit = action.payload;
    },
    updateCurrentWeather(state, action) {
      console.log('fetched current weather', action.payload);
      state.weather = {
        main: action.payload.main,
        sun: action.payload.sys,
        state: action.payload.weather[0],
        wind: action.payload.wind,
      };
    },
  },
});

// TODO cities slice
export const getCurrentWeather = () => {
  return async (dispatch, getState) => {
    const {unit} = getState().weatherReducer;
    const {currentCity} = getState().citiesReducer;

    dispatch(WeatherActions.setWeatherLoading(true));

    try {
      const response = await getWeather(
        currentCity.lat,
        currentCity.long,
        unit,
      );
      dispatch(WeatherActions.updateCurrentWeather(response));
      dispatch(WeatherActions.setWeatherLoading(false));
    } catch (error) {
      console.log(error);
    }
  };
};

export const WeatherActions = WeatherSlice.actions;

export default WeatherSlice;
