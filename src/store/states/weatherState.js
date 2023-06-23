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
  dayTime: [],
  forecast: {},
};

export default weatherState;
