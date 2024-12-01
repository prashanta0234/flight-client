import React from "react";
import NavBar from "../shared/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";

const LayoutV2 = () => {
	return (
		<div>
			<NavBar />
			<div className="min-h-[90vh] container">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default LayoutV2;
