import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, deleteTodo, fetchTodos } from "./todoSlice";

function TodoList() {
  const todos = useSelector((state) => state.todoList.todos);
  const [value, setValue] = useState("");

  const handleAdd = () => {
    const newTodo = {
      id: todos.length + 1,
      title: value,
      status: false,
    };
    dispatch(addNewTodo(newTodo));
    setValue("");
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleEdit = (todoUpdate) => {};
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  return (
    <div>
      <h1>TodoList</h1>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <button onClick={handleAdd}>Add</button>

      <ul className="list-user">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.title}
            <button onClick={(e) => handleDelete(todo.id)}>Delete</button>
            <button onClick={(e) => handleEdit(todo.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
