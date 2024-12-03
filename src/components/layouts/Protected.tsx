import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const Protected = () => {
	const token = Cookies.get("user-token");

	return token ? <Outlet /> : <Navigate to="/signin" />;
};

export default Protected;
