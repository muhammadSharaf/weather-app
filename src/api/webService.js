import axios from 'axios';
import {API} from './constants';

const ax = axios.create({
  baseURL: API.BASE,
  params: {appid: API.KEY},
});

export const getWeather = async (lat, long, unit) => {
  const response = await ax.get(
    `${API.WEATHER}?lat=${lat}&lon=${long}&units=${unit}`,
  );

  return response;
};

export const getWeatherForecast = async (lat, long, unit) => {
  const response = await ax.get(
    `${API.FORECAST}?lat=${lat}&lon=${long}&units=${unit}`,
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
