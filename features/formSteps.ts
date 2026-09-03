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
      state.step += 1;
    },

    prevStep: (state) => {
      state.step -= 1;
    },
    setStep: (state, action: PayloadAction<number>) => {
      if (
        action.payload >= 1 &&
        action.payload <= state.StepperState.totalSteps
      ) {
        state.StepperState.currentStep = action.payload;
      }
    },
  },
});

export const { nextStep, prevStep, setStep } = stepsSlice.actions;

export default stepsSlice.reducer;
