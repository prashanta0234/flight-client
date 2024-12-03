import { configureStore } from "@reduxjs/toolkit";
import { flightsApi } from "../api/flights";
import selectedSeatsReducer from "../slices/selectSeats";
import userLoginSliceReducer from "../slices/userLogin";

import { authApi } from "../api/auth";
import { bookingApi } from "../api/bookings";

export const store = configureStore({
	reducer: {
		[flightsApi.reducerPath]: flightsApi.reducer,
		[authApi.reducerPath]: authApi.reducer,
		selectedSeats: selectedSeatsReducer,
		userLoginToken: userLoginSliceReducer,
		[bookingApi.reducerPath]: bookingApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(flightsApi.middleware)
			.concat(authApi.middleware)
			.concat(bookingApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
