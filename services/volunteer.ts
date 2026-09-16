import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const volunteerApi = createApi({
  reducerPath: "volunteer",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (build) => ({
    addVolunteer: build.mutation({
      query: (body) => ({
        url: "api/volunteer",
        method: "POST",
        body: body,
      }),
    }),
    addJoinUs: build.mutation({
      query: (body) => ({
        url: "api/onboarding",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useAddVolunteerMutation, useAddJoinUsMutation } = volunteerApi;
