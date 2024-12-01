import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import LayoutV2 from "../components/layouts/LayoutV2";
import Loader from "../components/shared/Loader";

const App = lazy(() => import("../pages/App"));
const Flights = lazy(() => import("../pages/Flights"));
const FlightDetails = lazy(() => import("../pages/FlightDetails"));

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
		],
	},
	// { path: "/flights", element: <Flights /> },
]);

export function Router() {
	return (
		<Suspense fallback={<Loader />}>
			<RouterProvider router={router} />
		</Suspense>
	);
}
