import {createSlice} from '@reduxjs/toolkit';
import runTimeState from '../states/runTimeState';

const RunTimeSlice = createSlice({
  name: 'runtime',
  initialState: runTimeState,
  reducers: {
    setMsg(state, action) {
      state.msg = {
        ...state.msg,
        ...action.payload,
        isVisible: true,
      };
    },
    clearMsg(state) {
      state.msg = runTimeState.msg;
    },
  },
});

export const showMsg = props => {
  return dispatch => {
    dispatch(RunTimeActions.setMsg(props));
  };
};

export const clearMsg = () => {
  return dispatch => {
    dispatch(RunTimeActions.clearMsg());
  };
};

export const RunTimeActions = RunTimeSlice.actions;

export default RunTimeSlice;
