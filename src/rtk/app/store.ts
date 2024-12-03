import { configureStore } from "@reduxjs/toolkit";
import { flightsApi } from "../api/flights";
import selectedSeatsReducer from "../slices/selectSeats";
import userLoginSliceReducer from "../slices/userLogin";

import { authApi } from "../api/auth";

export const store = configureStore({
	reducer: {
		[flightsApi.reducerPath]: flightsApi.reducer,
		[authApi.reducerPath]: authApi.reducer,
		selectedSeats: selectedSeatsReducer,
		userLoginToken: userLoginSliceReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(flightsApi.middleware)
			.concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
