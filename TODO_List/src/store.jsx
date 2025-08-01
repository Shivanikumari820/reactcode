import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "./todoSlice.jsx"

const store= configureStore({

    reducer:{
        todo :todoReducer
    }
});

export default store;