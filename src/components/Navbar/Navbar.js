import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./Elements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavLink to="/">
					<h1 style={{ color: "#1cc52b" }}>React Hooks</h1>
				</NavLink>
				<Bars />
				<NavMenu>
					<NavLink to="/useState">useState</NavLink>
					<NavLink to="/useEffect">useEffect</NavLink>
					<NavLink to="/useCallback">useCallback</NavLink>
					<NavLink to="/useContext">useContext</NavLink>
					<NavLink to="/useMemo">useMemo</NavLink>
					<NavLink to="/useReducer">useReducer</NavLink>
					<NavLink to="/useRef">useRef</NavLink>
					<NavLink to="/custom">Custom Hooks</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
