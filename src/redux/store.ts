import { combineReducers, configureStore } from "@reduxjs/toolkit";
import workoutSlice from "./workoutSlice";

const rootReducer = combineReducers({
  workout: workoutSlice
})


export const store = configureStore({
  reducer: rootReducer
})