import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'mycolor',
  initialState: {
    color: 'red',
  },
  reducers: {
    bgcolorChange: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { bgcolorChange } = counterSlice.actions;

export default counterSlice.reducer;
