import React, { useState, useEffect } from "react";
import Button from "../ui/Button";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className={`h-14 flex items-center justify-between px-4  ${
				isScrolled
					? "bg-white sticky top-0 shadow-md z-40"
					: "bg-transparent sticky top-0 z-50"
			} transition-all duration-300 ease-in-out `}
		>
			<div className="font-bold text-2xl z-40">
				<Link to="/">LOGO</Link>
			</div>

			{/* Desktop Navigation */}
			<ul className="hidden md:flex gap-6">
				<li className="font-medium inline-flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-secondary duration-300">
					<Link to="/">Home</Link>
				</li>
				<li className="font-medium inline-flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-secondary duration-300">
					<Link to="/flights"> Flights</Link>
				</li>
				<li className="font-medium inline-flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-secondary duration-300">
					About us
				</li>
				<li className="font-medium inline-flex items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-secondary duration-300">
					Contact
				</li>
			</ul>

			<div className="hidden md:block z-40">
				<Button className="rounded-md">Login</Button>
			</div>

			<div className="md:hidden flex items-center z-40">
				<button onClick={toggleSidebar}>
					{isSidebarOpen ? (
						<AiOutlineClose size={24} className="text-secondary" />
					) : (
						<AiOutlineMenu size={24} className="text-secondary" />
					)}
				</button>
			</div>

			{/* Sidebar */}
			<div
				className={`fixed top-0 right-0 w-64 h-full bg-primary shadow-md z-50 transform transition-transform duration-300 ease-in-out ${
					isSidebarOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="p-4">
					<button onClick={toggleSidebar} className="text-secondary">
						<AiOutlineClose size={24} />
					</button>
				</div>
				<ul className="flex flex-col gap-6 p-4">
					<li className="font-medium hover:text-secondary">
						<Link to="/">Home</Link>
					</li>
					<li className="font-medium hover:text-secondary">
						<Link to="/flights"> Flights</Link>
					</li>
					<li className="font-medium hover:text-secondary">About us</li>
					<li className="font-medium hover:text-secondary">Contact</li>
				</ul>
				<div className="p-4">
					<Button className="w-full rounded-md">Login</Button>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
