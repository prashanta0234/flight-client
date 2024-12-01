import React from "react";
import NavBar from "../shared/NavBar";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<div
			className="w-full h-[80vh]  bg-cover bg-center rounded-b-[10.5rem]"
			style={{ backgroundImage: "url('./assets/plane.jpg')" }}
		>
			<NavBar />

			<div className="h-full flex justify-center ">
				<div>
					<div className="text-xl md:text-4xl lg:text-5xl font-medium  text-center mt-20">
						Your Journey Begins Here: <br /> Book Flights with Ease!
					</div>
					<div className="flex w-full justify-center">
						<Button className="mt-10 w-fit">
							<Link to="/flights">Find Flights</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
