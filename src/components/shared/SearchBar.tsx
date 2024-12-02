import React from "react";
import { useForm, Controller } from "react-hook-form";
import SearchableSelect from "./SelectWithSearch";
import { countries } from "../../utils/countriesData";
import { Datepicker } from "flowbite-react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import {
	setDate,
	setDestination,
	setOrigin,
} from "../../rtk/slices/filterSlice";
import { useNavigate } from "react-router-dom";

type FormData = {
	origin: string;
	destination: string;
	date: Date | null;
};

const SearchBar = () => {
	const dispatch = useDispatch();

	const { control, handleSubmit, register } = useForm<FormData>({
		defaultValues: {
			origin: "",
			destination: "",
			date: null,
		},
	});
	let navigate = useNavigate();

	const onSubmit = (data: FormData) => {
		dispatch(setOrigin(data.origin));
		dispatch(setDestination(data.destination));

		dispatch(setDate(data.date));

		navigate("/flights");
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="p-4 rounded-md w-full  shadow-lg bg-gray-50 flex flex-col gap-4 justify-center items-center min-h-[150px]"
		>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
				<div className="flex flex-col gap-2">
					<label htmlFor="origin">Flying From</label>
					<Controller
						name="origin"
						control={control}
						render={({ field }) => (
							<SearchableSelect options={countries} setdata={field.onChange} />
						)}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="destination">Flying To</label>
					<Controller
						name="destination"
						control={control}
						render={({ field }) => (
							<SearchableSelect options={countries} setdata={field.onChange} />
						)}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="date">Flying Date</label>
					<Controller
						name="date"
						control={control}
						render={({ field }) => (
							<Datepicker
								value={field.value || new Date()}
								onChange={(date) => {
									if (date) {
										field.onChange(date.toISOString().split("T")[0]);
									}
								}}
							/>
						)}
					/>
				</div>
			</div>
			<div className="flex w-full justify-between items-center">
				<p className="text-slate-500">Fly with us.</p>
				<Button type="submit" className="rounded-full">
					Search
				</Button>
			</div>
		</form>
	);
};

export default SearchBar;
