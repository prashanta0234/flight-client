import React from "react";
import { useForm, Controller } from "react-hook-form";
import SearchableSelect from "./SelectWithSearch";
import { countries } from "../../utils/countriesData";
import { Datepicker } from "flowbite-react";
import Button from "./Button";
import { useNavigate, createSearchParams } from "react-router-dom";

type FormData = {
	origin: string;
	destination: string;
	date: Date | null;
};

const SearchBar = () => {
	const { control, handleSubmit } = useForm<FormData>({
		defaultValues: {
			origin: "",
			destination: "",
			date: null,
		},
	});

	const navigate = useNavigate();

	const onSubmit = (data: FormData) => {
		const formattedDate = data.date
			? data.date.toLocaleDateString("en-CA")
			: "";

		const searchParams = createSearchParams({
			origin: data.origin,
			destination: data.destination,
			date: formattedDate,
		});

		navigate({
			pathname: "/flights",
			search: `?${searchParams.toString()}`,
		});
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="p-4 rounded-md w-full shadow-lg bg-gray-50 flex flex-col gap-4 justify-center items-center min-h-[150px]"
		>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
				<div className="flex flex-col gap-2">
					<label htmlFor="origin">Flying From</label>
					<Controller
						name="origin"
						control={control}
						rules={{ required: "Origin is required" }}
						render={({ field, fieldState: { error } }) => (
							<>
								<SearchableSelect
									options={countries}
									setdata={field.onChange}
								/>
								{error && (
									<p className="text-red-500 text-sm">{error.message}</p>
								)}
							</>
						)}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="destination">Flying To</label>
					<Controller
						name="destination"
						control={control}
						rules={{ required: "Destination is required" }}
						render={({ field, fieldState: { error } }) => (
							<>
								<SearchableSelect
									options={countries}
									setdata={field.onChange}
								/>
								{error && (
									<p className="text-red-500 text-sm">{error.message}</p>
								)}
							</>
						)}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="date">Flying Date</label>
					<Controller
						name="date"
						control={control}
						rules={{ required: "Date is required" }}
						render={({ field, fieldState: { error } }) => (
							<>
								<Datepicker
									value={field.value}
									onChange={(date) => field.onChange(date)}
								/>
								{error && (
									<p className="text-red-500 text-sm">{error.message}</p>
								)}
							</>
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
