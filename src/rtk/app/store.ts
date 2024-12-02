import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { flightsApi } from "../api/flights";
import filterReducer from "../slices/filterSlice";

export const store = configureStore({
	reducer: {
		[flightsApi.reducerPath]: flightsApi.reducer,
		filter: filterReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(flightsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
