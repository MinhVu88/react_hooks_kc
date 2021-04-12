import React, { useState, useReducer } from "react";
import "./styles.css";
import Todo from "./Todo";

export const ACTIONS = {
	// INCREMENT: "increment",
	// DECREMENT: "decrement"
	ADD_TODO: "add-todo",
	TOGGLE_TODO: "toggle-todo",
	DELETE_TODO: "delete-todo"
};

// const initialState = { count: 0 };

// const reducer = (state, action) => {
// 	switch (action.type) {
// 		case ACTIONS.INCREMENT:
// 			return { count: state.count + 1 };
// 		case ACTIONS.DECREMENT:
// 			return { count: state.count - 1 };
// 		default:
// 			return state;
// 	}
// };

const initialState = [];

const reducer = (todos, action) => {
	switch (action.type) {
		case ACTIONS.ADD_TODO:
			return [...todos, getNewTodo(action.payload.todo)];
		case ACTIONS.DELETE_TODO:
			return todos.filter(todo => todo.id !== action.payload.id);
		case ACTIONS.TOGGLE_TODO:
			return todos.map(todo => {
				if (todo.id === action.payload.id) {
					return { ...todo, complete: !todo.complete };
				}
				return todo;
			});
		default:
			return initialState;
	}
};

const getNewTodo = todo => {
	return { id: Date.now(), name: todo, complete: false };
};

const UseReducer = () => {
	// const [count, setCount] = useState(0);
	// const [state, dispatch] = useReducer(reducer, initialState);

	// const increment = () => {
	// 	// setCount(preCount => preCount + 1);
	// 	dispatch({ type: ACTIONS.INCREMENT });
	// };

	// const decrement = () => {
	// 	// setCount(preCount => preCount - 1);
	// 	dispatch({ type: ACTIONS.DECREMENT });
	// };

	// return (
	// 	<div>
	// 		<h1>[ useReducer ]</h1>
	// 		<button onClick={decrement}>-</button>
	// 		<span>{state.count}</span>
	// 		<button onClick={increment}>+</button>
	// 	</div>
	// );

	const [todo, setTodo] = useState("");
	const [todos, dispatch] = useReducer(reducer, initialState);

	const handleSubmit = e => {
		e.preventDefault();

		dispatch({ type: ACTIONS.ADD_TODO, payload: { todo } });

		setTodo("");
	};

	console.log(todos);

	return (
		<div className="reducer-container">
			<h1>[ useReducer ]</h1>
			<form onSubmit={handleSubmit}>
				<input
					className="reducer-input"
					type="text"
					value={todo}
					onChange={e => setTodo(e.target.value)}
				/>
				<button className="reducer-btn" type="submit">
					Submit
				</button>
			</form>
			{todos.map(task => (
				<Todo key={task.id} todo={task} dispatch={dispatch} />
			))}
		</div>
	);
};

export default UseReducer;
