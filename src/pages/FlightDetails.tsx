import React from "react";
import { useParams } from "react-router-dom";
import { useGetFlightQuery } from "../rtk/api/flights";
import Loader from "../components/shared/Loader";
import NotFound from "../components/shared/NotFound";
import SeatsCard from "../components/flights/SeatsCard";
import BasicFlightDetails from "../components/shared/BasicFlightDetails";

const FlightDetails = () => {
	const { id: flightId } = useParams<{ id: string }>();

	const { data, error, isLoading } = useGetFlightQuery(flightId as string);

	if (isLoading) return <Loader />;
	if (error) return <NotFound message="Error loading flight details" />;
	if (!data) return <NotFound message="Sorry no flights found" />;

	const { price } = data.flight;

	return (
		<div className="flex flex-col gap-12">
			<BasicFlightDetails data={data.flight} />

			<SeatsCard price={price} seats={data.seats} />
		</div>
	);
};

export default FlightDetails;
