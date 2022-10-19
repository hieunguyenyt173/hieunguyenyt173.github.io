import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTwo, decrement, getCounter, getTodoActive, increment } from './couterSlice';

function Counter() {
    const counter =  useSelector(getCounter);
    console.log(useSelector(getTodoActive))
    const dispatch = useDispatch()
    const handleAdd = () => {
        dispatch(increment())
    }
    const handleSubtract = () => {
      dispatch(decrement())
    }
    const handleAddTwo = () => {
        dispatch(addTwo(10))
    }
  return (
    <div>
        <div>
        <h1>Couter : {counter}</h1>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubtract}>Subtract</button>
        <button onClick={handleAddTwo}>Add 2</button>

    </div>
    </div>
  )
}

export default Counter