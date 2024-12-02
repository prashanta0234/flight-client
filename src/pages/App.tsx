import React from "react";
import Layout from "../components/layouts/Layout";
import Hero from "../components/home/Hero";

import SearchBar from "../components/shared/SearchBar";
import Favorite from "../components/home/Favorite";

function App() {
	return (
		<Layout>
			<div>
				<Hero />
				<div className="flex w-full justify-center bg-transparent mt-[-50px] mb-10">
					<div className="w-[90%] md:w-[70%]">
						<SearchBar />
					</div>
				</div>
				<Favorite />
			</div>
		</Layout>
	);
}

export default App;
