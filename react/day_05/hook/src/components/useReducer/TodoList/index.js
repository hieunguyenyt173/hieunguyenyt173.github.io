import React, {useState, useReducer, useRef} from 'react';
import {ADD_TODO, DELETE_TODO, EDIT_TODO, } from "./constants";
import reducer, {initialState} from "./reducer"
// 1. Hiển thị danh, sách todo ban đầu
// 2. Thêm todo
// 3. Xóa todo 
// 4. Sủa todo

// 1. initial State


// 2. action type


// 3. reducer
    
function TodoList() {
    const [todos, dispatch] = useReducer(reducer, initialState);
    const [value, setValue] = useState("");
    const [edit, setEdit] = useState(false)
    const inputRef = useRef()
    const AddTodo = () => {
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

    const deleteTodo = (id) => {
        dispatch({
            type: DELETE_TODO,
            payload : {
                id
            }
        })
    }

    const editTodo = (todo) => {
        inputRef.current.focus();
        setEdit(true);
        setValue(todo.title);
       
    }

    const saveTodo = () => {
        
    }
  return ( 
    <div>
        <h1>TodoList</h1>
        <input 
         ref = {inputRef}
         placeholder='Enter todo'
         value={value} 
         onChange={(e) => setValue(e.target.value)}/>
         {edit == false ? <button onClick={AddTodo}>Add Todo</button>
         : <button onClick={saveTodo}>Save Todo</button> }
        
        <ul>
            {todos.length > 0 && todos.map(todo => (
                <li key={todo.id}>
                    <span style={{color: todo.status ? "red" : "black"}}>{todo.title}</span>
                    <button onClick={() => editTodo(todo)}>Edit</button>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </li>
            ))}
            {todos.length == 0 && <p>Không có công việc nào trong danh sách</p>}
        </ul>
    </div>
  )
}

export default TodoList;