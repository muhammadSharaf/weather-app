import {WEATHER_ICONS} from '../constants/weatherConstants';

export const getWeatherIcon = condition => {
  if (condition in WEATHER_ICONS) {
    return WEATHER_ICONS[condition];
  }

  return WEATHER_ICONS.Clear;
};
