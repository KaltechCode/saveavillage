import { configureStore } from "@reduxjs/toolkit";
import { volunteerApi } from "./volunteer";

import stepReducer from "@/features/formSteps";

export const store = configureStore({
  reducer: {
    steps: stepReducer,
    [volunteerApi.reducerPath]: volunteerApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(volunteerApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
