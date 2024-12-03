import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import LayoutV2 from "../components/layouts/LayoutV2";
import Loader from "../components/shared/Loader";
import Protected from "../components/layouts/Protected";
import NotFound404 from "../pages/404";

const App = lazy(() => import("../pages/App"));
const Flights = lazy(() => import("../pages/Flights"));
const FlightDetails = lazy(() => import("../pages/FlightDetails"));
const RegistrationForm = lazy(() => import("../pages/Registration"));
const Login = lazy(() => import("../pages/Login"));
const Booking = lazy(() => import("../pages/Booking"));
const UserFlights = lazy(() => import("../pages/UserFlights"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/",
		element: <LayoutV2 />,
		children: [
			{ path: "/flights", element: <Flights /> },
			{ path: "/flights/:id", element: <FlightDetails /> },
			{ path: "/registration", element: <RegistrationForm /> },
			{ path: "/login", element: <Login /> },
			{
				path: "/",
				element: <Protected />,
				children: [
					{ path: "/booking/:id", element: <Booking /> },
					{ path: "/user/booking", element: <UserFlights /> },
				],
			},
			{ path: "*", element: <NotFound404 /> },
		],
	},
]);

export function Router() {
	return (
		<Suspense fallback={<Loader />}>
			<RouterProvider router={router} />
		</Suspense>
	);
}
