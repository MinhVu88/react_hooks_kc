import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const UseRef = () => {
	const [name, setName] = useState("");
	// const [renderCount, setRenderCount] = useState(0);

	// useRef() returns an object that has a property called "current",
	// which can be utilized in 3 main use cases
	const renderCount = useRef(1);
	const inputRef = useRef();
	const previousName = useRef("");

	// use case #1: to persist data between component renderings
	// unlike state, when persisted data's updated, the component doesn't re-render
	useEffect(() => {
		// this causes an infinite loop
		// setRenderCount(prevCount => prevCount + 1);

		renderCount.current += 1;
	});

	// use case #2: to reference html elements
	const focus = () => {
		console.log("\ninputRef.current ->", inputRef.current);

		inputRef.current.focus();

		inputRef.current.value = "some value";
	};

	// use case #3: to store the previous value of some state
	useEffect(() => {
		previousName.current = name;
	}, [name]);

	return (
		<div className="ref-container">
			<h1>[ useRef ]</h1>
			<input
				ref={inputRef}
				type="text"
				value={name}
				onChange={e => setName(e.target.value)}
				className="ref-input"
			/>
			<h2 style={{ marginTop: "30px" }}>
				Current name: {name ? name : "...."} | Previously name:{" "}
				{previousName.current ? previousName.current : "...."}
			</h2>
			<h3 style={{ margin: "20px auto" }}>
				This component has rendered {renderCount.current} times
			</h3>
			<button onClick={focus} className="ref-btn">
				Focus
			</button>
		</div>
	);
};

export default UseRef;
