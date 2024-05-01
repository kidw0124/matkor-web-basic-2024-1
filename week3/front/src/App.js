import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Signup, Login, Number } from "./pages";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/signup" element={<Signup />} />
					<Route
						path="/login"
						element={<Login time={new Date().toString()} />}
					/>
					<Route path="/number/:number" element={<Number />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;

