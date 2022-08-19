import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid';

import './App.css';

import {Header} from "../Header/Header";
import {TodoList} from "../TodoList/TodoList";
import {Footer} from "../Footer/Footer";

export const App = () => {

  const [todoData, setTodoData] = useState([])
  const [filterStatus, setFilterStatus] = useState('all')

  const createTodo = (text) => {
    return {
      label: text,
      completed: false,
      edit: false,
      id: uuidv4(),
    }
  }

  const addTodo = (text) => {
    const newTodo = createTodo(text)
    const newArr = [...todoData, newTodo]
    setTodoData(newArr)
  }

  const onDeleted = (id) => {
    const newArr = todoData.filter(el => el.id !== id)
    return setTodoData(newArr)
  }

  const onCompleted = (id) => {
    const index = todoData.findIndex(el => el.id === id)
    const oldItem = todoData[index]
    const newItem = {...oldItem, completed: !oldItem.completed}
    const newArr = [...todoData.slice(0, index), newItem, ...todoData.slice(index + 1)]
    setTodoData(newArr)
  }

  const leftTodos = todoData.length

  const activeTodos = () => setFilterStatus('active')
  const completedTodos = () => setFilterStatus('completed')
  const allTodos = () => setFilterStatus('all')

  const deleteCompleteTodos = () => {
    const newArr = todoData.filter(el => !el.completed)
    setTodoData(newArr)
  }

  return (
      <section className="todoapp">
        <Header addTodo={addTodo}/>
        <section className="main">
          <TodoList todoData={todoData} onDeleted={onDeleted} filterStatus={filterStatus} onCompleted={onCompleted}/>
          <Footer
              activeTodos={activeTodos}
              completedTodos={completedTodos}
              allTodos={allTodos}
              deleteCompleteTodos={deleteCompleteTodos}
              leftTodos={leftTodos}
          />
        </section>
      </section>
  )
}

export default App
