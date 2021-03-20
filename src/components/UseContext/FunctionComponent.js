import React, { useContext } from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";
// import { ThemeContext } from "./UseContext";

const FunctionComponent = () => {
	// const darkTheme = useContext(ThemeContext);

	const darkTheme = useTheme();
	const toggleTheme = useThemeUpdate();

	const themeStyles = {
		backgroundColor: darkTheme ? "#333" : "#CCC",
		color: darkTheme ? "#CCC" : "#333",
		padding: "2rem",
		margin: "2rem"
	};

	return (
		<>
			<button className="context-btn" onClick={toggleTheme}>
				Toggle Theme
			</button>
			<div style={themeStyles}>Function Theme</div>
		</>
	);
};

export default FunctionComponent;
