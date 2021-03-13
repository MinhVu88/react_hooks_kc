import React from "react";
import hook from "./hook.png";
import "./styles.css";

const Home = () => {
	return (
		<div className="logo-container">
			<a href="https://usehooks.com/" target="_blank">
				<img src={hook} alt="hook" />
			</a>
		</div>
	);
};

export default Home;
