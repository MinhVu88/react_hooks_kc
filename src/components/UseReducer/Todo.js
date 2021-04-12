import React from "react";
import { ACTIONS } from "./Main";

const Todo = ({ todo, dispatch }) => {
	return (
		<>
			<p
				style={{
					color: todo.complete ? "green" : "crimson",
					marginTop: "20px",
					fontSize: "30px"
				}}>
				{todo.name}
			</p>
			<div>
				<button
					className="reducer-btn"
					onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>
					Toggle
				</button>
				<button
					className="reducer-btn"
					onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>
					Delete
				</button>
			</div>
		</>
	);
};

export default Todo;
