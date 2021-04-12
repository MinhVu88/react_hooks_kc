import React, { useState, useEffect } from "react";

const List = ({ getItems }) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		setItems(getItems(1));
		alert("Updating items");
	}, [getItems]);

	return items.map(item => (
		<div className="item" key={item}>
			{item}
		</div>
	));
};

export default List;
