import React from "react";
import "./App.css";
import useInterval from "./customHooks/useInterval";

function App() {
	const [count, setCount] = React.useState(0);

	function Increment() {
		setCount((currentCount) => currentCount + 1);
	}

	useInterval(Increment, 1000);
	return (
		<div className="text-red-950 font-normal bg-yellow-500  p-3 gap-2 grid-cols-1 text-center  ">
			The timer is at count {count}
		</div>
	);
}

export default App;
