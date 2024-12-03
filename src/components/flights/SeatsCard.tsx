import React from "react";
import { useSelector } from "react-redux";
import Button from "../shared/Button";
import { Seat } from "@/types/flightsTypes";
import Seats from "./Seats";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useBookingMutation } from "../../rtk/api/bookings";
import Cookies from "js-cookie";
import { structureError } from "../../utils/structureError";

const SeatsCard = ({ seats, price }: { seats: Seat[]; price: number }) => {
	const { seatIds, flightId } = useSelector(
		(state: any) => state.selectedSeats
	);
	const [booking, { isLoading, error, data }] = useBookingMutation();

	const navigate = useNavigate();

	const handleBooking = () => {
		if (seatIds.length === 0) {
			toast.error("Please select at least one seat.");
		} else {
			const token = Cookies.get("user-token");

			if (!token) {
				toast.error("Please login first");
				navigate(`/login`);
			} else {
				booking({ seatIds, flightId });
			}
		}
	};

	if (!error && data) navigate(`/booking/${flightId}`);
	if (error) {
		const e = structureError(error);
		toast.error(e.message);
		if ("status" in error) {
			error.status === 401 && navigate(`/login`);
		}
	}

	return (
		<div>
			<div className="flex justify-between items-center">
				<p className="text-lg font-semibold">Seats</p>{" "}
				{isLoading ? (
					<Button onClick={handleBooking} disabled>
						Book
					</Button>
				) : (
					<Button onClick={handleBooking}>Book</Button>
				)}
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
			<div
				aria-disabled={isLoading}
				className={isLoading ? "pointer-events-none opacity-50" : ""}
			>
				<Seats seatsData={seats} />
			</div>
		</div>
	);
};

export default SeatsCard;
