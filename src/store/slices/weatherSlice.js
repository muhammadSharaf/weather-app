import {createSlice} from '@reduxjs/toolkit';
import weatherState from '../states/weatherState';

import {getWeather, getWeatherForecast} from '../../api/webService';
import {WEATHER_CONDITIONS} from '../../constants/weatherConstants';

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
    setUnit(state, action) {
      state.unit = action.payload;
    },
    updateCurrentWeather(state, action) {
      state.weather = {
        main: {
          ...action.payload.main,
          temp: Math.round(action.payload.main.temp),
          feels: `${Math.round(action.payload.main.feels_like)}${state.unit.tempSymbol}`,
          min: `${Math.round(action.payload.main.temp_min)}${state.unit.tempSymbol}`,
          max: `${Math.round(action.payload.main.temp_max)}${state.unit.tempSymbol}`,
        },
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
          value: `${Math.round(action.payload.main.feels_like)}${
            state.unit.tempSymbol
          }`,
        },
      ];
    },
    updateDayTime(state, action) {
      console.log('dayTime', action.payload);
      const today = new Date().getDate();

      state.dayTime = action.payload
        .filter(time => new Date(time.dt_txt).getDate() === today)
        .map(item => ({
          time: new Date(item.dt_txt).getHours(),
          temp: `${Math.round(item.main.temp)}${state.unit.tempSymbol}`,
          state: item.weather[0].main,
        }));
    },
    updateForecast(state, action) {
      console.log('fetched forecast', action.payload);
      state.forecast = action.payload;
    },
  },
});

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

export const getForecast = () => {
  return async (dispatch, getState) => {
    const {unit} = getState().weatherReducer;
    const {currentCity} = getState().citiesReducer;

    dispatch(WeatherActions.setForecastLoading(true));

    try {
      const response = await getWeatherForecast(
        currentCity.lat,
        currentCity.long,
        unit.type,
      );

      dispatch(WeatherActions.updateDayTime(response.list.slice(0, 8)));
      dispatch(WeatherActions.updateForecast(response));
      dispatch(WeatherActions.setForecastLoading(false));
    } catch (error) {
      console.log(error);
    }
  };
};

export const WeatherActions = WeatherSlice.actions;

export default WeatherSlice;
