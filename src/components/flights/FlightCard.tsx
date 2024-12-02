import { Flight } from "@/types/flightsTypes";
import React from "react";
import Button from "../shared/Button";
import { dateFormatter } from "../../utils/dateFormatter";
import { useNavigate } from "react-router-dom";

const FlightCard = ({ data }: { data: Flight }) => {
	const {
		airline,
		flight_number,
		origin,
		destination,
		price,
		time,
		date,
		_id,
	} = data;

	const navigate = useNavigate();

	const handleReadMore = () => {
		navigate(`/flights/${_id}`); // Navigate to the specific flight route
	};
	return (
		<div className="w-full">
			<div className="max-w-sm bg-white shadow-md rounded-md p-4 flex flex-col gap-2">
				<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{airline}
				</h5>
				<h6 className="text-xl">Flight no: {flight_number}</h6>
				<p>
					Route: <span className="font-semibold">{origin}</span> to{" "}
					<span className="font-semibold">{destination}</span>
				</p>
				<p>
					Price per ticket: <span className="font-semibold">{price}</span>
				</p>
				<p>
					Flying Time: <span className="font-semibold">{time}</span>
				</p>
				<p className="font-normal text-gray-700 dark:text-gray-400">
					Date: <span className="font-semibold">{dateFormatter(date)}</span>
				</p>
				<Button
					className="flex items-center justify-center"
					onClick={handleReadMore}
				>
					Read more
					<svg
						className="-mr-1 ml-2 h-4 w-4"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</Button>
			</div>
		</div>
	);
};

export default FlightCard;
