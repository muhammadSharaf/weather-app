import {configureStore} from '@reduxjs/toolkit';
import WeatherSlice from './slices/weatherSlice';

const store = configureStore({
  reducer: {
    weatherReducer: WeatherSlice.reducer,
  },
});

export default store;
