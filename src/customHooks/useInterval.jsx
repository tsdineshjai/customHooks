import React from "react";

let timerId;
function useInterval(fn, intervalSeconds) {
	React.useEffect(() => {
		timerId = setInterval(() => {
			fn();
		}, intervalSeconds);

		return () => {
			clearInterval(timerId);
		};
	}, [fn, intervalSeconds]);

	return;
}

export default useInterval;
