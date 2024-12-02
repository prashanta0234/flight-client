import React from "react";
import { useParams } from "react-router-dom";
import { useGetFlightQuery } from "../rtk/api/flights";
import Loader from "../components/shared/Loader";
import NotFound from "../components/shared/NotFound";
import { dateFormatter } from "../utils/dateFormatter";
import SeatsCard from "../components/flights/SeatsCard";

const FlightDetails = () => {
	const { id: flightId } = useParams<{ id: string }>();

	const { data, error, isLoading } = useGetFlightQuery(flightId as string);

	if (isLoading) return <Loader />;
	if (error) return <NotFound message="Error loading flight details" />;
	if (!data) return <NotFound message="Sorry no flights found" />;

	const {
		airline,
		availability,
		date,
		destination,
		flight_number,
		origin,
		price,
		time,
	} = data.flight;

	return (
		<div className="flex flex-col gap-12">
			<div>
				<h1 className="text-center text-5xl">{airline}</h1>
				<p className="text-center text-slate-500">{flight_number}</p>
			</div>
			<div className="text-center">
				<p className="text-slate-500">
					{date ? dateFormatter(date) : dateFormatter(new Date().toISOString())}
				</p>
				<p className="font-light text-4xl text-slate-500">
					From <span className="text-secondary">{origin.toUpperCase()}</span> to{" "}
					<span className="text-secondary">{destination.toUpperCase()}</span>
				</p>
			</div>
			<div className="text-center">
				<h2 className="text-2xl">Additional info</h2>
				<p>Price per seat: {price}</p>
				<p>Flight time: {time}</p>
				{availability ? (
					<p className="text-green-700">Available</p>
				) : (
					<p className="text-red-700">Not Available</p>
				)}
			</div>
			<SeatsCard price={price} seats={data.seats} />
		</div>
	);
};

export default FlightDetails;
