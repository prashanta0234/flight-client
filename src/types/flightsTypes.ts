export interface Flight {
	_id: string;
	airline: string;
	flight_number: string;
	origin: string;
	destination: string;
	date: string;
	time: string;
	price: number;
}

export interface FlightsResponse {
	flights: Flight[];
}

export type FlightData = {
	data: {
		flight: {
			_id: string;
			airline: string;
			flight_number: string;
			origin: string;
			destination: string;
			date: string;
			time: string;
			price: number;
			availability: boolean;
		};
		seats: Array<{
			_id: string;
			flightId: string;
			seatNumber: string;
			isBooked: boolean;
			bookedBy: string | null;
		}>;
	};
};
