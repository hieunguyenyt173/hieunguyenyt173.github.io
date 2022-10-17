import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCount,subtractCount } from '../../redux/actions/CouterAction'
function Counter() {
  const counter = useSelector((state) => state)
  console.log(counter)
  const dispatch = useDispatch();
    const handleAdd = () => {
      dispatch(addCount());
    }
    const handleSubtract = () => {
      dispatch(subtractCount());
    }
  return (
    <div>
        <h1>Couter : {counter.counter}</h1>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubtract}>Subtract</button>

    </div>
  )
}

export default Counter