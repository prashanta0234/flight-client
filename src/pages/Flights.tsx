import React from "react";
import FlightCard from "../components/flights/FlightCard";
import { Flight } from "@/types/flightsTypes";
import { useGetFlightsQuery } from "../rtk/api/flights";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../components/shared/SearchBar";
import NotFound from "../components/shared/NotFound";
import Loader from "../components/shared/Loader";
import { dateFormatter } from "../utils/dateFormatter";

const Flights = () => {
	const [searchParams] = useSearchParams();

	const origin = searchParams.get("origin") || "";
	const destination = searchParams.get("destination") || "";
	const date = searchParams.get("date") || "";

	const { isError, isLoading, isFetching, data, isSuccess } =
		useGetFlightsQuery({
			date,
			origin,
			destination,
		});

	let content;
	if (isLoading || isFetching) {
		content = <Loader />;
	} else if (!isError && isSuccess && data?.length > 0) {
		content = (
			<div className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-4">
				{data.map((flight: Flight) => (
					<FlightCard key={flight._id} data={flight} />
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
			<div className="my-6">
				<p className="text-slate-500">
					{date ? dateFormatter(date) : dateFormatter(new Date().toISOString())}
				</p>
				<p className="font-light text-4xl text-slate-500">
					Select your departure flight <br /> from{" "}
					<span className="text-secondary">{origin.toUpperCase()}</span> to{" "}
					<span className="text-secondary">{destination.toUpperCase()}</span>
				</p>
			</div>
			<SearchBar />
			<div>{content}</div>
		</div>
	);
};

export default Flights;
