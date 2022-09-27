import React, {useReducer} from 'react'
import Context from './Context'
import reducer ,{initialState} from '../store/reducer'

 const Provider = ( {children} ) => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ todos, dispatch }}>
        {children}
    </Context.Provider>
  )
}

export default Provider;

