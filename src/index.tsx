import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Router } from "./router/Router";
import { Provider } from "react-redux";
import { store } from "./rtk/app/store";
import { Toaster } from "sonner";
import ErrorBoundary from "./pages/ErrorBoundary";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<ErrorBoundary>
			<Provider store={store}>
				<Router />
				<Toaster />
			</Provider>
		</ErrorBoundary>
	</React.StrictMode>
);

reportWebVitals();
