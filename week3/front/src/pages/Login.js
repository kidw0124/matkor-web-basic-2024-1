import "./Login.css";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const checkLogin = (id, password) => {
	if (id === "admin" && password === "admin") {
		return true;
	}
	return false;
};

function Login() {
	const navigate = useNavigate();
	return (
		<div className="Login">
			<h1>Login</h1>
			<input type="text" placeholder="Username" id="id" />
			<input type="password" placeholder="Password" id="password" />
			<button
				onClick={() => {
					const id = document.getElementById("id").value;
					const password = document.getElementById("password").value;
					if (checkLogin(id, password)) {
						alert("Login successful");
						navigate(`/home/${id}`);
					} else {
						alert("Login failed");
					}
				}}
			>
				Login
			</button>
		</div>
	);
}

export default Login;
