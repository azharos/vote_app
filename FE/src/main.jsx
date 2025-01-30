import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import "./index.css";
// import App from "./App.jsx";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import Login from "./pages/Login";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider
			router={createBrowserRouter([
				{
					path: "/",
					element: <Navigate to="/login" />,
				},
				{
					path: "/login",
					element: <Login />,
				},
			])}
		/>
	</StrictMode>
);
