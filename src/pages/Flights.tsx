import React from "react";
import FlightCard from "../components/flights/FlightCard";
import { Flight } from "@/types/flightsTypes";
import { useGetFlightsQuery } from "../rtk/api/flights";
import { useSelector } from "react-redux";
import { RootState } from "../rtk/app/store";
import SearchBar from "../components/shared/SearchBar";
import NotFound from "../components/shared/NotFound";
import Loader from "../components/shared/Loader";

const Flights = () => {
	const { origin, destination, date } = useSelector(
		(state: RootState) => state.filter
	);
	const { isError, isLoading, data, isSuccess } = useGetFlightsQuery({
		date,
		origin,
		destination,
	});

	let content;
	if (isLoading) {
		content = <Loader />;
	} else if (!isError && !isLoading && isSuccess && data?.length > 0) {
		content = data.map((flight: Flight) => (
			<FlightCard key={flight._id} data={flight} />
		));
	} else if (!isError && data?.length === 0) {
		content = (
			<NotFound message="No flights found! Please modify your search." />
		);
	} else {
		content = <NotFound message="An error occurred while fetching flights" />;
	}

	return (
		<div>
			<SearchBar />
			<div>{content}</div>
		</div>
	);
};

export default Flights;
