import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FilterState = {
	origin: string;
	destination: string;
	date: Date | null;
};

const initialState: FilterState = {
	origin: "",
	destination: "",
	date: null,
};

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		setOrigin: (state, action: PayloadAction<string>) => {
			state.origin = action.payload;
		},
		setDestination: (state, action: PayloadAction<string>) => {
			state.destination = action.payload;
		},
		setDate: (state, action: PayloadAction<Date | null>) => {
			state.date = action.payload;
		},
		resetFilters: () => initialState,
	},
});

export const { setOrigin, setDestination, setDate, resetFilters } =
	filterSlice.actions;

export default filterSlice.reducer;
