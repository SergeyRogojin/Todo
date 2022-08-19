import React, {useState} from "react";

export const TodoItems = ({label, onDeleted, onCompleted, completed}) => {

  const [edit, setEdit] = useState(false)
  const [task, setTask] = useState('')

  let classNames = 'active'
  if (completed) classNames = 'completed'
  if (edit) classNames = 'editing'

  const handleSubmit = (event) => {
    event.preventDefault()
    setEdit(!edit)
  }

  const toggleEdit = () => setEdit(true)
  const handleChange = (event) => setTask(event.target.value)

  return (
      <li className={classNames}>
        <div className='view'>
          <input className="toggle" type="checkbox" onClick={onCompleted}/>
          <label>
            <span className="description">{task ? task : label}</span>
          </label>
          <button className="icon icon-edit" onClick={toggleEdit}></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" className="edit" onChange={handleChange}/>
        </form>
      </li>
  )
}