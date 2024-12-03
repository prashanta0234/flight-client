import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import registrationSchema from "../validation-schemas/registrationSchema";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { structureError } from "../utils/structureError";
import { useSignupMutation } from "../rtk/api/auth";
import { Spinner } from "flowbite-react";
import { useDispatch } from "react-redux";
import { setToken } from "../rtk/slices/userLogin";

type FormData = z.infer<typeof registrationSchema>;

const RegistrationForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(registrationSchema),
		mode: "onTouched",
	});
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [signup, { isLoading, error, data }] = useSignupMutation();
	const onSubmit = (data: FormData) => {
		signup(data);
	};

	if (error) {
		const e = structureError(error);
		toast.error(e.message);
	}

	if (data) {
		Cookies.set("user-token", data.token);
		dispatch(setToken(data.token));

		toast.success("Login successful!");
		navigate("/");
	}

	return (
		<div className="flex justify-center items-center h-screen bg-gray-100">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="bg-white p-6 rounded shadow-md w-full max-w-md"
			>
				<h2 className="text-2xl font-bold text-center mb-4">
					Create new account
				</h2>

				{/* Name Field */}
				<div className="mb-4">
					<label className="block text-gray-700">Name</label>
					<input
						{...register("name")}
						type="text"
						className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
					/>
					{errors.name && (
						<span className="text-red-500 text-sm">{errors.name.message}</span>
					)}
				</div>

				{/* Email Field */}
				<div className="mb-4">
					<label className="block text-gray-700">Email</label>
					<input
						{...register("email")}
						type="email"
						className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
					/>
					{errors.email && (
						<span className="text-red-500 text-sm">{errors.email.message}</span>
					)}
				</div>

				{/* Password Field */}
				<div className="mb-4">
					<label className="block text-gray-700">Password</label>
					<input
						{...register("password")}
						type="password"
						className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
					/>
					{errors.password && (
						<span className="text-red-500 text-sm">
							{errors.password.message}
						</span>
					)}
				</div>

				{/* Phone Field */}
				<div className="mb-4">
					<label className="block text-gray-700">Phone</label>
					<input
						{...register("phone")}
						type="tel"
						className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
					/>
					{errors.phone && (
						<span className="text-red-500 text-sm">{errors.phone.message}</span>
					)}
				</div>

				{/* Gender Field */}
				<div className="mb-4">
					<label className="block text-gray-700">Gender</label>
					<select
						{...register("gender")}
						className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-200"
					>
						<option value="">Select</option>
						<option value="Male">Male</option>
						<option value="Female">Female</option>
					</select>
					{errors.gender && (
						<span className="text-red-500 text-sm">
							{errors.gender.message}
						</span>
					)}
				</div>

				<button
					type="submit"
					className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
				>
					{isLoading ? <Spinner /> : "Create"}
				</button>
				<p className="text-center mt-4 text-sm text-gray-600">
					Already have an account?{" "}
					<Link to="/login" className="text-blue-500 hover:underline">
						Login here
					</Link>
				</p>
			</form>
		</div>
	);
};

export default RegistrationForm;
