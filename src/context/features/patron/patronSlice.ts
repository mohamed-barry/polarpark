import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {TDC} from '@app/api/model/tdc';

export interface PatronState {
  active: Array<TDC.LineItem>;
  inactive: Array<TDC.LineItem>;
}

const initialState: PatronState = {
  active: [],
  inactive: [],
};

export const patronSlice = createSlice({
  name: 'patron',
  initialState,
  reducers: {
    setActive: (state, action: PayloadAction<Array<TDC.LineItem>>) => {
      state.active = action.payload;
    },
    setInactive: (state, action: PayloadAction<Array<TDC.LineItem>>) => {
      state.inactive = action.payload;
    },
  },
});

export const {setActive, setInactive} = patronSlice.actions;

export default patronSlice.reducer;
