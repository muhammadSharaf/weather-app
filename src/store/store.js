import {configureStore} from '@reduxjs/toolkit';
import WeatherSlice from './slices/weatherSlice';
import CitiesSlice from './slices/citiesSlice';

const store = configureStore({
  reducer: {
    weatherReducer: WeatherSlice.reducer,
    citiesReducer: CitiesSlice.reducer,
  },
});

export default store;
