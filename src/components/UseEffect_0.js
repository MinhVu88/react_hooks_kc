import React, { useState, useEffect } from "react";

export default function UseEffect0() {
  const [resource, setResource] = useState("users"),
    [items, setItems] = useState([]);

  console.log("rendering...");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resource}?_limit=3`)
      .then(response => response.json())
      .then(json => setItems(json));

    console.log("everytime resource changes or useEffect() runs, it does that after the clean-up/return code runs");

    return () => console.log("the clean-up/return code always runs before useEffect() does to clean up any potential memory leaks in the program");
  }, [resource]);

  useEffect(() => {
    console.log("empty dependency list");
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "25px" }}>[ useEffect ]</h1>
      <h3 style={{ textAlign: "center", marginTop: "10px" }}>Version #1 | {resource} (resource type from jsonplaceholder)</h3>
      <div className="container" style={{ display: "flex", marginBottom: "30px", justifyContent: "center", alignItems: "center" }}>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("users")}>Users</button>
        <button onClick={() => setResource("comments")}>Comments</button>
      </div>
      {items.map(item => {
        return <pre key={item.id}>{JSON.stringify(item)}</pre>;
      })}
    </>
  );
}
