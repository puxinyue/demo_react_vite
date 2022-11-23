import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice'

export const store = configureStore({
  reducer: {
    // counter 即为模块名
    counter: counterReducer
  }
})