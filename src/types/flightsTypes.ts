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

export type Seat = {
	_id: string;
	seatNumber: string;
	isBooked: boolean;
	bookedBy: string | null;
	flightId: string;
};

export type FlightData = {
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
	seats: Seat[];
};
