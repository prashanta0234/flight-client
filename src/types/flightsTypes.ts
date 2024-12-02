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
