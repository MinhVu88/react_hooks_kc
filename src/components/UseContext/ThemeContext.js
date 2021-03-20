import React, { useState, useContext } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export const useTheme = () => useContext(ThemeContext);
export const useThemeUpdate = () => useContext(ThemeUpdateContext);

export const ThemeProvider = ({ children }) => {
	const [darkTheme, setDarkTheme] = useState(true);

	const toggleTheme = () => setDarkTheme(preDarkTheme => !preDarkTheme);

	return (
		<ThemeContext.Provider value={darkTheme}>
			<ThemeUpdateContext.Provider value={toggleTheme}>{children}</ThemeUpdateContext.Provider>
		</ThemeContext.Provider>
	);
};
