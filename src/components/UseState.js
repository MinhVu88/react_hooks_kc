import React, { useState } from "react";

function showNote() {
  const note = "~ Passing a STANDARD function, defined outside of Main, to useState() as state: The function runs everytime the Main component renders ~";
  console.log(note);
  return note;
}

export default function UseState() {
  const [count, setCount] = useState(10),
    [note_0, setNote_0] = useState(() => {
      const note = "~ Passing an ARROW function to useState() as state: The function only runs the very 1st time the Main component renders ~";
      console.log(note);
      return note;
    }),
    [note_1, setNote_1] = useState(showNote()),
    [item, setItem] = useState({ name: "computer", quantity: 7 });

  const product = item.name,
    amount = item.quantity;

  function subtract_0() {
    // incorrect way to update the state, based on its previous value
    // setCount(count - 1); // 10 - 1
    // setCount(count - 1); // 10 - 1

    // correct
    setCount(previousStateValue => previousStateValue - 0.5); // 10 - 0.5 = 9.5
    setCount(previousStateValue => previousStateValue - 0.5); // 9.5 - 0.5 = 9
  }

  const subtract_1 = () => {
    setItem(previousStateValue => {
      // with useState(), what's returned here completely overwrites the initial/default state of item
      // thus, when subtract_1() runs, only quantity is rendered to the browser, name is overwritten
      // return { quantity: previousStateValue.quantity - 1 };

      // to prevent item's state from being overwritten, use the spread operator like this
      return { ...previousStateValue, quantity: previousStateValue.quantity - 1 };
    });
  };

  function add_0() {
    // incorrect
    // setCount(count + 1);
    // setCount(count + 1);

    // correct
    setCount(previousStateValue => previousStateValue + 0.5); // 10 + 0.5 = 10.5
    setCount(previousStateValue => previousStateValue + 0.5); // 10.5 + 0.5 = 11
  }

  const add_1 = () => {
    // setItem(previousStateValue => previousStateValue + 1);
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>[ useState ]</h1>
      <div className="number">
        <button onClick={subtract_0}>
          <strong>-</strong>
        </button>
        <span>{count}</span>
        <button onClick={add_0}>
          <strong>+</strong>
        </button>
      </div>
      <p>{note_0}</p>
      <p>{note_1}</p>
      <div className="number">
        <button onClick={subtract_1}>
          <strong>-</strong>
        </button>
        <span>{amount}</span>
        <span>{product}</span>
        <button onClick={add_1}>
          <strong>+</strong>
        </button>
      </div>
    </div>
  );
}
