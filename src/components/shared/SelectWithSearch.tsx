import React, { useState } from "react";

interface SearchableSelectProps {
	options: string[];
	setdata: (value: string) => void;
}

const SearchableSelect: React.FC<SearchableSelectProps> = ({
	options,
	setdata,
}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [search, setSearch] = useState<string>("");
	const [selectedOption, setSelectedOption] = useState<string>("");

	const filteredOptions = options.filter((option) =>
		option.toLowerCase().includes(search.toLowerCase())
	);

	const handleSelect = (data: string) => {
		setSelectedOption(data);
		setdata(data);
	};

	return (
		<div className="relative w-full ">
			<div
				onClick={() => setIsOpen(!isOpen)}
				className="cursor-pointer bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-gray-700"
			>
				{selectedOption || "Select an option"}
			</div>

			{isOpen && (
				<div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
					<input
						type="text"
						placeholder="Search..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className="w-full p-2 border-b border-gray-300 rounded-t-md"
					/>
					<ul className="max-h-40 overflow-y-auto">
						{filteredOptions.length > 0 ? (
							filteredOptions.map((option, index) => (
								<li
									key={index}
									onClick={() => {
										handleSelect(option);
										setIsOpen(false);
										setSearch("");
									}}
									className="cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-200"
								>
									{option}
								</li>
							))
						) : (
							<li className="px-4 py-2 text-gray-500">No options found</li>
						)}
					</ul>
				</div>
			)}
		</div>
	);
};

export default SearchableSelect;
