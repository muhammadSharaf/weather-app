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

  console.log('weather', response);

  return response;

  // if (response.data.meta.msg === 'OK')
  //   return response.data.data.map(el => {
  //     return {name: el.name, image: el.gif.images.fixed_height_downsampled.url};
  //   });
  // else throw new Error('Fetching data failed');
};

export const getWeatherForecast = async (lat, long, unit) => {
  const response = await ax.get(
    `${API.FORECAST}?lat=${lat}&lon=${long}&units=${unit}`,
  );

  console.log('forecast', response);

  return response;

  // if (response.data.meta.msg === 'OK')
  //   return response.data.data.map(el => {
  //     return {name: el.name, image: el.gif.images.fixed_height_downsampled.url};
  //   });
  // else throw new Error('Fetching data failed');
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
