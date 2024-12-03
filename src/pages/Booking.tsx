import { useSelector } from "react-redux";
import BasicFlightDetails from "../components/shared/BasicFlightDetails";
import Loader from "../components/shared/Loader";
import NotFound from "../components/shared/NotFound";
import { useGetFlightQuery } from "../rtk/api/flights";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Seat } from "@/types/flightsTypes";
import Button from "../components/shared/Button";
import { useConfirmPaymentMutation } from "../rtk/api/bookings";
import { structureError } from "../utils/structureError";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { clearSelection } from "../rtk/slices/selectSeats";

const Booking = () => {
	const { id: flightId } = useParams<{ id: string }>();
	const { seatIds } = useSelector((state: any) => state.selectedSeats);
	const [
		confirmPayment,
		{ isLoading: bookngLoading, error: bookingError, data: bookingData },
	] = useConfirmPaymentMutation();

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { data, error, isLoading } = useGetFlightQuery(flightId as string);

	if (isLoading) return <Loader />;
	if (error) return <NotFound message="Error loading flight details" />;
	if (!data) return <NotFound message="Sorry no flights found" />;

	const handleMakePayment = () => {
		confirmPayment({ seatIds, flightId });
		dispatch(clearSelection());
	};
	if (!error && bookingData) {
		toast.success("Payment success!");
		navigate("/user/booking");
	}
	if (bookingError) {
		const e = structureError(bookingError);
		toast.error(e.message);
		if ("status" in bookingError) {
			bookingError.status === 401 && navigate(`/login`);
		}
	}

	return (
		<div className="flex flex-col gap-4">
			<BasicFlightDetails data={data.flight} />
			<p className="text-center text-red-500">Please don`t refresh this page</p>
			<div className="mt-4">
				<h3 className="text-lg font-semibold">Your Selected Seats:</h3>
				<ul className="flex gap-2"></ul>
				<div className="grid grid-cols-3 gap-4">
					{seatIds.map((seatId: string) => (
						<div
							key={seatId}
							className="text-sm w-full flex justify-center items-center p-4 rounded-md bg-blue-500 text-white"
						>
							{data.seats.find((seat: Seat) => seat._id === seatId)?.seatNumber}
						</div>
					))}
				</div>
				<div>
					<h3 className="text-lg font-semibold">
						Total Price: {data.flight.price * seatIds.length}
					</h3>
				</div>
			</div>
			<div className="flex justify-center w-full">
				<Button onClick={handleMakePayment} disabled={bookngLoading}>
					Make payment
				</Button>
			</div>
		</div>
	);
};

export default Booking;
