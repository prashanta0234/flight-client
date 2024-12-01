import React from "react";

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white py-8">
			<div className="max-w-7xl mx-auto px-6 md:px-12">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					<div>
						<h4 className="font-bold text-lg mb-4">A Flight company</h4>
						<ul className="space-y-2">
							<li>Mirpur, Dhaka, Bangladesh</li>
							<li>+880 1487575***</li>
							<li>admin@aflight.com</li>
						</ul>
					</div>
					<div>
						<h4 className="font-bold text-lg mb-4">About Us</h4>
						<ul className="space-y-2">
							<li>
								<a href="#" className="hover:text-secondary">
									Our Story
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-secondary">
									Careers
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-secondary">
									Contact Us
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-secondary">
									Blog
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-bold text-lg mb-4">Customer Service</h4>
						<ul className="space-y-2">
							<li>
								<a href="#" className="hover:text-secondary">
									FAQs
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-secondary">
									Support Center
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-secondary">
									Booking Policies
								</a>
							</li>
							<li>
								<a href="#" className="hover:text-secondary">
									Payment Methods
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="font-bold text-lg mb-4">Newsletter</h4>
						<p className="text-sm mb-4">
							Subscribe to get the latest updates and deals.
						</p>
						<form className="flex">
							<input
								type="email"
								placeholder="Your email address"
								className="px-4 py-2 rounded-l-lg w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
							<button
								type="submit"
								className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700"
							>
								Subscribe
							</button>
						</form>
					</div>
				</div>

				<div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
					<p>
						&copy; 2024 A Flight Booking Site. All rights reserved by Prashanta
						Chakraborty.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
