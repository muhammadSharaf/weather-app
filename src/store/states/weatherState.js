import {WEATHER_UNIT} from '../../constants/units';
import {WEATHER_CONDITIONS} from '../../constants/weatherConstants';

const weatherState = {
  unit: WEATHER_UNIT.METRIC,
  isLoadingWeather: false,
  isLoadingForecast: false,
  weather: {},
  conditions: [
    {type: WEATHER_CONDITIONS.CLOUDS},
    {type: WEATHER_CONDITIONS.WIND},
    {type: WEATHER_CONDITIONS.HUMIDITY},
    {type: WEATHER_CONDITIONS.FEEL_TEMP},
  ],
  dayTime: [
    {time: 0},
    {time: 3},
    {time: 6},
    {time: 9},
    {time: 12},
    {time: 15},
    {time: 18},
    {time: 21},
  ],
  forecast: {},
};

export default weatherState;
