import React from "react";
import "./App.css";
import useDebounce from "./customHooks/useDebounce";

function App() {
	const [inputQuery, setInputQuery] = React.useState("");
	const debouncedValue = useDebounce(inputQuery, 1000);


	function handleChange(e) {
		setInputQuery(e.target.value);
	}

	//the role of the debouncing function is delay the execution at certain second regularly.
	return (
		<div className="text-red-950 font-normal bg-yellow-500  p-3 gap-2 grid-cols-1 text-center  ">
			<input
				type="text"
				name="query"
				id="query"
				value={inputQuery}
				onChange={handleChange}
			/>
			<p>The debounced value is {debouncedValue}</p>
		</div>
	);
}

export default App;
