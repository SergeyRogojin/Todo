import React, { useState } from "react";

import "./Header.css";

export const Header = ({ addTodo }) => {
  const [label, setLabel] = useState("");

  const handleChange = (event) => setLabel(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(label);
    setLabel("");
  };

  return (
    <header className="header">
      <h1>TODOS</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus={true}
          onChange={handleChange}
          value={label}
        />
      </form>
    </header>
  );
};
