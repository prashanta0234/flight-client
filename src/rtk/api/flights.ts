import { Flight, FlightData } from "../../types/flightsTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const flightsApi = createApi({
	reducerPath: "flightsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://flight-server-six.vercel.app/api/",
	}),
	endpoints: (builder) => ({
		getFlights: builder.query<Flight[], Record<string, any>>({
			query: (params) => {
				const queryString = new URLSearchParams(params).toString();
				return `/flights/search?${queryString}`;
			},
			transformResponse: (response: { data: { flights: Flight[] } }) =>
				response.data.flights,
		}),
		getFlight: builder.query<FlightData, Record<string, any>>({
			query: (id) => {
				return `/flights/${id}`;
			},
			transformResponse: (response: { data: FlightData }) => response.data,
		}),
	}),
});

export const { useGetFlightsQuery, useGetFlightQuery } = flightsApi;
