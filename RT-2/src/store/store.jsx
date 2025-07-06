// store/store.jsx
import { configureStore } from '@reduxjs/toolkit'
import myReducer from '../features/counterSlice'

export const store = configureStore({
  reducer: {
    mycolor: myReducer,
  },
});

//steps:
// create store
// wrap app component under Provider
// create Slice
// register reducer in store