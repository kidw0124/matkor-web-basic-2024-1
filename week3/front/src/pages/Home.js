import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useLayoutEffect } from "react";

function Home() {
	const [name, setName] = useState("...");
	const getName = () => {
		const name = "HI";
		setName(name);
	};
	const navigate = useNavigate();
	const [number, setNumber] = useState(0);
	useEffect(() => {
		getName();
	}, []);
	return (
		<div className="Home">
			<h1>Home</h1>
			<h2>{name}님 안녕하세요!</h2>
			<h3>number: {number}</h3>
			<button>
				<Link to="/login">로그아웃</Link>
			</button>
			<button
				onClick={() => {
					navigate(-1);
				}}
			>
				뒤로 가기
			</button>
			<button
				onClick={() => {
					setNumber(number + 1);
				}}
			>
				+1
			</button>
		</div>
	);
}

export default Home;
