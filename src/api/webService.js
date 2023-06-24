import axios from 'axios';
import {API} from './constants';

const ax = axios.create({
  baseURL: API.BASE,
  params: {appid: API.KEY},
});

export const getWeatherWS = async (lat, long, unit) => {
  const response = await ax.get(
    `${API.WEATHER_API}${API.WEATHER}?lat=${lat}&lon=${long}&units=${unit}`,
  );

  return response;
};

export const getWeatherForecastWS = async (lat, long, unit) => {
  const response = await ax.get(
    `${API.WEATHER_API}${API.FORECAST}?lat=${lat}&lon=${long}&units=${unit}`,
  );

  return response;
};

export const getLocationWeatherWS = async (location, unit) => {
  const response = await ax.get(
    `${API.GEO_API}${API.GEO}?q=${location}&units=${unit}`,
  );

  return response;
};

ax.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    console.log('res', response);
    return response.data;
  },
  err => {
    console.log('err', err);
  },
);
