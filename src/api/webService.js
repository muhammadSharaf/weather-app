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

  return response.data;
};

export const getWeatherForecastWS = async (lat, long, unit) => {
  const response = await ax.get(
    `${API.WEATHER_API}${API.FORECAST}?lat=${lat}&lon=${long}&units=${unit}`,
  );

  return response.data;
};

export const getLocationWS = async (location, unit) => {
  const response = await ax.get(
    `${API.GEO_API}${API.GEO}?q=${location}&units=${unit}`,
  );

  return response.data;
};

export const getLocationByCordWS = async (lat, long) => {
  const response = await ax.get(
    `${API.GEO_API}${API.GEO_CORD}?lat=${lat}&lon=${long}`,
  );

  return response.data;
};
