import { Card } from "flowbite-react";
import React from "react";

const Favorite = () => {
	return (
		<div className="container my-16 flex flex-col gap-12">
			<div className="text-center text-3xl font-medium">
				Our most Visited Destinations
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<Card
					className="max-w-sm"
					imgAlt="Meaningful alt text for an image that is not purely decorative"
					imgSrc="/assets/dubai.jpg"
				>
					<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						Dubai
					</h5>
					<p className="font-normal text-gray-700 dark:text-gray-400">
						Dubai is a modern, luxurious city known for its skyscrapers,
						shopping, entertainment, and desert landscapes.
					</p>
				</Card>
				<Card
					className="max-w-sm"
					imgAlt="Meaningful alt text for an image that is not purely decorative"
					imgSrc="/assets/thailand.jpg"
				>
					<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						Thailand
					</h5>
					<p className="font-normal text-gray-700 dark:text-gray-400">
						Thailand is a vibrant country famous for its beaches, temples, rich
						culture, cuisine, and bustling cities.
					</p>
				</Card>
				<Card
					className="max-w-sm"
					imgAlt="Meaningful alt text for an image that is not purely decorative"
					imgSrc="/assets/london.jpg"
				>
					<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
						London{" "}
					</h5>
					<p className="font-normal text-gray-700 dark:text-gray-400">
						London is a historic city known for its iconic landmarks, culture,
						museums, diverse population, and vibrant arts scene.
					</p>
				</Card>
			</div>
		</div>
	);
};

export default Favorite;
