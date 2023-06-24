import {configureStore} from '@reduxjs/toolkit';
import WeatherSlice from './slices/weatherSlice';
import CitiesSlice from './slices/citiesSlice';
import SettingsSlice from './slices/settingsSlice';

const store = configureStore({
  reducer: {
    weatherReducer: WeatherSlice.reducer,
    citiesReducer: CitiesSlice.reducer,
    settingsReducer: SettingsSlice.reducer,
  },
});

export default store;
