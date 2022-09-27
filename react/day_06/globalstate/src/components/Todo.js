import React, {useState, useReducer, useRef} from 'react';
import {ADD_TODO, DELETE_TODO, EDIT_TODO, } from "../store/constants";
import reducer, {initialState} from "../store/reducer"


function TodoList() {
    const [todos, dispatch] = useReducer(reducer, initialState);
    const [value, setValue] = useState("");
    
    const inputRef = useRef()
    const handleAddTodo = () => {
        if(value == "") {
            alert("Công việc không được để trống");
            return;
        }
        
        dispatch({
            type: ADD_TODO,
            payload: {
                id: todos.length + 1,
                title: value,
                status: false
            }
        });
        setValue("");
        inputRef.current.focus();
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: DELETE_TODO,
            payload : {
                id
            }
        })
    }

    const handleEditTodo = (id) => {
        // Lấy ra công việc hiện tại
        let editTodo = todos.find(todo => todo.id === id)
        
        // Hiển thị popup cập nhật công việc
        let title = window.prompt("Cập nhật công việc", editTodo.title)
        
        if(title === null) return;
        if(title === "") {
            alert("Tiêu đề không được để trống");
        return;

        }
        dispatch({
            type: EDIT_TODO,
            payload : {
                id,
                title
            }
        })
        
    }

  return ( 
    <div>
        <h1>TodoList</h1>
        <input 
         ref = {inputRef}
         placeholder='Enter todo'
         value={value} 
         onChange={(e) => setValue(e.target.value)}/>
         <button onClick={handleAddTodo}>Add Todo</button>
        
        <ul>
            {todos.length > 0 && todos.map(todo => (
                <li key={todo.id}>
                    <span style={{color: todo.status ? "red" : "black"}}>{todo.title}</span>
                    <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
                    <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                </li>
            ))}
            {todos.length == 0 && <p>Không có công việc nào trong danh sách</p>}
        </ul>
    </div>
  )
}

export default TodoList;