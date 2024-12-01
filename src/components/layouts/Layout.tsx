import React from "react";
import Footer from "../shared/Footer";

const Layout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<div>
			<div>{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
