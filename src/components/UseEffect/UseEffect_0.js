import React, { useState, useEffect } from "react";
import "./styles.css";

const UseEffect0 = () => {
	const [resource, setResource] = useState("users"),
		[items, setItems] = useState([]);

	console.log("rendering...");

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${resource}?_limit=3`)
			.then(response => response.json())
			.then(json => setItems(json));

		console.log(
			"everytime resource changes or useEffect() runs, it does that after the clean-up/return code runs"
		);

		return () =>
			console.log(
				"the clean-up/return code always runs before useEffect() does to clean up any potential memory leaks in the program"
			);
	}, [resource]);

	useEffect(() => {
		console.log("empty dependency list");
	}, []);

	return (
		<>
			<h1 className="effect0-h1">[ useEffect ]</h1>
			<h3 className="effect0-h3">Version #1 | {resource} (resource type from jsonplaceholder)</h3>
			<div className="useeffect-container">
				<button className="effect-btn" onClick={() => setResource("posts")}>
					Posts
				</button>
				<button className="effect-btn" onClick={() => setResource("users")}>
					Users
				</button>
				<button className="effect-btn" onClick={() => setResource("comments")}>
					Comments
				</button>
			</div>
			{items.map(item => {
				return (
					<ul key={item.id}>
						<li>{JSON.stringify(item)}</li>
					</ul>
				);
			})}
		</>
	);
};

export default UseEffect0;
