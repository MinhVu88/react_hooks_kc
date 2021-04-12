import React, { useState, useCallback } from "react";
import "./styles.css";
import List from "./List";

const UseCallback = () => {
	const [number, setNumber] = useState(1);
	const [theme, setTheme] = useState(false);

	const themeStyles = {
		backgroundColor: theme ? "#333" : "#FFF",
		color: theme ? "#FFF" : "#333",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignContent: "center",
		alignItems: "center",
		marginTop: "30px"
	};

	// const getItems = () => [number + 1, number + 2, number + 3];

	// the difference between useCallback & useMemo (04:48)
	// useCallback is for dealing with: Referential Equality (06:26)
	const getItems = useCallback(value => [number + value, number + 1 + value, number + 2 + value], [
		number
	]);

	return (
		<div style={themeStyles}>
			<h1>[ useCallback ]</h1>
			<input
				className="callback-input"
				type="number"
				value={number}
				onChange={e => setNumber(parseInt(e.target.value))}
			/>
			<button className="callback-btn" onClick={() => setTheme(preTheme => !preTheme)}>
				Toggle Theme
			</button>
			<List getItems={getItems} />
		</div>
	);
};

export default UseCallback;
