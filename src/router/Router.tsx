import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Spinner } from "flowbite-react";
import LayoutV2 from "../components/layouts/LayoutV2";

const App = lazy(() => import("../App"));
const Flights = lazy(() => import("../pages/Flights"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/",
		element: <LayoutV2 />,
		children: [{ path: "/flights", element: <Flights /> }],
	},
	// { path: "/flights", element: <Flights /> },
]);

export function Router() {
	return (
		<Suspense
			fallback={
				<div className="flex h-screen w-full items-center justify-center bg-primary-50">
					<Spinner aria-label="Extra large spinner example" size="xl" />
				</div>
			}
		>
			<RouterProvider router={router} />
		</Suspense>
	);
}
