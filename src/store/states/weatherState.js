import {WEATHER_UNIT} from '../../constants/units';

const weatherState = {
  unit: WEATHER_UNIT.METRIC,
  isLoadingWeather: false,
  isLoadingForecast: false,
  weather: {},
  conditions: [],
  forecast: {},
};

export default weatherState;
