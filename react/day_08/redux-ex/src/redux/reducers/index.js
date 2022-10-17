import {combineReducers} from 'redux'
import CounterReducer from "./CounterReducer";
import todoReducer from './TodoReducer';
import userReducer from './UserReducer';




const rootReducer = combineReducers({
    counter: CounterReducer,
    todo : todoReducer,
    users : userReducer
})

export default rootReducer