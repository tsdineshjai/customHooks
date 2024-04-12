import React from "react";

function useMousePosition() {
	const [position, setPosition] = React.useState({
		x: "",
		y: "",
	});

	React.useEffect(() => {
		function handleMouseMove(e) {
			console.log(e.clientX, e.clientX);
			setPosition({
				...position,
				x: e.clientX,
				y: e.clientY,
			});
		}

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	});

	return position;
}

export default useMousePosition;
