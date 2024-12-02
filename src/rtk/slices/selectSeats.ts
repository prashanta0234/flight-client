import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SelectedSeatsState = {
	flightId: string | null;
	seatIds: string[];
};

const initialState: SelectedSeatsState = {
	flightId: null,
	seatIds: [],
};

const selectedSeatsSlice = createSlice({
	name: "selectedSeats",
	initialState,
	reducers: {
		setFlightId: (state, action: PayloadAction<string>) => {
			state.flightId = action.payload;
		},
		setSelectedSeats: (state, action: PayloadAction<string[]>) => {
			state.seatIds = action.payload;
		},
		toggleSeatSelection: (state, action: PayloadAction<string>) => {
			const seatId = action.payload;
			if (state.seatIds.includes(seatId)) {
				state.seatIds = state.seatIds.filter((id) => id !== seatId);
			} else {
				state.seatIds.push(seatId);
			}
		},
		clearSelection: (state) => {
			state.flightId = null;
			state.seatIds = [];
		},
	},
});

export const {
	setFlightId,
	setSelectedSeats,
	toggleSeatSelection,
	clearSelection,
} = selectedSeatsSlice.actions;

export default selectedSeatsSlice.reducer;
