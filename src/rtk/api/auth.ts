import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface LoginResponse {
	token: string;
}

interface RegistrationResponse {
	token: string;
}

interface LoginCredentials {
	email: string;
	password: string;
}

interface RegistrationData {
	name: string;
	email: string;
	password: string;
	phone: string;
	gender: string;
}

export const authApi = createApi({
	reducerPath: "authApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://flight-server-six.vercel.app/api/",
	}),
	endpoints: (builder) => ({
		login: builder.mutation<LoginResponse, LoginCredentials>({
			query: (credentials) => ({
				url: "/login",
				method: "POST",
				body: credentials,
			}),
			transformResponse: (response: { data: { token: string } }) =>
				response.data,
		}),

		signup: builder.mutation<RegistrationResponse, RegistrationData>({
			query: (registrationData) => ({
				url: "/register",
				method: "POST",
				body: registrationData,
			}),
			transformResponse: (response: { data: { token: string } }) =>
				response.data,
		}),
	}),
});

export const { useLoginMutation, useSignupMutation } = authApi;
