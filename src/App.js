import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import UseState from "./components/UseState/Main";
import UseContext from "./components/UseContext/Main";
import UseEffect from "./components/UseEffect/Main";
import UseMemo from "./components/UseMemo/Main";
import UseCallback from "./components/UseCallback/Main";
import UseRef from "./components/UseRef/Main";
import CustomHook from "./components/CustomHook/Main";
import UseReducer from "./components/UseReducer/Main";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/useState" exact component={UseState} />
				<Route path="/useEffect" exact component={UseEffect} />
				<Route path="/useContext" exact component={UseContext} />
				<Route path="/useMemo" exact component={UseMemo} />
				<Route path="/useCallback" exact component={UseCallback} />
				<Route path="/useRef" exact component={UseRef} />
				<Route path="/useReducer" exact component={UseReducer} />
				<Route path="/custom" exact component={CustomHook} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
