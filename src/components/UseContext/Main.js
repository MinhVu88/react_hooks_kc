import React, { useState } from "react";
import "./styles.css";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import { ThemeProvider } from "./ThemeContext";

// for ClassComponent
export const ThemeContext = React.createContext();

const UseContext = () => {
	// const [darkTheme, setDarkTheme] = useState(true);

	// const toggleTheme = () => setDarkTheme(preDarkTheme => !preDarkTheme);

	// return (
	// 	<div className="context-wrapper">
	// 		<h1 className="context-h1">[ useContext ]</h1>
	// 		<ThemeContext.Provider value={darkTheme}>
	// 			<button className="context-btn" onClick={toggleTheme}>
	// 				Toggle Theme
	// 			</button>
	// 			<FunctionComponent />
	// 			<ClassComponent />
	// 		</ThemeContext.Provider>
	// 	</div>
	// );

	// a more efficient approach
	return (
		<div className="context-wrapper">
			<h1 className="context-h1">[ useContext ]</h1>
			<ThemeProvider>
				<FunctionComponent />
			</ThemeProvider>
		</div>
	);
};

export default UseContext;
