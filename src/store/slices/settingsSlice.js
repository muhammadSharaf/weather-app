import {createSlice} from '@reduxjs/toolkit';
import settingsState from '../states/settingsState';
import {MEASURE_UNIT} from '../../constants/units';
import {WeatherActions} from './weatherSlice';
import {LocationsActions} from './locationsSlice';

const SettingsSlice = createSlice({
  name: 'settings',
  initialState: settingsState,
  reducers: {
    setUnit(state, action) {
      state.unit =
        action.payload === MEASURE_UNIT.METRIC.type
          ? MEASURE_UNIT.METRIC
          : MEASURE_UNIT.IMPERIAL;
    },
  },
});

export const changeUnit = unit => {
  return dispatch => {
    dispatch(SettingsActions.setUnit(unit));
    dispatch(
      WeatherActions.convertUnits(
        unit === MEASURE_UNIT.METRIC.type
          ? MEASURE_UNIT.METRIC
          : MEASURE_UNIT.IMPERIAL,
      ),
    );
    dispatch(
      LocationsActions.convertUnits(
        unit === MEASURE_UNIT.METRIC.type
          ? MEASURE_UNIT.METRIC
          : MEASURE_UNIT.IMPERIAL,
      ),
    );
  };
};

export const SettingsActions = SettingsSlice.actions;

export default SettingsSlice;
