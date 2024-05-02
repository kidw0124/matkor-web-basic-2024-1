import "./Signup.css";

function Signup() {
	return (
		<div className="Signup">
			<h1>Signup</h1>
			<input type="text" placeholder="ID" id="id" />
			<input type="password" placeholder="Password" id="password" />
			<input type="text" placeholder="Phone" id="phone" />
			<button>Signup</button>
		</div>
	);
}

export default Signup;
