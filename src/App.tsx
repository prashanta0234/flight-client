import React from "react";
import "./App.css";
import Layout from "./components/layouts/Layout";
import Hero from "./components/home/Hero";

import HomeSearch from "./components/home/HomeSearch";
import Favorite from "./components/home/Favorite";

function App() {
	return (
		<Layout>
			<div>
				<Hero />
				<div className="flex w-full justify-center bg-transparent mt-[-50px] mb-10">
					<HomeSearch />
				</div>
				<Favorite />
			</div>
		</Layout>
	);
}

export default App;
