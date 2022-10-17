import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addTodo } from '../../redux/actions/TodoAction';
function TodoList() {
    const { todo } = useSelector((state) => state);
    console.log(todo)
    
    const [value, setValue] = useState("")
    const dispatch = useDispatch()
    const handleAdd = () => {
        const newTodo = {
            id: todo.length + 1,
            title : value
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
            {todo.map((todo, index) => (
                <li key={index}>{todo.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList