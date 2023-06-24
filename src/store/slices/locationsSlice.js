import {createSlice} from '@reduxjs/toolkit';
import locationsState from '../states/locationsState';

const LocationsSlice = createSlice({
  name: 'locations',
  initialState: locationsState,
  reducers: {
    addLocation(state, action) {},
    removeLocation(state, action) {},
    changeCurrentLocation(state, action) {},
  },
});

export const LocationsActions = LocationsSlice.actions;

export default LocationsSlice;
