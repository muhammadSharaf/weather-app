import {WEATHER_ICONS} from '../constants/weatherConstants';

export const getWeatherIcon = condition => {
  return WEATHER_ICONS[condition];
};
