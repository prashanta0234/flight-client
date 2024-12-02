import { configureStore } from "@reduxjs/toolkit";
import { flightsApi } from "../api/flights";
import selectedSeatsReducer from "../slices/selectSeats";

export const store = configureStore({
	reducer: {
		[flightsApi.reducerPath]: flightsApi.reducer,
		selectedSeats: selectedSeatsReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(flightsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
