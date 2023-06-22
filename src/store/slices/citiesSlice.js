import {createSlice} from '@reduxjs/toolkit';
import citiesState from '../states/citiesState';

const CitiesSlice = createSlice({
  name: 'cities',
  initialState: citiesState,
  reducers: {
    addCity(state, action) {},
    removeCity(state, action) {},
    changeCurrentCity(state, action) {},
  },
});

export const CitiesActions = CitiesSlice.actions;

export default CitiesSlice;
