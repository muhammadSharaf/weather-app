import {createSlice} from '@reduxjs/toolkit';
import weatherState from '../states/weatherState';

import {getWeather, getWeatherForecast} from '../../api/webService';
import {WEATHER_CONDITIONS} from '../../constants/weatherConstants';
import { msToHM } from "../../helpers/conversionHelper";

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
    updateCurrentWeatherConditions(state, action) {
      state.conditions = [
        {
          type: WEATHER_CONDITIONS.CLOUDS,
          value: `${action.payload.clouds.all}%`,
        },
        {
          type: WEATHER_CONDITIONS.WIND,
          value: `${action.payload.wind.speed} ${state.unit.speed}`,
        },
        {
          type: WEATHER_CONDITIONS.HUMIDITY,
          value: `${action.payload.main.humidity}%`,
        },
        {
          type: WEATHER_CONDITIONS.FEEL_TEMP,
          value: `${action.payload.main.feels_like} ${state.unit.temperature}`,
        },
      ];
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
        unit.type,
      );
      dispatch(WeatherActions.updateCurrentWeather(response));
      dispatch(WeatherActions.updateCurrentWeatherConditions(response));
      dispatch(WeatherActions.setWeatherLoading(false));
    } catch (error) {
      console.log(error);
    }
  };
};

export const WeatherActions = WeatherSlice.actions;

export default WeatherSlice;
