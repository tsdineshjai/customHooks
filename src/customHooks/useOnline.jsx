import React from "react";

function useOnline() {
	const [online, setOnline] = React.useState(window.navigator.onLine);

	React.useEffect(() => {
		window.addEventListener("online", () => {
			setOnline(true);
		});
		window.addEventListener("offline", () => {
			setOnline(false);
		});

		//we didnt add the cleanup function and also no dependency array because
		//we want the useEffect run only once and global event listeners are intended to be added once.
	}, []);

	return online;
}

export default useOnline;
