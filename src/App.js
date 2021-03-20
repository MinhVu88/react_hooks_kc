import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import UseState from "./components/UseState/Main";
import UseContext from "./components/UseContext/Main";
import UseEffect from "./components/UseEffect/Main";
import UseMemo from "./components/UseMemo/Main";

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
			</Switch>
		</BrowserRouter>
	);
}

export default App;
