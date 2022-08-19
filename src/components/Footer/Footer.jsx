import React from "react";

import './Footer.css'

export const Footer = ({allTodos, activeTodos, completedTodos, deleteCompleteTodos, leftTodos}) => {

  return (
      <footer className="footer">
        <span className="todo-count">{leftTodos} items left</span>
        <ul className="filters">
          <li>
            <button type='button' onClick={allTodos}>All</button>
          </li>
          <li>
            <button type='button' onClick={activeTodos}>Active</button>
          </li>
          <li>
            <button type='button' onClick={completedTodos}>Completed</button>
          </li>
        </ul>
        <button className="clear-completed" onClick={deleteCompleteTodos}>Clear completed</button>
      </footer>
  )
}