import { useParams } from "react-router-dom";

function Number() {
	const { number } = useParams();
	return (
		<div className="Number">
			<h1>Number</h1>
			{!isNaN(number) && <h2>{number * number}</h2>}
		</div>
	);
}

export default Number;
