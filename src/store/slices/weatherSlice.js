import {createSlice} from '@reduxjs/toolkit';
import weatherState from '../states/weatherState';

import {getWeatherWS, getWeatherForecastWS} from '../../api/webService';
import {WEATHER_CONDITIONS} from '../../constants/weatherConstants';
import {convertSpeed, convertTemperature} from '../../helpers/conversionHelper';
import {MEASURE_UNIT} from '../../constants/units';

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
      state.weather = {
        main: {
          ...action.payload.main,
          temp: Math.round(action.payload.main.temp),
          feels: Math.round(action.payload.main.feels_like),
          min: Math.round(action.payload.main.temp_min),
          max: Math.round(action.payload.main.temp_max),
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
          value: action.payload.wind.speed,
          unit: action.payload.unit.speed,
        },
        {
          type: WEATHER_CONDITIONS.HUMIDITY,
          value: `${action.payload.main.humidity}%`,
        },
        {
          type: WEATHER_CONDITIONS.FEEL_TEMP,
          value: Math.round(action.payload.main.feels_like),
          unit: action.payload.unit.tempSymbol,
        },
      ];
    },
    updateDayTime(state, action) {
      state.dayTime = action.payload.map(item => ({
        time: new Date(item.dt_txt).getHours(),
        temp: Math.round(item.main.temp),
        state: item.weather[0].main,
      }));
    },
    updateForecast(state, action) {
      state.forecast = action.payload.map(item => ({
        temp: Math.round(item.main.temp),
        state: item.weather[0].main,
      }));
    },
    convertUnits(state, action) {
      const unit = action.payload;
      const metricToImperial = unit.type === MEASURE_UNIT.IMPERIAL.type;

      state.weather = {
        ...state.weather,
        main: {
          ...state.weather.main,
          temp: Math.round(
            convertTemperature(state.weather.main.temp, metricToImperial),
          ),
          feels: Math.round(
            convertTemperature(state.weather.main.feels_like, metricToImperial),
          ),
          min: Math.round(
            convertTemperature(state.weather.main.min, metricToImperial),
          ),
          max: Math.round(
            convertTemperature(state.weather.main.max, metricToImperial),
          ),
        },
        wind: {
          ...state.weather.wind,
          speed: convertSpeed(state.weather.wind.speed, metricToImperial),
        },
      };

      state.conditions = state.conditions.map(condition => {
        if (condition.type === WEATHER_CONDITIONS.WIND) {
          return {
            ...condition,
            value: convertSpeed(condition.value, metricToImperial),
            unit: unit.speed,
          };
        } else if (condition.type === WEATHER_CONDITIONS.FEEL_TEMP) {
          return {
            ...condition,
            value: convertTemperature(condition.value, metricToImperial),
            unit: unit.tempSymbol,
          };
        }

        return condition;
      });

      state.dayTime = state.dayTime.map(item => ({
        ...item,
        temp: convertTemperature(item.temp, metricToImperial),
      }));

      state.forecast = state.forecast.map(item => ({
        ...item,
        temp: convertTemperature(item.temp, metricToImperial),
      }));
    },
  },
});

export const getCurrentWeather = () => {
  return async (dispatch, getState) => {
    const {unit} = getState().settingsReducer;
    const {currentLocation} = getState().locationsReducer;

    dispatch(WeatherActions.setWeatherLoading(true));

    try {
      const response = await getWeatherWS(
        currentLocation.lat,
        currentLocation.long,
        unit.type,
      );

      response.unit = unit; // inject units

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
    const {unit} = getState().settingsReducer;
    const {currentLocation} = getState().locationsReducer;

    dispatch(WeatherActions.setForecastLoading(true));

    try {
      const response = await getWeatherForecastWS(
        currentLocation.lat,
        currentLocation.long,
        unit.type,
      );

      const today = new Date().getDate();

      const todayData = [];
      const nextDaysData = [];

      let i = 0;
      for (i = 0; i < response.list.length; i++) {
        const date = response.list[i];
        const day = new Date(date.dt_txt).getDate();
        if (day === today) {
          todayData.push(date);
        } else if (day > today) {
          break;
        }
      }

      // get temp at 12:00 for next 5 days
      for (i += 4; i < response.list.length; i++) {
        nextDaysData.push(response.list[i]);
        i += 7;
      }

      dispatch(WeatherActions.updateDayTime(todayData));
      dispatch(WeatherActions.updateForecast(nextDaysData));
      dispatch(WeatherActions.setForecastLoading(false));
    } catch (error) {
      console.log(error);
    }
  };
};

export const WeatherActions = WeatherSlice.actions;

export default WeatherSlice;
