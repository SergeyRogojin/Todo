import React from "react";
import {TodoItems} from "../TodoItems/TodoItems";

import './TodoLIst.css'

export const TodoList = ({todoData, onDeleted, filterStatus, onCompleted}) => {

  let result;
  if (filterStatus === 'all') result = todoData
  if (filterStatus === 'active') result = todoData.filter(el => !el.completed)
  if (filterStatus === 'completed') result = todoData.filter(el => el.completed)

  const elements = result.map(el => (
      <TodoItems
          key={el.id}
          {...el}
          onDeleted={() => onDeleted(el.id)}
          onCompleted={() => onCompleted(el.id)}
      />
  ))

  return (
      <ul className="todo-list">
        {elements}
      </ul>
  )
}