import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import UseState from "./components/UseState/UseState";
import UseEffect0 from "./components/UseEffect/UseEffect_0";
import UseEffect1 from "./components/UseEffect/UseEffect_1";
import Home from "./components/Home/Home";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/useState" exact component={UseState} />
				<Route path="/useEffect0" exact component={UseEffect0} />
				<Route path="/useEffect1" exact component={UseEffect1} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
