import { Flight } from "@/types/flightsTypes";
import { dateFormatter } from "../../utils/dateFormatter";
import React from "react";

const BasicFlightDetails = ({ data }: { data: Flight }) => {
	const {
		airline,
		availability,
		date,
		destination,
		flight_number,
		origin,
		price,
		time,
	} = data;
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
		</div>
	);
};

export default BasicFlightDetails;
