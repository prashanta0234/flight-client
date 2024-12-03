import { Booking, SelectedSeatsState } from "@/types/bookingsTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

type Response = {
	message: string;
};

export const bookingApi = createApi({
	reducerPath: "bookingApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://flight-server-six.vercel.app/api/",
		prepareHeaders: (headers) => {
			const token = Cookies.get("user-token");

			if (token) {
				headers.set("Authorization", `Bearer ${token}`);
			}

			return headers;
		},
	}),
	tagTypes: ["Flight", "Booking"],

	endpoints: (builder) => ({
		booking: builder.mutation<Response, SelectedSeatsState>({
			query: (payload) => ({
				url: "/bookings",
				method: "POST",
				body: payload,
			}),
			transformResponse: (response: { data: { message: string } }) =>
				response.data,
		}),
		confirmPayment: builder.mutation<Response, SelectedSeatsState>({
			query: (payload) => ({
				url: "/bookings/confirm",
				method: "POST",
				body: payload,
			}),
			transformResponse: (response: { data: { message: string } }) =>
				response.data,
			invalidatesTags: ["Flight", "Booking"],
		}),
		userBookings: builder.query<Booking[], string>({
			query: (id) => {
				return `/bookings/user/${id}`;
			},
			transformResponse: (response: { data: Booking[] }) => response.data,
			providesTags: ["Booking"],
		}),
	}),
});

export const {
	useBookingMutation,
	useConfirmPaymentMutation,
	useUserBookingsQuery,
} = bookingApi;
