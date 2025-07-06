// features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    color: 'red',
  },
  reducers: {
    bgcolorChange: (state) => {
      state.color = 'green';
    },
  },
});

export const { bgcolorChange } = counterSlice.actions;

export default counterSlice.reducer;
