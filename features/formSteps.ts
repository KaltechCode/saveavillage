import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const stepsSlice = createSlice({
  name: "steps",
  initialState: {
    step: 1,
    StepperState: {
      currentStep: 1,
      totalSteps: 6,
    },
  },
  reducers: {
    nextStep: (state) => {
      if (state.step < state.StepperState.totalSteps) {
        state.step += 1;
      }
    },

    prevStep: (state) => {
      if (state.step > 1) {
        state.step -= 1;
      }
    },
    setStep: (state, action: PayloadAction<number>) => {
      if (
        action.payload >= 1 &&
        action.payload <= state.StepperState.totalSteps
      ) {
        state.step = action.payload;
      }
    },
    setTotalSteps: (state, action: PayloadAction<number>) => {
      state.StepperState.totalSteps = action.payload;
      if (state.step > action.payload) {
        state.step = action.payload;
      }
    },
  },
});

export const { nextStep, prevStep, setStep, setTotalSteps } =
  stepsSlice.actions;

export default stepsSlice.reducer;
