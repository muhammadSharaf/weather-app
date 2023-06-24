import {createSlice} from '@reduxjs/toolkit';
import locationsState from '../states/locationsState';
import {getLocationWeatherWS} from '../../api/webService';
import {showMsg} from './runTimeSlice';
import {MSG_CONSTANTS} from '../../constants/runTimeConstants';
import Theme from '../../theme/theme';

const LocationsSlice = createSlice({
  name: 'locations',
  initialState: locationsState,
  reducers: {
    addLocation(state, action) {
      console.log('action', action.payload);

      const {name, country, lat, lon: long} = action.payload;
      state.locations = [state.currentLocation, ...state.locations];
      state.currentLocation = {
        name,
        country,
        lat,
        long,
        temp: 0,
      };
    },
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

export const addLocation = location => {
  return dispatch => {
    dispatch(LocationsActions.addLocation(location));
  };
};

export const queryLocation = (location, cb) => {
  return async (dispatch, getState) => {
    const {locations, currentLocation} = getState().locationsReducer;

    try {
      const response = await getLocationWeatherWS(location);

      // Error handling
      if (response?.length > 0) {
        if (
          currentLocation.name === response[0].name &&
          currentLocation.country === response[0].country
        ) {
          return dispatch(
            showMsg({
              title: MSG_CONSTANTS.TITLE.ERROR,
              color: Theme.colors.msg.error,
              msg: 'This is already your current selected location.',
              activeBtnTitle: MSG_CONSTANTS.CONTROLS.OK,
            }),
          );
        }

        const idx = locations.findIndex(item => {
          return (
            item.name === response[0].name &&
            item.country === response[0].country
          );
        });

        if (idx >= 0) {
          return dispatch(
            showMsg({
              title: MSG_CONSTANTS.TITLE.NOTE,
              color: Theme.colors.msg.info,
              msg: 'This location already exist on your recent locations, do you want to use it?',
              activeBtnTitle: MSG_CONSTANTS.CONTROLS.YES,
              passiveBtnTitle: MSG_CONSTANTS.CONTROLS.NO,
              activeCallBack: () => {
                dispatch(LocationsActions.changeCurrentLocation(idx));
                return cb();
              },
            }),
          );
        }
      } else {
        return dispatch(
          showMsg({
            title: MSG_CONSTANTS.TITLE.ERROR,
            color: Theme.colors.msg.error,
            msg: "We couldn't find the location you looking for, please ensure you enter it correctly.",
            activeBtnTitle: MSG_CONSTANTS.CONTROLS.OK,
          }),
        );
      }

      // Success handling
      if (response?.length > 0) {
        const loc = location.replace(/\s/g, ''); //remove spaces
        if (
          loc.toUpperCase() === response[0].name.toUpperCase() ||
          loc.toUpperCase() ===
            `${response[0].name},${response[0].country}`.toUpperCase()
        ) {
          dispatch(addLocation(response[0]));
          return cb();
        } else {
          return dispatch(
            showMsg({
              title: MSG_CONSTANTS.TITLE.ERROR,
              color: Theme.colors.msg.info,
              msg: `We couldn't find the location you looking for, do you mean ${response[0].name}, ${response[0].country}?`,
              activeBtnTitle: MSG_CONSTANTS.CONTROLS.YES,
              passiveBtnTitle: MSG_CONSTANTS.CONTROLS.NO,
              activeCallBack: () => {
                dispatch(addLocation(response[0]));
                cb();
              },
            }),
          );
        }
      }
    } catch (err) {
      console.log('err', err);
    }
  };
};

export const LocationsActions = LocationsSlice.actions;

export default LocationsSlice;
