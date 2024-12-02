import React from "react";
import { useSelector } from "react-redux";
import Button from "../shared/Button";
import { Seat } from "@/types/flightsTypes";
import Seats from "./Seats";

const SeatsCard = ({ seats, price }: { seats: Seat[]; price: number }) => {
	const { seatIds } = useSelector((state: any) => state.selectedSeats);

	return (
		<div>
			<div className="flex justify-between items-center">
				<p className="text-lg font-semibold">Seats</p> <Button>Book</Button>
			</div>
			<div className="flex justify-between mt-4">
				<div className="flex flex-col gap-2">
					<p className="flex items-center gap-4">
						<div className="w-6 h-6 bg-red-500"></div> Unavailable
					</p>
					<p className="flex items-center gap-4">
						<div className="w-6 h-6 bg-blue-500"></div> Your selection
					</p>
					<p className="flex items-center gap-4">
						<div className="w-6 h-6 bg-gray-200"></div> Available
					</p>
				</div>
				<div className="mt-4">
					<h3 className="text-lg font-semibold">Selected Seats:</h3>
					<ul className="flex gap-2">
						{seatIds.map((seatId: string) => (
							<li key={seatId} className="text-sm">
								{seats.find((seat: Seat) => seat._id === seatId)?.seatNumber}
							</li>
						))}
					</ul>
					<div>
						<h3 className="text-lg font-semibold">
							Price: {price * seatIds.length}
						</h3>
					</div>
				</div>
			</div>
			<Seats seatsData={seats} />
		</div>
	);
};

export default SeatsCard;
