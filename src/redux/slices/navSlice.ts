import { createSlice } from '@reduxjs/toolkit';
import { NavInterface } from '../../types';
import { RootState } from '../store';

const initialState: NavInterface = {
  destination: null,
  origin: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: 'navSlice',
  initialState,
  reducers: {
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

//* export reducers
export default navSlice.reducer;
//* export actions
export const { setDestination, setOrigin, setTravelTimeInformation } =
  navSlice.actions;

//*selectors
export const selectOrigin = (state: RootState) => state.navSlice.origin;
export const selectDestination = (state: RootState) =>
  state.navSlice.destination;
export const selectTravelTimeInformation = (state: RootState) =>
  state.navSlice.travelTimeInformation;
