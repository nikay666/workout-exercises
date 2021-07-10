import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IWorkoutState } from "../types/state";

const workoutSlice = createSlice({
  name: "wourkout",
  initialState: {
    wourkout: []
  } as IWorkoutState,
  reducers: {
    addWorkout(state, action: PayloadAction<object>) {
      state.wourkout.push(action.payload)
    },
    removeWorkout(state, action) {
      state.wourkout.filter(el => el === action.payload)
    }
  }
})

export default workoutSlice.reducer
export const {addWorkout, removeWorkout} = workoutSlice.actions