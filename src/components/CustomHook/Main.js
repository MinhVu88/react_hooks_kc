import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import useUpdateLogger from "./useUpdateLogger";

const CustomHook = () => {
	// const [name, setName] = useState("");
	const [name, setName] = useLocalStorage("name", "");

	useUpdateLogger(name);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignContent: "center",
				alignItems: "center",
				marginTop: "20px"
			}}>
			<h1>[ Custom Hooks ]</h1>
			<input
				type="text"
				value={name}
				onChange={e => setName(e.target.value)}
				style={{
					width: "500px",
					height: "50px",
					marginTop: "50px",
					fontSize: "30px",
					textAlign: "center"
				}}
			/>
		</div>
	);
};

export default CustomHook;
