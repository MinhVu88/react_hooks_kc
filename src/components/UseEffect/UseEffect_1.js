import React, { useState, useEffect } from "react";
import "./styles.css";

const UseEffect1 = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	function handleResize() {
		setWindowWidth(window.innerWidth);
	}

	useEffect(() => {
		window.addEventListener("resize", handleResize);

		// when an event handler is applied in a component & when that component's removed & thus no longer mounts
		// its event handler should also be removed as well, otherwise the app's performance will be abdly affected
		// therefore, there should be a clean-up process set up inside useEffect() to tackle the issue
		// this process involves returning an arrow function, in which the event & the function that handles it are deleted altogether
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<>
			<div className="useeffect-container">
				<h3 className="effect1-h3">Version #2 | {windowWidth} (window/browser inner width)</h3>
			</div>
		</>
	);
};

export default UseEffect1;
