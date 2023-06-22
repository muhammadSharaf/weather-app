import {WEATHER_UNIT} from '../../constants/units';

const weatherState = {
  unit: WEATHER_UNIT.C,
  isLoadingWeather: false,
  isLoadingForecast: false,
  weather: {},
  forecast: {},
};

export default weatherState;
