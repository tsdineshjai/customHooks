import React from "react";

function useDebounce(query, delay) {
	const [debouncedValue, setDebouncedValue] = React.useState("");
	React.useEffect(() => {
		const timerID = setTimeout(() => {
			setDebouncedValue(query);
			//instead of just returning a value, usually we request to an api after certain amount of delay
			//this is intended to avoid the overload to the  server.
		}, delay);
		return () => {
			clearTimeout(timerID);
		};
	}, [query, delay]);

	return debouncedValue;
}

export default useDebounce;
