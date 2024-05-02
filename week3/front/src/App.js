import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import { Signup, Login, Home } from "./pages";

function App() {
	const location = useLocation();
	console.log(location);
	return (
		<div className="App">
			<Routes>
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route path="/home/:name" element={<Home />} />
			</Routes>

			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "space-between",
					padding: "10px",
					backgroundColor: "lightgray",
				}}
			>
				location.pathname: {location.pathname}
			</div>
		</div>
	);
}

export default App;

