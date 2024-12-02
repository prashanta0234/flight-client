import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	setFlightId,
	setSelectedSeats,
	toggleSeatSelection,
} from "../../rtk/slices/selectSeats";
import { Seat } from "@/types/flightsTypes";

const Seats = ({ seatsData }: { seatsData: Seat[] }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (seatsData.length > 0) {
			dispatch(setFlightId(seatsData[0].flightId));
		}
		dispatch(setSelectedSeats([]));
	}, [dispatch, seatsData]);

	const { seatIds } = useSelector((state: any) => state.selectedSeats);

	const handleSeatClick = (seatId: string) => {
		const seat = seatsData.find((s) => s._id === seatId);
		if (seat && !seat.isBooked) {
			dispatch(toggleSeatSelection(seatId));
		}
	};

	return (
		<div className="p-4">
			<h2 className="text-center text-2xl mb-4">Select Your Seats</h2>
			<div className="grid grid-cols-3 gap-4">
				{seatsData.map((seat) => (
					<div
						key={seat._id}
						onClick={() => handleSeatClick(seat._id)}
						className={`${
							seat.isBooked
								? "bg-red-500 text-white cursor-not-allowed"
								: seatIds.includes(seat._id)
								? "bg-blue-500 text-white"
								: "bg-gray-200"
						} flex justify-center items-center p-4 cursor-pointer rounded-md`}
					>
						{seat.seatNumber}
					</div>
				))}
			</div>
		</div>
	);
};

export default Seats;
