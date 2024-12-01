import React from "react";
import SearchableSelect from "../shared/SelectWithSearch";
import { countries } from "../../utils/countriesData";
import { Datepicker } from "flowbite-react";
import Button from "../ui/Button";

const HomeSearch = () => {
	return (
		<div className="p-4 rounded-md w-[90%] md:w-[70%] shadow-lg bg-gray-50 flex flex-col gap-4 justify-center items-center min-h-[150px]">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
				<div className="flex flex-col gap-2">
					<label htmlFor="">Flying From</label>
					<SearchableSelect options={countries} />
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="">Flying To</label>
					<SearchableSelect options={countries} />
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="">Flying Date</label>
					<Datepicker />
				</div>
			</div>
			<div className="flex w-full justify-between items-center">
				<p className="text-slate-500">Fly with us.</p>
				<Button className="rounded-full">Search</Button>
			</div>
		</div>
	);
};

export default HomeSearch;
