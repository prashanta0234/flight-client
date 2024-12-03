import { useUserBookingsQuery } from "../rtk/api/bookings";
import React from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { jwtType } from "@/types/jwtType";
import Loader from "../components/shared/Loader";
import { Booking } from "@/types/bookingsTypes";
import NotFound from "../components/shared/NotFound";
import BookingCard from "../components/bookings/BookingCard";
import { useNavigate } from "react-router-dom";

const UserFlights = () => {
	const token = Cookies.get("user-token");
	const decoded = jwtDecode<jwtType>(token as string);

	const { data, isLoading, isFetching, isError, isSuccess, error } =
		useUserBookingsQuery(decoded.id);
	const navigate = useNavigate();

	if (error) {
		if ("status" in error) {
			error.status === 401 && navigate(`/login`);
		}
	}

	let content;
	if (isLoading || isFetching) {
		content = <Loader />;
	} else if (!isError && isSuccess && data?.length > 0) {
		content = (
			<div className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-4">
				{data.map((flight: Booking) => (
					<BookingCard key={flight._id} data={flight} />
				))}
			</div>
		);
	} else if (!isError && data?.length === 0) {
		content = (
			<NotFound message="No flights found! Please modify your search." />
		);
	} else {
		content = <NotFound message="An error occurred while fetching flights." />;
	}
	return (
		<div>
			<h1 className="text-center font-semibold text-2xl">
				Your Booked Flights
			</h1>
			<div>{content}</div>
		</div>
	);
};

export default UserFlights;
