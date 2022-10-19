import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from './todoSlice'

function TodoList() {
  const todos = useSelector((state) => state.todos)
  const [value, setValue] = useState("")
    const dispatch = useDispatch()
    const handleAdd = () => {
        const newTodo = {
          id: todos.length + 1,
          title: value,
          status: false
        }
        dispatch(addTodo(newTodo))
        setValue("")
    }
  return (
    <div>
      <h1>TodoList</h1>
    <input 
    value={value}
    onChange={(e) => setValue(e.target.value)}
    type="text" />
    <button onClick={handleAdd}>Add</button>
    <ul className="list-user">
        {todos.map((todo, index) => (
            <li key={index}>{todo.title}</li>
        ))}
    </ul></div>
  )
}

export default TodoList