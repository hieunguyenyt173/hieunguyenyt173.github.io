import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { faker } from '@faker-js/faker';
import {useGetTodosQuery, useCreateTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } from './todo.service'
function TodoList() {
  const [value, setValue] = useState("");
  const todos =  useSelector(state => state.todoList.todos)
    const {isLoading} = useGetTodosQuery()
    const [createTodo] = useCreateTodoMutation();
    const [updateTodo] = useUpdateTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();
    if (isLoading) {
      return <>Loading ...</>;
  }

  const handleAdd = () => {
    const newTodo = {
      title: value,
      status: false
    }

    createTodo(newTodo)
  };
  const handleEdit = (id) => {
    const update = {
      id,
      title: faker.name.firstName(),
      status: Math.floor(Math.random() * 100),
    }
    updateTodo(update)
  };
  const handleDelete = (id) => {
    deleteTodo(id)
  };
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
          <li style={{}} key={index}>
            {todo.title}
            <button onClick={(e) => handleDelete(todo.id)}>Delete</button>
            <button onClick={(e) => handleEdit(todo.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList