import React, { useState, useMemo, useEffect } from "react";
import "./styles.css";

const UseMemo = () => {
	const [number, setNumber] = useState(0);
	const [theme, setTheme] = useState(false);

	// const themeStyles = {
	// 	backgroundColor: theme ? "crimson" : "white",
	// 	color: theme ? "white" : "crimson",
	// 	margin: "30px auto",
	// 	width: "300px",
	// 	fontSize: "30px",
	// 	textAlign: "center",
	// 	border: "1px solid black"
	// };

	// at 06:32 in "Learn useMemo In 10 Minutes" by Kyle Cook (WDS)
	// look up "Referential Equality" in React & JS
	const themeStyles = useMemo(() => {
		return {
			backgroundColor: theme ? "crimson" : "white",
			color: theme ? "white" : "crimson",
			margin: "30px auto",
			width: "300px",
			fontSize: "30px",
			textAlign: "center",
			border: "1px solid black"
		};
	}, [theme]);

	useEffect(() => alert("Theme Changed"), [themeStyles]);

	const delayed = num => {
		for (let i = 0; i <= 1000000000; i++) {}
		return num * 2;
	};

	// const doubleNumber = delayed(number);
	const doubleNumber = useMemo(() => delayed(number), [number]);

	return (
		<div className="memo-container">
			<h1>[ useMemo ]</h1>
			<input
				className="memo-input"
				type="number"
				value={number}
				onChange={e => setNumber(parseInt(e.target.value))}
			/>
			<button className="memo-btn" onClick={() => setTheme(preTheme => !preTheme)}>
				Change Theme
			</button>
			<div style={themeStyles}>{doubleNumber}</div>
		</div>
	);
};

export default UseMemo;
