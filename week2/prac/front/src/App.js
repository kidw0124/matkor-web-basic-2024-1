import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
	const [num, setNum] = useState(0);
	const [name, setName] = useState("");
	const [isMatch, setIsMatch] = useState(false);

	const sendID = () => {
		axios
			.get(`/api/users?id=${num}`)
			.then((res) => {
				setName(res.data);
			})
			.catch((err) => {
				console.log(err);
				setName("Error");
			});
	};

	const matchIDName = () => {
		axios
			.post(`/api/users/${num}`, { name: name, number: num })
			.then((res) => {
				if (res.status === 299) {
					setIsMatch(false);
				} else {
					setIsMatch(true);
					console.log(res.data.id, res.data.name);
				}
			})
			.catch((err) => {
				console.log(err);
				setIsMatch(false);
			});
	};

	useEffect(() => {
		matchIDName();
	}, [num, name]);

	return (
		<div className="App">
			<div>{num}</div>
			<div>{name}</div>
			{isMatch ? <div>match!</div> : <div>not match!</div>}
			<button
				onClick={() => {
					setNum(num + 1);
				}}>
				Click me!
			</button>
			<button onClick={sendID}>Send ID!</button>
		</div>
	);
}

export default App;

