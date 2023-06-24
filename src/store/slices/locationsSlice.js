import {createSlice} from '@reduxjs/toolkit';
import locationsState from '../states/locationsState';
import {getLocationWeatherWS} from '../../api/webService';

const LocationsSlice = createSlice({
  name: 'locations',
  initialState: locationsState,
  reducers: {
    addLocation(state, action) {},
    removeLocation(state, action) {},
    changeCurrentLocation(state, action) {
      const idx = action.payload;
      const tempLocation = {...state.currentLocation};

      // Add previous location back to recent and remove new current location
      state.currentLocation = state.locations[idx];
      const otherLocations = [...state.locations];
      otherLocations.splice(idx, 1);

      state.locations = [tempLocation, ...otherLocations];
    },
  },
});

export const changeLocation = (name, country) => {
  return (dispatch, getState) => {
    const {locations} = getState().locationsReducer;

    const idx = locations.findIndex(loc => {
      return loc.name === name && loc.country === country;
    });

    dispatch(LocationsActions.changeCurrentLocation(idx));
  };
};

export const queryLocation = location => {
  return async (dispatch, getState) => {
    const {locations} = getState().locationsReducer; // TODO check if already exists

    try {
      const response = await getLocationWeatherWS(location);

      console.log('response', response);
    } catch (err) {
      console.log('err', err);
    }
  };
};

export const LocationsActions = LocationsSlice.actions;

export default LocationsSlice;
