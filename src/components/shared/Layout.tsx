import React from "react";
import NavBar from "./NavBar";

const Layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div>
			<NavBar />
			<div>{children}</div>
		</div>
	);
};

export default Layout;
