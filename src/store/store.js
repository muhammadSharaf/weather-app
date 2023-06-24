import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';

import WeatherSlice from './slices/weatherSlice';
import LocationsSlice from './slices/locationsSlice';
import SettingsSlice from './slices/settingsSlice';

const reducers = combineReducers({
  weatherReducer: WeatherSlice.reducer,
  locationsReducer: LocationsSlice.reducer,
  settingsReducer: SettingsSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['settingsReducer', 'locationsReducer'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;
