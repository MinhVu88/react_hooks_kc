import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./Elements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavLink to="/">
					<h1 style={{ marginBottom: "25px", color: "#1cc52b" }}>React Hooks</h1>
				</NavLink>
				<Bars />
				<NavMenu>
					<NavLink to="/useState">UseState</NavLink>
					<NavLink to="/useEffect0">UseEffect_0</NavLink>
					<NavLink to="/useEffect1">UseEffect_1</NavLink>
					<NavLink to="/useCallback">UseCallback</NavLink>
					<NavLink to="/useContext">UseContext</NavLink>
					<NavLink to="/useMemo">UseMemo</NavLink>
					<NavLink to="/useReducer">UseReducer</NavLink>
					<NavLink to="/useRef">UseRef</NavLink>
					<NavLink to="/custom">Custom Hooks</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
