import Config from 'react-native-config';

export const API = {
  BASE: Config.API_URL,
  KEY: Config.API_URL_KEY,
  WEATHER_API: Config.WEATHER_API,
  GEO_API: Config.GEO_API,
  WEATHER: '/weather',
  FORECAST: '/forecast',
  GEO: '/direct',
};
