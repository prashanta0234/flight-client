import { Link } from "react-router-dom";
import Button from "../components/shared/Button";
import React from "react";

const NotFound404 = () => {
	return (
		<div className="h-[90vh] w-full flex flex-col justify-center items-center">
			<p>404 Ops! Page not found! </p>
			<Link to={"/"}>
				<Button>Goto Home</Button>
			</Link>
		</div>
	);
};

export default NotFound404;
